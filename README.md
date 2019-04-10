# Intro To Js

## Notes

### inline js

```<script>
      alert('Hello World')
      console.log('Secret Message')
      document.write("Liz's page")
      document.title = "Liz's Page"
    </script>
  </body>
  ```

### Examples

```let clickCount = 0
// what we want to happen on a click
const clickClick = () => {
  console.log('click click')
  // change document background color
  // document.body.style.backgroundColor = 'red'

  // count the clicks
  clickCount += 1
  console.log(clickCount)

  // create message to then add
  let message = `Hey, we clicked ${clickCount} times`

  // declare button
  let button = document.querySelector('button')

  // change button text to message
  button.textContent = message
  
  // figure out current color 
  const currentColor = button.style.backgroundColor
  
  // change button color based on current color
  button.style.backgroundColor = currentColor === 'red' ? 'blue' : 'red'

  // add the message to a text element
  document.querySelector('h3.click-count').textContent = message
}

// the main function that will occur when the dom "listens" for all content to load
const main = () => {
    // if there is an h1 called 'hello world' it will add text that says 'hello world'
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
    // examples of what you can do in JS

    // log to console
    console.log(header)

    // create alerts
    alert('Hello World')
    console.log('Secret Message')

    // write to the Dom
    document.write("Liz's page")

    // manipulate the browser
    document.title = "Liz's Page"

  // find and name first element with this tag
  let header = document.querySelector('h1')

  // find and name all elements with same tag
  let allOurFirstDOM = document.querySelectorAll('h1')
  console.log(allOurFirstDOM)

  // Hey document give me the very first button on the page by using a css selector to match
  let button = document.querySelector('button')
  console.log('the button is', button)

  // make the button listen for an "event" and then do the function we want it to do
  button.addEventListener('click', clickClick)

}

document.addEventListener('DOMContentLoaded', main)
```

#### input and value example

##### html

```<body>
    <h1 class='hello-world'></h1>
    <h3 class='click-count'></h3>
    <h2 class='score'>Score</h2>
    <input>Score</input>
    <button class='click-me'>Click Me</button>
    <script src="/main.js" charset="utf-8"></script>
  </body>
  ```

##### JS

```const input = document.querySelector('input')
const displayScore = document.querySelector('h2.score')
// let score = '0'
const changeInput = () => {
  let message = `${input.value}`
  displayScore.textContent = message
}
const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
  input.addEventListener('change', changeInput)
}

document.addEventListener('DOMContentLoaded', main)```