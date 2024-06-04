import { allProduct } from "./image/products.js";

const productsLaptop = document.querySelector('.main-products')
const productContainer = document.querySelector('.detail-product-container');
const getData = window.localStorage.getItem("dataDetail");
const url = new URLSearchParams(window.location.search);
const id = url.get('id');
const findId = allProduct.find(proId => proId.id === Number(id));
let txt = "";
for (let i = 0; i < Object.entries(findId.space).length; i++){
  txt += `<p>- ${findId.space[i]}</p>`
}
// let txtArr = txt.join('');
// let txtString = txtArr.split('`')

if(findId){
  productContainer.innerHTML =`
  <div class="img">
  <img
  src=${findId.img}
alt=""
/>

</div>
<div class="detail-product">
<h1>*${findId.name}</h1>
${txt}
<div class="btn-cart">
<h4>Price $${findId.price.toFixed(2, 0)}</h4>
<button id="add-cart" data-id="${findId.id}"><i class="fa-solid fa-cart-plus"></i></button>
</div>
</div>

`
}