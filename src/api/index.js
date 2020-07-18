// To do here:
// If the picked subcat has no pages (probably only subcats) fetch a level deeper?  In total it's first Category Fetch, second SubCat fetch, and third random subCat fetch. For a new random it's simply 2 fetches. So not that many unless you're very unlucky.

let url = "";
let pages = [];
let subCats = [];

const fetchPush = async (category) => {
  const urlFetch = await fetch(url);
  const {
    query: { categorymembers },
  } = await urlFetch.json();

  for await (const element of categorymembers) {
    if (element.type === "page") {
      pages.push(element.title.replace(/[" "]/g, "_"));
    } else {
      subCats.push(
        element.title.replace(/Category:/g, "").replace(/[" "]/g, "_")
      );
    }
  }
};

// Called when a new category is entered
export const newCat = async (category) => {
  // Resetting for the new category.
  pages = [];
  subCats = [];

  console.log(`newCat as been invoked`);

  url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${category}&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat&origin=*`;

  await fetchPush(category);

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

  await fetchPush();

  // Random article in pages
  const randomPageIndex = Math.floor(Math.random() * pages.length);
  const randomPage = pages[randomPageIndex];
  // Removing the article page so that it won't be re-picked
  pages.splice(randomPageIndex, 1);

  console.log(`Random Page = ${randomPage}`);

  return randomPage.replace(/["_"]/g, " ");
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

export const recommendedFunc = async (data) => {
  const recomendedFetch = await fetch(
    `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=6&namespace=14&suggest&search=${data}&origin=*`
  );
  const recommendedData = await recomendedFetch.json(); // Can't seem to destructure it.
  return recommendedData[1];
};
