// import {laptop} from './image/laptop.js'
import {arr} from './image/monitor.js'
import { allProduct } from './image/products.js';

// Get products montior

const getProductsMonitor = () =>{
  const mainProductLaptop = document.querySelector('#products-monitor');
  let txt = "";
    const laptopType = allProduct.filter(lpt => lpt.type === "Monitor");
    
      // const createEl = 
      laptopType.forEach(laptop => {
        
        mainProductLaptop.innerHTML += `
        <div key="${laptop.id}"  class="product-card">
        <div class="img-pro">
        <a href="detailProduct.html?id=${laptop.id}">
        <img id="img-pro"  src=${laptop.img} alt="">
        </a>
        
        </div>
          <h2 class="product-name">*${laptop.name}</h2>
        
        <ul class="detail">
        <li>${laptop.size}"</li>
        <li>${laptop.d1}</li>
        <li>${laptop.d2}</li>
        <li>${laptop.d3}</li>
        </ul>
        <p class="price">$${laptop.price}</p>
        <div class="cart">
        <i id="add-cart" data-id="${laptop.id}" class="fa-solid fa-cart-plus"></i>
        <a href="https://www.facebook.com/NikaComputerKH" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://t.me/khvor12345" target="_blank"> <i id="telegram" class="fa-brands fa-telegram"></i></a>
        </div>
        
        </div>
        `
      })
}
getProductsMonitor()


// Get products laptop 

const getProductsLaptop = () =>{
  const mainProductLaptop = document.querySelector('#products-laptop');
  let txt = "";
    const laptopType = allProduct.filter(lpt => lpt.type == "Laptop");
    
      // const createEl = 
      laptopType.forEach(laptop => {
        
        mainProductLaptop.innerHTML += `
        <div key="${laptop.id}"  class="product-card">
        <div class="img-pro">
        <a href="detailProduct.html?id=${laptop.id}">
        <img id="img-pro"  src=${laptop.img} alt="">
        </a>
        
        </div>
          <h2 class="product-name">*${laptop.name}</h2>
        
        <ul class="detail">
        <li>${laptop.size}"</li>
        <li>${laptop.d1}</li>
        <li>${laptop.d2}</li>
        <li>${laptop.d3}</li>
        </ul>
        <p class="price">$${laptop.price}</p>
        <div class="cart">
        <i id="add-cart" data-id="${laptop.id}" class="fa-solid fa-cart-plus"></i>
        <a href="https://www.facebook.com/NikaComputerKH" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://t.me/khvor12345" target="_blank"> <i id="telegram" class="fa-brands fa-telegram"></i></a>

        </div>
        
        </div>
        `
      })
}
getProductsLaptop()


// Get product desktop
const getProductsDesktop = () =>{
  const mainProductLaptop = document.querySelector('#products-desktop');
  let txt = "";
    const laptopType = allProduct.filter(lpt => lpt.type == "Desktop");
    
      // const createEl = 
      laptopType.forEach(laptop => {
        
        mainProductLaptop.innerHTML += `
        <div key="${laptop.id}"  class="product-card">
        <div class="img-pro">
        <a href="detailProduct.html?id=${laptop.id}">
        <img id="img-pro"  src=${laptop.img} alt="">
        </a>
        
        </div>
          <h2 class="product-name">*${laptop.name}</h2>
        
        <ul class="detail">
        <li>${laptop.size}"</li>
        <li>${laptop.d1}</li>
        <li>${laptop.d2}</li>
        <li>${laptop.d3}</li>
        </ul>
        <p class="price">$${laptop.price}</p>
        <div class="cart">
        <i id="add-cart" data-id="${laptop.id}" class="fa-solid fa-cart-plus"></i>
        <a href="https://www.facebook.com/NikaComputerKH" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://t.me/khvor12345" target="_blank"> <i id="telegram" class="fa-brands fa-telegram"></i></a>
        </div>
        
        </div>
        `
      })
}
getProductsDesktop()
const getProductsAccessory = () =>{
  const mainProductLaptop = document.querySelector('#products-accessory');
  let txt = "";
    const laptopType = allProduct.filter(lpt => lpt.type == "Accessory");
    
      // const createEl = 
      laptopType.forEach(laptop => {
        
        mainProductLaptop.innerHTML += `
        <div key="${laptop.id}"  class="product-card">
        <div class="img-pro">
        <a href="detailProduct.html?id=${laptop.id}">
        <img id="img-pro"  src=${laptop.img} alt="">
        </a>
        
        </div>
          <h2 class="product-name">*${laptop.name}</h2>
        
        <ul class="detail">
        <li>${laptop.size}"</li>
        <li>${laptop.d1}</li>
        <li>${laptop.d2}</li>
        <li>${laptop.d3}</li>
        </ul>
        <p class="price">$${laptop.price}</p>
        <div class="cart">
          <i id="add-cart" data-id="${laptop.id}" class="fa-solid fa-cart-plus"></i>
          <a href="https://www.facebook.com/NikaComputerKH" target="_blank"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://t.me/khvor12345" target="_blank"> <i id="telegram" class="fa-brands fa-telegram"></i></a>
        </div>
        </div>
        `
      })
}
getProductsAccessory()





