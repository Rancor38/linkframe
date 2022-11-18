/* <-- To add a new html view, create a new html document into the './views' folder, and list the name of the file inside of the pages array below. --> */
let pages = ['page1', 'page2']

/* <-- The buisiness logic of loading the html pages into the index.js --> */
let htmlContent = []
const page = document.querySelectorAll('page')
//create a function that loads child elements into the index.html
const gatherElements = () => {
    for (let i = 0; i < pages.length; i++) {
        fetch(`views/${pages[i]}.html`)
        .then(res => res.text())
            .then(data => {
                htmlContent.push(data)
                // console.log(`page at i is ${page[i]}`)
                // console.log(`html Content i is ${htmlContent[i]}`)
                page[i].innerHTML = htmlContent[i]
                // console.log(`page i is ${page[i]}`)
        })
    }
}
gatherElements()