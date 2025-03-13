// BTN
const $clearBtn = document.querySelector('#clear-btn')

// INPUTS
const $amountInput = document.querySelector('#amount')
const $yearsInput = document.querySelector('#years')
const $pourcentaInput = document.querySelector('#pourcenta')
const $interestInput = document.querySelector('#interest')

console.log($yearsInput)

$clearBtn.addEventListener('click', clear => {
    $amountInput.textContent = ""
    $yearsInput.textContent = ""
    $pourcentaInput.textContent = ""
    $interestInput.textContent = ""
})