
const backCart = document.getElementById('back-cart-btn');
const cartBtn = document.getElementById('cart-btn');
const productHome = document.getElementById('products-home');
const main = document.querySelector('.main')
const cartContainer = document.querySelector('.cart-container')
const btnPlusCart = document.getElementById('btn-plus')




const safeJSONParse = (item) => {
    try {
      return JSON.parse(item);
    } catch (e) {
      return null;
    }
  };
  
  // Initialize cart with safe parsing
  let cart = safeJSONParse(window.localStorage.getItem('add-cart')) || [];
  
const addCart = () => {
        document.querySelectorAll("#add-cart").forEach(btn => {
            const dataId = btn.getAttribute('data-id');
            btn.addEventListener('click', () => {
                cart.push(dataId)
                
                localStorage.setItem('add-cart', JSON.stringify(cart))
                const intervalId = setInterval(() => {
                    if (btn){
                        showNumberCart()
                        clearInterval(intervalId)
                    }
                })
            })
            
        })     
}
addCart()

const showNumberCart = () => {
    try {
        const items = JSON.parse(window.localStorage.getItem("add-cart"));
        document.querySelector('.number-cart').innerHTML = items.length   
    } catch (error) {
    }
}
showNumberCart()




const navContainer = document.querySelector('.nav-container')
const backManu = document.getElementById('btn-back-manu')
const openManuBar = document.getElementById('open-namu-bar')
backManu.addEventListener('click', ()=> {
    navContainer.style.left = '-1000px'
})
openManuBar.addEventListener('click', () => {
    navContainer.style.left = '0'
})

// Array.from(document.querySelectorAll('#telegram')).forEach((btn => {
//     btn.addEventListener(('click', () => {
//         window.location.href = 'https://t.me/khvor12345';
//     }))
// }))

