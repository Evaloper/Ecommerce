// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
// ==================================

const linkTag = document.querySelector('.link');
const hamburgerTag = document.querySelector('.hamburger');

linkTag.style.display ='none';

hamburgerTag.addEventListener('click', () => {
    if (linkTag.style.display == "none") {
        linkTag.style.display = "block";
    } else {
        linkTag.style.display = "none";
    }
    
});

hamburgerTag.addEventListener('mouseover', () => {
    hamburgerTag.style.cursor = "pointer";
})

// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================

const productTab = document.querySelectorAll('input[name="tabset"]');
const catalogue = document.querySelectorAll('.catalogue');

const itemTag = document.querySelectorAll('.tag');

productTab.forEach(product => {
    product.addEventListener('change', (e) => {    

        if (e.target.value === 'All') {
            itemTag.forEach(element => {
                element.parentElement.parentElement.parentElement.style.display = "initial";
            })
        } else if (e.target.value === 'Male') {
            itemTag.forEach(element => {
                if (element.textContent === 'Male') {
                    element.parentElement.parentElement.parentElement.style.display = "initial";
                } else {
                    element.parentElement.parentElement.parentElement.style.display = "none";
                }
            })
        } else if (e.target.value === 'Female') {
            itemTag.forEach(element => {
                if (element.textContent === 'Female') {
                    element.parentElement.parentElement.parentElement.style.display = "initial";
                } else {
                    element.parentElement.parentElement.parentElement.innerText = "Items not found";
                }
            })
        } else if (e.target.value === 'Babies') {
            itemTag.forEach(element => {
                if (element.textContent === 'Babies') {
                    element.parentElement.parentElement.parentElement.innerText = "initial";
                } else {
                    element.parentElement.parentElement.parentElement.style.display = "none";
                }
            })
        }
    });
})

// ==================================
// 2. Display products based on 
// search keywords in the input fields.
// ==================================

const searchItems = document.getElementById("search_product");

const products = document.querySelectorAll(".percard.catalogue");

const displayItems = (values) => {
    products.forEach(element =>{
        element.style.display = "none";
        const name = element.children[0].children[3].children[1].innerHtml.toUpperCase();
        const price = element.children[0].children[3].children[0].innerHtml.toUpperCase();

        if (name.includes(values) || price.includes(values)) {
            element.style.display = "block";
        } 

    })
 }

searchItems.addEventListener('input', (e) => {
    displayItems(e.target.value.toUpperCase())
})
