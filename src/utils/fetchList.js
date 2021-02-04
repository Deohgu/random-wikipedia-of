export const fetchList = async (category) => {
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${category.replace(
    /[" "]/g,
    '_'
  )}&cmprop=title|type&format=json&cmlimit=500&cmtype=page|subcat&origin=*` // cannot lower case URLs, Wikipedia categories are case sensitive
  const fetchedData = { articles: [], subCats: [] }
  const response = await fetch(url)

  if (!response.ok) { // promise returns error
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  } else {
    const {
      query: { categorymembers }
    } = await response.json()

    for (const element of categorymembers) {
      if (element.type === 'page') {
        fetchedData.articles.push(element.title.replace(/[" "]/g, '_')) // articles/pages to pages array
      } else {
        fetchedData.subCats.push(
          element.title.replace(/Category:/g, '').replace(/[" "]/g, '_') // categories of main category/subCats to subCats array
        )
      }
    }
    return fetchedData
  }
}
