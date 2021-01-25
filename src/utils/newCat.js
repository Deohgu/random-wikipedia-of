import { fetchPush } from './fetchPush'
import { randomPicker } from './randomPicker'

// Called when a new category is entered
export const newCat = async (category) => {
  // fetches articles and subCats
  // articlesSubcats = { articles: [...], subCats: [...] }
  const articlesSubcats = await fetchPush(category)

  // Can be improved by somewhat calling anotherSubCat
  // If depth of 2 ////////////////////////////
  const anotherCat = randomPicker(articlesSubcats, 'subCats') // a random category to add more data

  articlesSubcats.articles = fetchPush(anotherCat).articles // adds more articles to original
  articlesSubcats.subCats = fetchPush(anotherCat).subCats // adds more categories to original
  /// /////////////////////////////////////////

  articlesSubcats.picked = randomPicker(articlesSubcats, 'article') // picks an article for the user

  return articlesSubcats // {picked: "", articles: [], subCats: []}
}
