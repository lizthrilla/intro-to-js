
// Declare clickCount starting at 0
let clickCount = 0

// Create button and input variables to save typing
const button = document.querySelector('button.click-count')
const input = document.querySelector('input')

// function to change input
const changeInput = () => {
  // console.log the value of html input
  console.log(input.value)

  // declare value as a variable
  let inputMessage = `${input.value}`

  // change the text content of the html class `second-line` to input message
  document.querySelector('.second-line').textContent = inputMessage
}

// color changing function on click
const changeColor = () => {
  // every time I click, increase the value of clickCount by 1
  clickCount += 1

  // declare variable for the click count message
  let message = `Hey, we clicked ${clickCount} times`

  // write the message to the html class '.first-line'
  document.querySelector('.first-line').textContent = message

  // variable to say what current background color
  const currentBackground = button.style.backgroundColor

  // ternary that says if the button background color is equal to yellow, change it to green, otherwise stay yellow
  button.style.backgroundColor = currentBackground === 'yellow' ? 'green' : 'yellow'
}

// the main function which will load when the DOM content is finished loading
const main = () => {
  // set body background color to blue
  // document.body.style.backgroundColor = 'blue'

  // button 'listens' for a 'click' and then performs changeColor function
  button.addEventListener('click', changeColor)

  // input 'listens' for a 'change' and then performs changeInput function
  input.addEventListener('change', changeInput)
}

// the entire document listens for all the content to load in html and css and then performs 'main' function
document.addEventListener('DOMContentLoaded', main)
