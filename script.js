const button = document.getElementById('button');
const coinElm = document.querySelector('#coinCount');
let coin = localStorage.getItem("coin") || 0; //featur set local storage
coin = +coin;
function addCoin(){
    coin++;
    setCoin()
}
function setCoin() {
    coinElm.innerText = coin;
}
setCoin();
button.addEventListener('click', addCoin)


function closePage(){
    localStorage.setItem("coin", coin)
}
window.onbeforeunload = closePage;