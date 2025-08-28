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
To create and insert a new element we can follow the following steps.
- **Step1:** Using ```document.createElement(' ')``` create an element. The parameter could be div,p or whatever element you want to create.
- **Step2:** Store the create element into a variable like this ```const newElement = document.createElement('div')```
- **Step3:** Now insert your html into the variable like this ```newElement.innerHTML = `<p>Hello World!</p>` ``` This will create a paragraph inside the newElement.
- **Step4:** Now find the parent of this div where this newElement you want to insert. You can you ```document.getElementById()``` to find the parent.
- **Step5:** Now using ```appendChild()``` method you can append the new element to the parent as a child. Let's say we store the parent into a variable called **parent**. Then you can insert the newElement into the DOM like this ```parent.appendChild(newElement)```
By following these steps we can create and insert a new element into the DOM.

## 3. What is Event Bubbling and how does it work?
Event Bubbling is one of the technique of event propagation. Let's think of a fish into the water making a bubble. This bubble will occur from the place where the fish makes the bubble and will go up to the water level. We can compare the event bubbling with this.
Let's say we set a event into a button and this button is inside a parent div and this parent div is again iside into a parent section. Here we have set one event into the button and another event into the div and another event into the section. If we fire the event into button all the other two event will also fire. This is what Event bubbling is. Once we fire the button event this event will propagate to it's parent and see another event and will fire it then it will propagate to the other parent and find another event and will fire it also. Like this it will go till the root and where it find a event will fire it. As it goes from the target to its root, like upside order that's why it is called event bubbling and this is how it works.

## 4. What is Event Delegation in JavaScript? Why is it useful?
There will be only **one event for multiple element** and when another element added to that part that event should also work for the newly added element. Think of a section which has 3cards inside it. These card has a button **buy now**. Now all these three button will be under into a only one event and further if we add more cards into the section all the newly added cards buy now button will go under that one event and should work fine.  Event delegation improves the efficiency of the website.

## 5. What is the difference between preventDefault() and stopPropagation() methods?
- **preventDefault():** This method is used for prevent the default behavior of an event.
- **stopPropagation():** This method is used for stop the propagation into the level where we want to to stop it. If we take the example of 'question3' and lets say we have use stop propagation into the button level. Then only button event will be fired and rest of the event will stop propagating. 
