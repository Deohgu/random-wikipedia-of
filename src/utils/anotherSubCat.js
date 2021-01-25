import { fetchList } from './fetchList'
import { randomPicker } from './randomPicker'

// Called when a category is already entered but user wants another result
export const anotherSubCat = async (fetchedData) => {
  const fetchedDataCopy = { ...fetchedData }
  const anotherCat = randomPicker(fetchedDataCopy, 'subCats') // a random category to add more data

  const newData = fetchList(anotherCat)
  fetchedDataCopy.articles.push(newData.articles) // adds more articles to original from picked category
  fetchedDataCopy.subCats.push(newData.subCats) // adds more categories to original from picked category

  fetchedDataCopy.picked = randomPicker(fetchedDataCopy, 'article') // picks an article for the user

  console.log(`anotherSubCat return list picked: ${fetchedDataCopy.picked}`)
  return fetchedDataCopy // {picked: "", articles: [], subCats: []}
}
