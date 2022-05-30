const word = document.querySelector(".beginning-font");
fetch('https://v1.hitokoto.cn?c=i&c=k')
    .then(res => res.json())
    .then(res => {
        console.log(res)
        console.log(res.hitokoto);
        word.innerHTML = res.hitokoto + "<br/>" + "————" + `${res.from}`
    });