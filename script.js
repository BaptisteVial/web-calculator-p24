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

    // Gestion des chiffres
    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
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
    }

    // Gestion du point décimal
    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    }

    // Réinitialisation (AC)
    if (action === 'clear') {
      console.log('clear key!')
    }

    // Calcul du résultat (=)
    if (action === 'calculate') {
      console.log('equal key!')
    }
    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children).forEach(k =>
        k.classList.remove('is-depressed'),
      )
  }
})
