// have it at 1 for level deep as standard.
// Is it possible to have several levels deep without pulling several of them?Currently first fetch pulls pages and subcats. subsubcats would require 2 fetches for??

console.log("./api/index.js is working");


// Output one article at random
export const randomArticle = async () => {
  // Counting the time required for all the Fetch requests;
  console.time("Fetch this time");
  
  let mainCategory = "botany"; // test run only, replace with input after

  const url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${mainCategory}&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat`;

  let filteredPages = [];
  let filteredCats = [];

  let filteredPagesFromCatsTest = [];
  
  const response = await fetch(url);
  const { query: { categorymembers } } = await response.json();
  
  for await (const element of categorymembers) {
    if (element.type === "page") {
      filteredPages.push(element.title
        .replace(/[" "]/g, "_"));
    } else {
      filteredCats.push(element.title
        .replace(/Category:/g, "")
        .replace(/[" "]/g, "_"));
    }
    
    for await (const element of filteredCats) {
      
      mainCategory = element;

        // fetch url underneath keeps looking for mainCategory of Botany for some reason, so I am redoing a var here with the same url to temporarily fix it
        // const quickFixUrl = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${mainCategory}&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat`;
        
        const catResponse = await fetch(url);
        
        const { query: { categorymembers }} = await catResponse.json();

        // Just learned that forEach does not work Async, read here:
        //https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
        // Instead I have to use a modern for of
        
        // THIS NEEDS TO FILTER THE SUBCATS OUT, FIX THIS!
        for await (const element of categorymembers) {
          if(element.type === "page") {
            filteredPagesFromCatsTest.push(element.title
              .replace(/Category:/g, "")
              .replace(/[" "]/g, "_"));
          }
        }
    }
  };
  
  // Everything is working but it is suuuuuper slow to fetch everything!
  // One solution is to instead of fetching all the 25 subcats, it fetches one subcat at random each time the user wants another result. Instead of waiting 1 minute for everything and going with the third pick or whatever, they might request 3 times and wait a second each time for a total of 3 seconds?
  // And each time it would add to the array, so each new request for a page inside the same query name it just fetches for a new sub cat and gives another at random?
  
  // Last touches with pushing things where they need to be and picking one at random.
  
  // Then major code cleaning - remember, use of IIFE and seeing what can removed for a correct order of calls through await structure. Await makes the whole async function wait for that result to be finished, but only inside that async function. It's a simple organisation of sequences throught await.
  //Another thing is to check if I still need the quickFixUrl
  
  // Then improving speed
  
  // After all that continue with project, remember the option to return another one from the array if the search is the same.




  console.timeEnd("Fetch time");
  console.log(filteredPages);
  console.log(filteredCats);

  console.log(filteredPagesFromCatsTest);
  // return filteredPagesFromCatsTest;
}

// randomArticle();