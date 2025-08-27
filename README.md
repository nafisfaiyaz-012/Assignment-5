## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- **getElementById:** Using this javaScript method we take only **one element** from the html, **giving an id** to the element and later we manipulate the element based on our usecase. lets say we have an element ``` <p id = "myName"> Nafis Faiyaz </p>``` in our html file and we give an id to the element. Using getElementById we can access the element from the dom like this ``` document.getElementById('myName'); ``` and later we can manipulate this element based on our usecases. Like we can give the element some style like changing its backgroundColor or text color and so on.
- **getElementsByClassName:** Using this javaScript method we can access **multiple elements having the same class name** from the **DOM(Document Object Model)** and later we manipulate them based on our usecases. In javaScript we access the elements having same className using ``` document.getElementsByClassName('btn-copy'); ```. This gives us a **htmlCollection** of the elements having the same class name **btn-copy**.
- **querySelector:** Using this we can access the **first element of a css selector**. In querySelector parameter we give a CSS selector. This selector can be complex or simple, doesn't matter how complex or simple CSS selector we set to it's parameter this method only gives us the **first element** of that CSS selector.
```
document.querySelector('.className'); /
document.querySelector('#id'); /
document.querySelector('.className > div > p');
```
No matter what the CSS selector is, it only gives us the first element.
- **querySelectorAll:** This method is almost similar to the querySelector but the major difference is it gives us **all the elements** of that CSS selector which we give it as a parameter, where querySelector gives us only **one element**. This method returns a nodeList. This nodeList contains all the elements of that CSS selector.
```
document.querySelectorAll('.className'); /
document.querySelectorAll('#id'); /
document.querySelectorAll('.className > div > p');
```
This method returns all the element into a nodeList.
## 2. How do you create and insert a new element into the DOM?


## 3. What is Event Bubbling and how does it work?


## 4. What is Event Delegation in JavaScript? Why is it useful?


## 5. What is the difference between preventDefault() and stopPropagation() methods?

