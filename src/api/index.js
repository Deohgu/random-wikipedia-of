// https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Botany&cmprop=title|type&cmnamespace=14&format=json&cmlimit=500

// cmnamespace indicates the type of content, 0 are articles and 14 are categories. So in order to list several levels deep we need to look into the cmnamespace=14 of the initial category and then look up that category as well and rinse and repeat until all categories of the first are done.
// One simpler version would be to remove the level system and have it at 1 for standard.

// If category has more than 500 results how to solve it? there's a continue prop, look into that

// Currently need to export the data to the app.js file

let mainCategory = "Botany"; // test run, delete Botany


fetch(`https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${mainCategory}&cmprop=title|type&cmnamespace=14&format=json&cmlimit=500`)
  .then(response => response.json())
  .then(data => console.log(data));


/*
const request = async () => {
  const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${mainCategory}&cmprop=title|type&cmnamespace=14&format=json&cmlimit=500`);
  const json = await response.json();
  console.log(json);
}
request();
*/