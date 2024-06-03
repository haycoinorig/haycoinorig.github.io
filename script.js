const button = document.getElementById('button');
const coinElm = document.querySelector('#coinCount');
let coin = 0; //featur set local storage
function addCoin(){
    coin++;
    setCoin()
}
function setCoin() {
    coinElm.innerText = coin;
}

button.addEventListener('click', addCoin)