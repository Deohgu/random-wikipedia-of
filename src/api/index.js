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

  // Dividing and formatting the data to a slug
  fetchedData.forEach(element => {
    if (element.type === "page") {
      filteredPages.push(element.title
        .replace(/[" "]/g, "_"));
    } else {
      filteredCats.push(element.title
        .replace(/Category:/g, "")
        .replace(/[" "]/g, "_"));
    }

    // Add this to the else in fetchedData.forEach
    filteredCats.forEach(element => {
      mainCategory = element;
      const catRequest = async () => {

        // fetch url underneath keeps looking for mainCategory of Botany for some reason, so I am redoing a var here with the same url to temporarily fix it
        const quickFixUrl = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${mainCategory}&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat`;
        
        const catResponse = await fetch(quickFixUrl);
        
        const { query: { categorymembers }} = await catResponse.json();
        return categorymembers;
      }

      // CURRENTLY HERE!
      //The Problem was plain and simple that it was pushing to early thus pushing the still unfullfiled promise. With this async function it waits for the result before pushing so it pushes a value as it should.
      // Just needs cleaning and outputting the precise result, I believe it's spreading the results onto the main aray, and then chosing one at random.
      const pushToFiltered = async () => {
      filteredPagesFromCatsTest.push( await catRequest());
      console.log(filteredPagesFromCatsTest)
      }
      pushToFiltered();
    });
  });



  

  console.log(filteredPages);
  console.log(filteredCats);
}

randomArticle(request());