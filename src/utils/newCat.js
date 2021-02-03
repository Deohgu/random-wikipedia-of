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

    // Removing the category so that it won't be re-picked
    const indexOfanotherCat = articlesSubcats.subCats.indexOf(anotherCat);
    articlesSubcats.subCats.splice(indexOfanotherCat, 1);

  const newData = await fetchList(anotherCat)
    .then((parsedData) => parsedData)
    .catch((error) => error)

    articlesSubcats.articles = articlesSubcats.articles.concat(newData.articles) // adds more articles to original from picked category
    articlesSubcats.subCats = articlesSubcats.subCats.concat(newData.subCats) // adds more categories to original from picked category
  /// //////////////////////////////////////////

  articlesSubcats.picked = randomPicker(articlesSubcats, 'article') // picks an article for the user

    // Removing the article so that it won't be re-picked
    const indexOfPicked = articlesSubcats.articles.indexOf(articlesSubcats.picked);
    articlesSubcats.articles.splice(indexOfPicked, 1);

  return articlesSubcats // {picked: "", articles: [], subCats: []}
}
