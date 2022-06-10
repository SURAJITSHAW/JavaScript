document.getElementById(), document.getElementsByClassname()  returns HTML collection.

document.querySelector() -> This will return first matching element., document.querySelectorAll() -> This will return all elements which will matches the specific selector we passed in between parenthesis. returns NodeList.

If we get HTML collection we had to convert it to Array, then can use Array methods to it.

But in case of NodeList without even converting it into Array can use some Array methods, like .forEach() etc.

In DOM everything is a node (Elements, text inside elements, attributes and even comments).

# 6 - Nodes
- Everything inside DOM is a node (e.g. elements, text, comments, attributes etc)