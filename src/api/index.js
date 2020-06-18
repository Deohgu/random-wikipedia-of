// https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Botany&cmprop=title|type&cmnamespace=14&format=json&cmlimit=500

// cmnamespace indicates the type of content, 0 are articles and 14 are categories. So in order to list several levels deep we need to look into the cmnamespace=14 of the initial category and then look up that category as well and rinse and repeat until all categories of the first are done.
// One simpler version would be to remove the level system and have it at 1 for standard.

// If category has more than 500 results how to solve it? there's a continue prop, look into that

// Currently need to export the data to the app.js file

let mainCategory = "Botany"; // test run, delete Botany after

const url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${mainCategory}&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat`;


// Will need to destructure this after reading about destructuring. Just making it neater for future usage and quality of code
// As done around the minute 23. https://www.youtube.com/watch?v=khJlrj3Y6Ls
export const request = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

console.log(` type of request = ${typeof request}`);