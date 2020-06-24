// have it at 1 for level deep as standard.
// Is it possible to have several levels deep without pulling several of them?Currently first fetch pulls pages and subcats. subsubcats would require 2 fetches for??

console.log("./api/index.js is working");



let category = "botany"; // test run only, replace with input after

let url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${category}&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat`;

let pages = [];
let subCats = [];

// let filteredPagesFromCatsTest = [];

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
}

// Should be called when a new category is entered
// After the enter/submit control the previous states should be compared in order to choose which function to run.
export const newCat = async () => {

  await fetchPush();

  await newSubCat();
  
  console.log(pages);
  console.log(subCats);
};


export const newSubCat = async () => {
  // Pick one at random from subCats, remove it from that array, fetch that subCat, add the results to pages
  const randomIndex = Math.floor(Math.random() * subCats.length);
  const randomSubCat = subCats[randomIndex];
  
  // Removing the subCat so that it won't be re-picked.
  subCats.splice(randomIndex, 1);
  
  // just changing the global category doesn't seem to work so I am changing the url here. 
  url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${randomSubCat}&cmprop=title|type&format=json&cmlimit=500&cmtype=page`;

  await fetchPush();
  
  
  // Output one at random from pages and remove it
  

  // I am a bit confused regarding the length of the results, it should be working, just need to check if it's adding more than it should. The first adds the standard + a random subCat and then the last pages console.log should be the first plus this new subCat
  console.log(randomSubCat + randomSubCat.length);
  console.log(pages);
};









// Output one article at random
  // Counting the time required for all the Fetch requests;
  

  
  


    // Solution:
    
    // Run the first fetch, distribute data and run subCatFetchFunction on a random subcat from the subcats array and remove that subcat from that array. In essence this code will breakdown into at least two separate functions that will be called in app.js?
    // random button - if category exists (was inputed) and is equal to previous category state (variable as updated method exists?) run the newSubCat and subsequently.

  
  // Everything is working but it is suuuuuper slow to fetch everything!
  // One solution is to instead of fetching all the 25 subcats, it fetches one subcat at random each time the user wants another result. Instead of waiting 1 minute for everything and going with the third pick or whatever, they might request 3 times and wait a second each time for a total of 3 seconds?
  // And each time it would add to the array, so each new request for a page inside the same query name it just fetches for a new sub cat and gives another at random?
  
  // Last touches with pushing things where they need to be and picking one at random.
  
  // Then major code cleaning - remember, use of IIFE and seeing what can removed for a correct order of calls through await structure. Await makes the whole async function wait for that result to be finished, but only inside that async function. It's a simple organisation of sequences throught await.
  //Another thing is to check if I still need the quickFixUrl
  
  // Then improving speed
  
  // After all that continue with project, remember the option to return another one from the array if the search is the same.



  // console.log(filteredPagesFromCats);
  // return filteredPagesFromCatsTest;


// randomArticle();