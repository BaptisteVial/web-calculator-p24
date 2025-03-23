// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

// Baptiste Vial

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType

    const calculate = (n1, operator, n2) => {
        let result = ''
      
        if (operator === 'add') {
          result = parseFloat(n1) + parseFloat(n2)
        } else if (operator === 'subtract') {
          result = parseFloat(n1) - parseFloat(n2)
        } else if (operator === 'multiply') {
          result = parseFloat(n1) * parseFloat(n2)
        } else if (operator === 'divide') {
          result = parseFloat(n1) / parseFloat(n2)
        }
      
        return result
      }

    // Gestion des chiffres
    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
      calculator.dataset.previousKeyType = 'number'
    }

    // Gestion des opérateurs
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      // Add custom attribute
      calculator.dataset.previousKeyType = 'operator'
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action
    }

    // Gestion du point décimal
    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    } else if (previousKeyType === 'operator') {
        display.textContent = '0.'
    }
    
      calculator.dataset.previousKeyType = 'decimal'
    }

    // Réinitialisation (AC)
    if (action === 'clear') {
      calculator.dataset.previousKeyType = 'clear'
    }

    // Calcul du résultat (=)
    if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum

      display.textContent = calculate(firstValue, operator, secondValue)
    }
    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children).forEach(k =>
        k.classList.remove('is-depressed'),
      )
      calculator.dataset.previousKeyType = 'calculate'
  }
})
