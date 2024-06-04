import { arr } from './image/monitor.js';
import { allProduct } from './image/products.js';

const searchEl = document.getElementById('search');
const searchResult = document.querySelector('.search-result');
const body = document.querySelector('body');
const searchBtn = document.querySelector(".fa-magnifying-glass");
const searchResultsDisplay = document.getElementById('search-results');

body.addEventListener('click', () => {
    searchResult.style.display = 'none';
});

const searchResultDisplay = () => {
    const inputSearch = searchEl.value;
    if (inputSearch.length) {
        const keyword = allProduct.filter(el => {
            return el.name.toLowerCase().includes(inputSearch.toLowerCase());
        });
        keyword.length === 0 ? searchResult.style.display = 'none' : searchResult.style.display = 'block';
        displaySearchResultPage(keyword);

        searchResult.innerHTML = keyword.map(el => {
            return `<a id="link-result" href="detailProduct.html?id=${el.id}">
                        <div class="result">
                            <p>${el.name}</p>
                            <img src="${el.img}">
                        </div>
                    </a>`;
        }).join('');
    } else {
        searchResult.style.display = 'none';
    }
};

const displaySearchResultPage = (proSearch) => {
    if (searchEl.value.length) {
        const idPro = proSearch.map(pro => pro.id).join('&id=');

        searchBtn.addEventListener('click', () => {
            window.location.href = `search-results.html?id=${idPro}`;
        });
    }
};

searchEl.addEventListener('keyup', (e) => {
    searchResultDisplay();
    if (e.key === 'Enter') {
        const inputSearch = searchEl.value;
        const keyword = allProduct.filter(el => {
            return el.name.toLowerCase().includes(inputSearch.toLowerCase());
        });
        if (keyword.length) {
            const idPro = keyword.map(pro => pro.id).join('&id=');
            window.location.href = `search-results.html?id=${idPro}`;
        }
    }
});

searchBtn.addEventListener('click', () => {
    searchEl.focus();
});

displaySearchResultPage([]);
searchResultDisplay();


const setPositionSearchIcon = () => {
    const searchIcon = document.getElementById('seach-icon');
    const contactNav = document.querySelector('.contact-bar');

    // if (window.scrollY > searchEl.offsetHeight){
    //     contactNav.insertBefore(searchEl, contactNav.firstChild)
    // }
    // else{
    //     // searchIcon.style.display = 'none'
    //     contactNav.removeChild(searchEl)
    // }
}

window.addEventListener('scroll', setPositionSearchIcon)
setPositionSearchIcon()