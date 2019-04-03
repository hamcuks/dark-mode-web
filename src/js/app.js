let switchButton = document.querySelector("#switch")
switchButton.addEventListener('click', function() {
    //console.log(document.documentElement.setAttribute('theme', 'dark'))
    let windowDocument = document.documentElement
    if (this.checked) {
        windowDocument.classList.add('transitionWindow')
        windowDocument.setAttribute('theme', 'dark') 
     } else {
        windowDocument.setAttribute('theme', 'light') 
    }
})