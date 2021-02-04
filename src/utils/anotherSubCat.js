import { fetchList } from './fetchList'
import { randomPicker } from './randomPicker'

// Called when a category is already entered but user wants another result
export const anotherSubCat = async (fetchedData) => {
  const fetchedDataCopy = { ...fetchedData }
  const anotherCat = randomPicker(fetchedDataCopy, 'subCats') // a random category to add more data

  // Removing the category so that it won't be re-picked
  const indexOfanotherCat = fetchedDataCopy.subCats.indexOf(anotherCat)
  fetchedDataCopy.subCats.splice(indexOfanotherCat, 1)

  const newData = await fetchList(anotherCat)
    .then((parsedData) => parsedData)
    .catch((error) => console.log(error))

  fetchedDataCopy.articles = fetchedDataCopy.articles.concat(newData.articles) // adds more articles to original from picked category
  fetchedDataCopy.subCats = fetchedDataCopy.subCats.concat(newData.subCats) // adds more categories to original from picked category

  fetchedDataCopy.picked = randomPicker(fetchedDataCopy, 'article') // picks an article for the user

  // Removing the article so that it won't be re-picked
  const indexOfPicked = fetchedDataCopy.articles.indexOf(fetchedDataCopy.picked)
  fetchedDataCopy.articles.splice(indexOfPicked, 1)

  return fetchedDataCopy // {picked: "", articles: [], subCats: []}
}
