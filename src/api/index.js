let url = "";
let pages = [];
let subCats = [];

// If an ERROR is received is it likely that it was done through form submit
// See this issue https://github.com/Deohgu/random-wikipedia-of/issues/13

const fetchPush = async (urlWithCat) => {
  const urlFetch = await fetch(urlWithCat);
  const {
    query: { categorymembers },
  } = await urlFetch.json();

  for (const element of categorymembers) {
    if (element.type === "page") {
      pages.push(element.title.replace(/[" "]/g, "_")); // articles/pages to pages array
    } else {
      subCats.push(
        element.title.replace(/Category:/g, "").replace(/[" "]/g, "_") // categories of main category/subCats to subCats array
      );
    }
  }
};

// Called when a new category is entered
export const newCat = async (category) => {
  // Resetting for the new category.
  pages = [];
  subCats = [];

  url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${category}&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat&origin=*`; // cannot lower case URLs, Wikipedia categories are case sensitive

  await fetchPush(url);

  return newSubCat();
};

// Called when a category is already entered but user wants another result
export const newSubCat = async () => {
  const randomSubCatIndex = Math.floor(Math.random() * subCats.length);
  const randomSubCat = subCats[randomSubCatIndex];
  // Removing the subCat so that it won't be re-picked.
  subCats.splice(randomSubCatIndex, 1);

  // Global category doesn't seem to work so I am changing the url here.
  url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${randomSubCat}&cmprop=title|type&format=json&cmlimit=500&cmtype=page&origin=*`;

  await fetchPush(url);

  // Random article in pages
  const randomPageIndex = Math.floor(Math.random() * pages.length);
  const randomPage = pages[randomPageIndex];
  // Removing the article page so that it won't be re-picked
  pages.splice(randomPageIndex, 1);

  return randomPage.replace(/["_"]/g, " ");
};

// Fetches existing categories related to the current input to recommend
export const recommendedFunc = async (data) => {
  const recomendedFetch = await fetch(
    `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=6&namespace=14&suggest&search=${data}&origin=*`
  );
  const jsonData = await recomendedFetch.json();
  const parsedData = [];
  await jsonData[1].map((curr) =>
    parsedData.push(curr.replace(/^Category:/, ""))
  );
  return parsedData;
};
