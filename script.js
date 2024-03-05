// set initial number
let count = 0;

//select value
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn")

function increment(){
    count++
    value.textContent = count;
    colorchange()
}
function decrement(){
    count--;
    value.textContent = count;
    colorchange()
}
function reset(){
    count = 0
    value.textContent = count;
    colorchange()
}
function colorchange(){
    if(count > 0){
        value.style.color = 'green'
    }
    if(count < 0){
        value.style.color = 'red'
    }
    if(count === 0){
        value.style.color = '#222'
    }
    if(count > 1000){
        value.style.color = gold
    }
}

// btns.forEac(function (btn) {h
//     btn.addEventListener('click',function(e) {
//     const styles = e.currentTarget.classList;
//     console.log(styles);
//     if(styles.contains('decrease')){
//         count--;
//     }
//     else if(styles.contains('increase')){
//         count++;
//     }
//     else{
//         count = 0
//     }
//     if(count > 0){
//         value.style.color = 'green'
//     }
//     if(count < 0){
//         value.style.color = 'red'
//     }
//     if(count === 0){
//         value.style.color = '#222'
//     }
//     if(count > 1000){
//         value.style.color = gold
//     }

//      value.textContent = count;
//     });

// });