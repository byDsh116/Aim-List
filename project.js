const root = document.getElementById('root')
const btnDiv = document.createElement('div')
const outputResult = document.createElement('div')
const theme = document.createElement ('div')
const themeBtn = document.createElement('button')

outputResult.setAttribute('class', 'output')
btnDiv.setAttribute('class', 'btn-div')
theme.setAttribute('class', 'theme-btn-div')
themeBtn.setAttribute('class', 'theme-btn')
themeBtn.innerHTML = 'Dark theme'


const buttonsNamesArray = ['Coding', 'Work', 'Study', 'Art', 'Rest']

const createButton = (className) => {
  const button = document.createElement('button')
  button.setAttribute('class', 'button')
  button.innerText = className
  button.addEventListener('click', clickOnButton)
  return button
}

function clickOnButton (){
  outputResult.setAttribute('class', 'output-click')
outputResult.innerHTML = `there will be list with aim-but it not exactly`
}

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-btn');

themeBtn.onclick = function() {
page.classList.toggle('light-theme');
page.classList.toggle('dark-theme');
};


for (let i = 0; i < buttonsNamesArray.length; i++) {
  button = createButton(buttonsNamesArray[i])
  btnDiv.append(button)
}



let submitBtn = document.createElement('button')
submitBtn.setAttribute ('class', 'submit-btn')


root.append(outputResult, btnDiv, theme)
theme.append(themeBtn, submitBtn)