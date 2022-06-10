### document.getElementById(), document.getElementsByClassname()  returns HTML collection.

### document.querySelector() -> This will return first matching element., document.querySelectorAll() -> This will return all elements which will matches the specific selector we passed in between parenthesis. returns NodeList.

### If we get HTML collection we had to convert it to Array, then can use Array methods to it.

### But in case of NodeList without even converting it into Array can use some Array methods, like .forEach() etc.


# 6 - Nodes
- Everything inside DOM is a node (e.g. elements, text, comments, attributes etc)
- `.hasChildNodes()` it return a boolean value, based on if the calling Node has any Childs or not. 
- parentNode, parentElement

- childNodes (include line breaks), children (preferrable for using)

## Traversing via sibling
- nextElementSibling, previousElementSibling

## How to properly cloned a Node deeply?
- `node_name.cloneNode(true)` here true represents we want to clone deeply means it should contains all the children node in the original node.

    // Cloning the banner node
    const clonedBanner = banner.cloneNode(true);

# Insert / Edit text & html in a Node
- .textContent, .innerHTML just use those two props to manipulate the data.

# Events
- How to add a Event Listener ?

    elementName.addEventListener('eventName', callBack funct)

- Remove node from the DOM:

    parentName.removeChild(removedElementName)

- `e.preventDefault()` gonna prevent the default behaviour.