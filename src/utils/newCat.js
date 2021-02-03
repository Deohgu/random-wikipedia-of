import { fetchList } from './fetchList'
import { randomPicker } from './randomPicker'

// Called when a new category is entered
export const newCat = async (category) => {
  // fetches articles and subCats
  // articlesSubcats = { articles: [...], subCats: [...] }
  const articlesSubcats = await fetchList(category)
    .then((parsedData) => parsedData)
    .catch((error) => console.log(error))

  // Can be improved by somewhat calling anotherSubCat
  // If depth of 2 ////////////////////////////
  const anotherCat = randomPicker(articlesSubcats, 'subCats') // a random category to add more data

  const newData = await fetchList(anotherCat)
    .then((parsedData) => parsedData)
    .catch((error) => error)

  articlesSubcats.articles.push(newData.articles) // adds more articles to original from picked category
  articlesSubcats.subCats.push(newData.subCats) // adds more categories to original from picked category
  /// //////////////////////////////////////////

  articlesSubcats.picked = randomPicker(articlesSubcats, 'article') // picks an article for the user

  return articlesSubcats // {picked: "", articles: [], subCats: []}
}
