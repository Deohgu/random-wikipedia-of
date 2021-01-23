// Fetches existing categories related to the current input to recommend
export const recommendedFunc = async (data) => {
  const recomendedFetch = await fetch(
    `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=6&namespace=14&suggest&search=${data}&origin=*`
  );
  const jsonData = await recomendedFetch.json();
  const parsedData = [];
  await jsonData[1].map((curr) =>
    parsedData.push(curr.replace(/^Category:/, ""))
  );
  return parsedData;
};
