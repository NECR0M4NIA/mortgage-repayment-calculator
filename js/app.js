// RESULTS CONTAINER
const $finalResults = document.querySelector('.final-results')

// BTN
const $clearBtn = document.querySelector('#clear-btn')
const $calculateBtn = document.querySelector('.calculate-btn')
//

// INPUTS
const $amountInput = document.querySelector('#amount')
const $yearsInput = document.querySelector('#years')
const $pourcentaInput = document.querySelector('#pourcenta')
const $interestInput = document.querySelector('#interest')
//

// OTHERS
const $errorMsg = document.querySelectorAll('.error')

console.log($finalResults)

// FOCUS
$amountInput.focus()
//

const inputs = [$amountInput, $interestInput, $pourcentaInput, $yearsInput]

// Fonction bouton calculer
$calculateBtn.addEventListener('click', e => {
    $errorMsg.forEach(e => {
        if (inputs.values === null) {
            e.classList.remove('hidden')
        } else {
            e.classList.add('hidden')
        }
    })
})

// Nettoyer les champs
$clearBtn.addEventListener('click', clear => {
    inputs.forEach(e => {
        e.value = null
    })
})