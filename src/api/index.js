// have it at 1 for level deep as standard.

// If category has more than 500 results how to solve it? there's a continue prop, look into that


let mainCategory = "Botany"; // test run only, replace with input after

const url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${mainCategory}&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat`;

// Note to self: Destructured so that the we return nothing but what we are interested in.
export const request = async () => {
  const response = await fetch(url);
  const { query: { categorymembers } } = await response.json();
  return categorymembers;
}


// Output one article at random
const randomArticle = async (fetchFunction) => {
  const fetchedData = await fetchFunction;

  let filteredPages = [];
  let filteredCats = [];

  let filteredPagesFromCatsTest = [];
  
  for await (const element of fetchedData) {
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
        const quickFixUrl = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${mainCategory}&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat`;
        
        const catResponse = await fetch(quickFixUrl);
        
        const { query: { categorymembers }} = await catResponse.json();

        // Just learned that forEach does not work Async, read here:
        //https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
        // Instead I have to use a modern for of
        
        for await (const element of categorymembers) {
            filteredPagesFromCatsTest.push(element.title
              .replace(/Category:/g, "")
              .replace(/[" "]/g, "_"));
        }
    }
  };
  
  // Everything is working but it is suuuuuper slow to fetch everything!
  
  // Last touches with pushing things where they need to be and picking one at random.
  
  // Then major code cleaning - remember, use of IIFE and seeing what can removed for a correct order of calls through await structure. Await makes the whole async function wait for that result to be finished, but only inside that async function. It's a simple organisation of sequences throught await.
  //Another thing is to check if I still need the quickFixUrl
  
  // Then improving speed
  
  // After all that continue with project, remember the option to return another one from the array if the search is the same.





  console.log(filteredPages);
  console.log(filteredCats);

  console.log(filteredPagesFromCatsTest);
}

randomArticle(request());