// Random article in pages
export const randomPicker = (fetchedData, type) => {
  if (type === 'article') {
    const randomPageIndex = Math.floor(
      Math.random() * { ...fetchedData }.articles.length
    )
    const randomArticle = { ...fetchedData }.articles[randomPageIndex].replace(/["_"]/g, ' ')

    return randomArticle // Returns article to be used.
  } else if (type === 'subCats') {
    const randomSubCatIndex = Math.floor(
      Math.random() * { ...fetchedData }.subCats.length
    )
    const randomSubCat = { ...fetchedData }.subCats[randomSubCatIndex]

    return randomSubCat // Returns subCats to be used.
  }
}
