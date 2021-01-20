# Overview  

<br>

### What is it?

A web application that makes usage of Wikipedia's API to output a random article within a set category.  
Now you can read random Wikipedia articles that actually interest you! It works better than Wikipedia's [hidden similar function](https://en.wikipedia.org/wiki/Special:RandomInCategory) because it works on categories that only contain sub-categories and no articles.  

<br>

### How to use?

The user writes down a category that is interested in and selects from the recommended list bellow, these show the existing categories matching the input.  
Once the user presses a recommended category or presses Enter the Web App will replace the text bellow and add the name of the article hyperlinked.  
If the user would like another article, the same recommendation can be selected or the Enter key can be pressed.  

<br>

### How does it work?

When the user submits the query with an **existing** category, such as the ones recommended bellow, the Web App fetches all the articles names within set category plus its sub-categories.  
After receiveing that data the algorithm picks a sub category at random and it executes the same algorithm as above.  
Lastly it selects an article at random and displays the title for the user.  
Thus the articles are two levels deep.  

<br>

### Why was it built?

Out of my own necessity, I quite enjoy reading random Wikipedia articles but I couldn't be bothered with the articles that its random function would provide me.  

<br>

## Contributing

The [Random Wikipedia of](https://randomwikipedia.diogosantos.dev/) is open for anyone that is interested.  
If you wish to contribute feel free to open any issues regarding bugs, possible features or start discussions.
