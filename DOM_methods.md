
<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>DOM Methods</h1>
</div>

**1.Finding Elements**

These methods help you select elements in the DOM.


| Method                                     | Description                                                    |
| ------------------------------------------ | -------------------------------------------------------------- |
| `document.getElementById('id')`            | Selects a single element by its `id`                           |
| `document.getElementsByClassName('class')` | Returns a live HTMLCollection of elements with the given class |
| `document.getElementsByTagName('tag')`     | Returns elements by tag name                                   |
| `document.querySelector('selector')`       | Returns the first element matching a CSS selector              |
| `document.querySelectorAll('selector')`    | Returns all elements matching a CSS selector (as NodeList)     |

```javascript
const box = document.getElementById("myBox");
const buttons = document.querySelectorAll(".btn");
```

**Modifying Elements**

Modify content, attributes, and styles.

| Method                                      | Description                                |
| ------------------------------------------- | ------------------------------------------ |
| `element.innerText` / `element.textContent` | Gets/sets the text inside an element       |
| `element.innerHTML`                         | Gets/sets the HTML inside an element       |
| `element.setAttribute('attr', 'value')`     | Sets an attribute like `href`, `src`, etc. |
| `element.getAttribute('attr')`              | Gets the value of an attribute             |
| `element.style.property`                    | Changes inline style                       |

Example

```javascript

box.innerText = "Hello!";
box.style.backgroundColor = "red";
```

**Creating Elements**

Dynamically add new elements to the page.

| Method                          | Description                        |
| ------------------------------- | ---------------------------------- |
| `document.createElement('tag')` | Creates a new element              |
| `parent.appendChild(child)`     | Adds a child element to the parent |
| `element.removeChild(child)`    | Removes a child element            |

```javascript

const newDiv = document.createElement("div");
newDiv.innerText = "New Box";
document.body.appendChild(newDiv);

```

***Removing or Replacing***

| Method                                    | Description                       |
| ----------------------------------------- | --------------------------------- |
| `element.remove()`                        | Removes the element from DOM      |
| `parent.replaceChild(newChild, oldChild)` | Replaces one element with another |

```javascript

box.remove(); // removes the box

```

***Adding Event Listners***

Let elements respond to user actions.

| Method                                           | Description                |
| ------------------------------------------------ | -------------------------- |
| `element.addEventListener('event', callback)`    | Attaches an event listener |
| `element.removeEventListener('event', callback)` | Removes an event listener  |

