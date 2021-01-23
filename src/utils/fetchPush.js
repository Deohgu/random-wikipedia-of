export const fetchPush = async (urlWithCat) => {
  const fetchedData = { articles: [], subCats: [] };
  const urlFetch = await fetch(urlWithCat);
  const {
    query: { categorymembers },
  } = await urlFetch.json();

  for (const element of categorymembers) {
    if (element.type === "page") {
      fetchedData.articles.push(element.title.replace(/[" "]/g, "_")); // articles/pages to pages array
    } else {
      fetchedData.subCats.push(
        element.title.replace(/Category:/g, "").replace(/[" "]/g, "_") // categories of main category/subCats to subCats array
      );
    }
  }
  console.log(`fetchedData: ${fetchedData}`);
  return fetchedData;
};
