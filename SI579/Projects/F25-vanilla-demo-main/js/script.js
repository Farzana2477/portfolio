
document.querySelector('#click-me').addEventListener('click',() => {
    document.querySelectorAll('div').forEach((div) => div.remove())
})

