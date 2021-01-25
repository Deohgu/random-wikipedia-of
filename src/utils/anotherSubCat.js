import { fetchPush } from './fetchPush'
import { randomPicker } from './randomPicker'

// Called when a category is already entered but user wants another result
export const anotherSubCat = async (fetchedData) => {
  const articlesSubcats = fetchedData
  const anotherCat = randomPicker(articlesSubcats, 'subCats') // a random category to add more data

  articlesSubcats.articles = fetchPush(anotherCat).articles // adds more articles to original from picked category
  articlesSubcats.subCats = fetchPush(anotherCat).subCats // adds more categories to original from picked category

  articlesSubcats.picked = randomPicker(articlesSubcats, 'article') // picks an article for the user

  return articlesSubcats // {picked: "", articles: [], subCats: []}
}
