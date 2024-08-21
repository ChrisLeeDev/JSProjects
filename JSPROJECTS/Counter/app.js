// set initial value for our count variable
let count = 0;
// select the value buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
// console.log(btns)
btns.forEach((btn) => {
    // console.log(btn)
    btn.addEventListener('click', (e) => {
        // console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }//decrease by 1
        else if(styles.contains('increase')){
            count++
        }//increase by 1
        else if(styles.contains('decreaseBy5')){
            count = count - 5
        }
        else if(styles.contains('increaseBy5')){
            count = count + 5
        }
        else if (styles.contains('random')){
            if(count > 0){
                count = Math.floor(Math.random()*-100)
            }
            else{
                count = Math.floor(Math.random()*100)
            }
        }
        else{
            count = 0
        }

        //style feedback for my count variable
        if(count > 0){
            value.style.color = "green"
        }
        if(count < 0){
            value.style.color = "red"
        }
        if(count == 0){
            value.style.color = "black"
        }
        value.textContent = count
    })
})

