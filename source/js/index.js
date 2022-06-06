const word = document.querySelector(".home-font");
const span = document.querySelector("#word");
const background = document.querySelector("#background");
const menu = document.querySelector(".menu");

/* 打字机输入效果函数 */
function typing(str) {
    let newStr = '';
    let i = 0;
    let timer = setInterval(() => {
        if (newStr.length < str.length - 1) {
            newStr += str[i++];
            span.innerHTML = newStr + '_';

        } else {
            clearInterval(timer)
            span.innerHTML = newStr
        }
    }, 200)
}

menu.addEventListener("click", () => {
    
})


fetch('https://v1.hitokoto.cn?c=i&c=k')
    .then(res => res.json())
    .then(res => {
        typing(res.hitokoto)
    });