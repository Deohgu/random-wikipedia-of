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