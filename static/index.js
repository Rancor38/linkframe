import app from './scripts/app.js'

/* <-- To add a new html view, create a new html document into the './pages' folder --> */
let pages = []
/* <-- The buisiness logic of loading the html pages into the index.js --> */
let htmlContent = []
const page = document.createElement('div')
const body = document.body
//create a function that loads child elements into the index.html
const gatherElements = () => {
    if (pages.length) {
        for (let i = 0; i < pages.length; i++) {
            fetch(`/pages/${pages[i]}`)
            .then(res => res.text())
                .then(data => {
                    htmlContent.push(data)
                })
                .then(data => {
                    body.appendChild(page.cloneNode(true))
                })
                .then(data => {
                    if (document.querySelectorAll('div')[i]) {
                        document.querySelectorAll('div')[i].innerHTML = htmlContent[i]
                        document.querySelectorAll('div')[i].classList = pages[i].slice(0, pages[i].indexOf('.'))
                    }
                })
        } 
    }
}


/* <-- getting a dynamic list of the folders contained within /pages/ --> */
const getDynaPath = () => {
    fetch(`/pth`)
        .then(res => res.json())
        .then(data => pages = data)
        .then(gatherElements)
        .then(app())
}
getDynaPath()