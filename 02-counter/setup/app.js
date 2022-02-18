const value = document.querySelector('#value')
const buttons = document.querySelectorAll('.btn')

let counter = 0

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) =>{
    const options = e.target.classList

    counter = (options.contains('increase')) ? counter + 1 
            : (options.contains('decrease')) ? counter - 1
            : 0

    value.classList.remove('red','green')

    if (counter > 0){
      value.classList.add('green')
    }   
    else value.classList.add('red')
    value.textContent = counter
  })
})
