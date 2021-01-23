import { fetchPush } from "./fetchPush";
import { newSubCat } from "./newSubCat";

// Called when a new category is entered
export const newCat = async (category) => {
  // Resetting for the new category.

  const url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${category.replace(
    /[" "]/g,
    "_"
  )}&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat&origin=*`; // cannot lower case URLs, Wikipedia categories are case sensitive

  const fetchedData = await fetchPush(url);

  return newSubCat(fetchedData);
};
