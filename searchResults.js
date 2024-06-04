import { allProduct } from "./image/products.js";
const proSearch = document.getElementById('search-results')
const getIdUrl = new URLSearchParams(window.location.search);
const id = getIdUrl.getAll('id')
const search = document.getElementById('search').value




const getSearchResults = () => {
    Object.entries(id).map(pro => {
       const findId = allProduct.find(proid => proid.id === Number(pro[1]))
       if (findId){
        proSearch.innerHTML += `
        <div key="${findId.id}"  class="product-card">
        <div class="img-pro">
        <a href="detailProduct.html?id=${findId.id}">
        <img id="img-pro"  src=${findId.img} alt="">
        </a>
        
        </div>
          <h2 class="product-name">*${findId.name}</h2>
        
        <ul class="detail">
        <li>${findId.size}"</li>
        <li>${findId.d1}</li>
        <li>${findId.d2}</li>
        <li>${findId.d3}</li>
        </ul>
        <p class="price">$${findId.price}</p>
        <div class="cart">
        <i id="add-cart" data-id="${findId.id}" class="fa-solid fa-cart-plus"></i>
        <a href="https://www.facebook.com/NikaComputerKH" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://t.me/khvor12345" target="_blank"> <i id="telegram" class="fa-brands fa-telegram"></i></a>

        </div>
        
        </div>
        `
       }
       else{
        proSearch.innerHTML = `
        <div style=" width: 100wh; height:50vh; display:flex; justify-content:center; align-items: center; ">
            <h1 style="background-color: #fff; width:auto; font-size:2.5em; position: absolute; top:25%;
             left:20%; transition: translate(-50%, -50%)">No Product ${search}</h1>
        </div>`
       }
    })

}
getSearchResults()



const safeJSONParse = (item) => {
    try {
      return JSON.parse(item);
    } catch (e) {
      return null;
    }
  };
  
  // Initialize cart with safe parsing
  let cart = safeJSONParse(window.localStorage.getItem('add-cart')) || [];
  

const btnAddCart = document.querySelectorAll('#add-cart')
btnAddCart.forEach(btn => {
    const id = btn.getAttribute('data-id')
    btn.addEventListener('click', () => {
        const arr = [];
        Object.entries(cart).map(el => arr.push(el))
        cart.push(id)
        
        localStorage.setItem('add-cart', JSON.stringify(cart))
        const intervalId = setInterval(() => {
            if (btn){
                document.querySelector('.number-cart').innerHTML = arr.length+1;
                clearInterval(intervalId)
            }
        })
    })
})
