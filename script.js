const button = document.getElementById('button');
const coinElm = document.querySelector('#coinCount');
let coin = Telegram.Utils.sessionStorageGet("coin") || localStorage.getItem('coin')|| 0; //featur set local storage
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
    Telegram.Utils.sessionStorageSet("coin", coin)
    localStorage.setItem('coin', coin)
}
Telegram.WebApp.onEvent('close', closePage)
window.onbeforeunload = closePage