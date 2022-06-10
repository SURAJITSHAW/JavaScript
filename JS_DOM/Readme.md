### document.getElementById(), document.getElementsByClassname()  returns HTML collection.

### document.querySelector() -> This will return first matching element., document.querySelectorAll() -> This will return all elements which will matches the specific selector we passed in between parenthesis. returns NodeList.

### If we get HTML collection we had to convert it to Array, then can use Array methods to it.

### But in case of NodeList without even converting it into Array can use some Array methods, like .forEach() etc.


# 6 - Nodes
- Everything inside DOM is a node (e.g. elements, text, comments, attributes etc)
- `.hasChildNodes()` it return a boolean value, based on if the calling Node has any Childs or not. 

## How to properly cloned a Node deeply?
- `node_name.cloneNode(true)` here true represents we want to clone deeply means it should contains all the children node in the original node.

    // Cloning the banner node
    const clonedBanner = banner.cloneNode(true);