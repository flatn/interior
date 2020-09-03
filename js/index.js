const rusBtn = document.getElementById('rusSwitcher')
const ukrBtn = document.getElementById('ukrSwitcher')
const rusBlocks = document.querySelectorAll('.rus')
const ukrBlocks = document.querySelectorAll('.ukr')
let switcher = "rus";

rusBtn.addEventListener('click', () => {
    rusBtn.classList.add('disabled')
    rusBtn.classList.remove('text-white')
    ukrBtn.classList.remove('disabled')
    ukrBtn.classList.add('text-white')
    switcher = 'rus';
    rusBlocks.forEach(block => {
        block.style.display = 'block'
    })
    ukrBlocks.forEach(block => {
        block.style.display = 'none'
    })

})
ukrBtn.addEventListener('click', () => {
    switcher = 'ukr'
    rusBtn.classList.remove('disabled')
    rusBtn.classList.add('text-white')
    ukrBtn.classList.remove('text-white')
    ukrBtn.classList.add('disabled')
    rusBlocks.forEach(block => {
        block.style.display = 'none'
    })
    ukrBlocks.forEach(block => {
        block.style.display = 'block'
    })
})
