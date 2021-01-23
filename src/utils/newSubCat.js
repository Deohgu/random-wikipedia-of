import { fetchPush } from "./fetchPush";

// Called when a category is already entered but user wants another result
export const newSubCat = async (fetchedData) => {
  console.log(`fetchedData in newSubCat: ${fetchedData}`);
  const randomSubCatIndex = Math.floor(
    Math.random() * fetchedData.subCats.length
  );
  const randomSubCat = fetchedData.subCats[randomSubCatIndex];
  // Removing the subCat so that it won't be re-picked.
  fetchedData.subCats.splice(randomSubCatIndex, 1);

  // Global category doesn't seem to work so I am changing the url here.
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${randomSubCat.replace(
    /[" "]/g,
    "_"
  )}&cmprop=title|type&format=json&cmlimit=500&cmtype=page&origin=*`;

  await fetchPush(url);

  // Random article in pages
  const randomPageIndex = Math.floor(
    Math.random() * fetchedData.articles.length
  );
  const randomPage = fetchedData.articles[randomPageIndex];
  // Removing the article page so that it won't be re-picked
  fetchedData.articles.splice(randomPageIndex, 1);

  return randomPage.replace(/["_"]/g, " ");
};
