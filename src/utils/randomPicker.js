// Random article in pages
export const randomPicker = (fetchedData, type) => {
  console.count('randomPicker')
  if (type === 'article') {
    const randomPageIndex = Math.floor(
      Math.random() * { ...fetchedData }.articles.length
    )
    const randomArticle = { ...fetchedData }.articles[randomPageIndex]
    // Removing the article page so that it won't be re-picked
    // {...fetchedData}.articles.splice(randomPageIndex, 1)
    // return fetchedData;
    return randomArticle // Returns article to be used.
  } else if (type === 'subCats') {
    console.count('else in randomPicker')
    const randomSubCatIndex = Math.floor(
      Math.random() * { ...fetchedData }.subCats.length
    )
    const randomSubCat = { ...fetchedData }.subCats[randomSubCatIndex]
    // Removing the subCat so that it won't be re-picked.
    // {...fetchedData}.subCats.splice(randomSubCatIndex, 1) // WILL NOT DO ANYTHING LIKE THIS
    // return fetchedData;
    return randomSubCat // Returns subCats to be used.
  }
}
