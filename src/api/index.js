// have it at 1 for level deep as standard.
// Is it possible to have several levels deep without pulling several of them?Currently first fetch pulls pages and subcats. subsubcats would require 2 fetches for??

// To do here:
// If the picked subcat has no pages (probably only subcats) fetch a level deeper?  In total it's first Category Fetch, second SubCat fetch, and third random subCat fetch. For a new random it's simply 2 fetches. So not that many unless you're very unlucky.

let category = "botany"; // test run only, replace with input after
let url = "";
let pages = [];
let subCats = [];



const fetchPush = async () => {
  const urlFetch = await fetch(url);
  const { query: { categorymembers } } = await urlFetch.json();
  
  for await (const element of categorymembers) {
    if (element.type === "page") {
      pages.push(element.title
        .replace(/[" "]/g, "_"));
    } else {
      subCats.push(element.title
        .replace(/Category:/g, "")
        .replace(/[" "]/g, "_"));
    }
  };
  // Only to try and read elsewhere
  // return categorymembers;
}

// Should be called when a new category is entered
// After the enter/submit control the previous states should be compared in order to choose which function to run.
export const newCat = async () => {

  url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${category}&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat`;

  await fetchPush();

  await newSubCat();
};


export const newSubCat = async () => {
  // Pick one at random from subCats, remove it from that array, fetch that subCat, add the results to pages
  const randomSubCatIndex = Math.floor(Math.random() * subCats.length);
  const randomSubCat = subCats[randomSubCatIndex];
  // Removing the subCat so that it won't be re-picked.
  subCats.splice(randomSubCatIndex, 1);
  
  // Global category doesn't seem to work so I am changing the url here.
  url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${randomSubCat}&cmprop=title|type&format=json&cmlimit=500&cmtype=page`;

  await fetchPush();
  
  
  // Random article in pages
  const randomPageIndex = Math.floor(Math.random() * pages.length);
  const randomPage = pages[randomPageIndex];
  // Removing the subCat so that it won't be re-picked
  pages.splice(randomPageIndex, 1);
  
  
  //Cannot get this to console.log, even though in fetchPush categorymembers in being returned, it simply says that it is not defined as if this console.log is running first. Maybe I still don't understand await. read the article in DEV.
  // console.log(`categorymembers ${categorymembers}`);
  console.log(`Random Page = ${randomPage}`);
  
  return randomPage;
};
  

// random button - if category exists (was inputed) and is equal to previous category state (variable as updated method exists?) run the newSubCat and subsequently.