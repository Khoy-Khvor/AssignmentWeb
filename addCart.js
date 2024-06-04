import { allProduct } from './image/products.js';

const cartTable = document.getElementById('cart-table');
const cartContainer = document.querySelector('.cart-container');
let cart = JSON.parse(window.localStorage.getItem('add-cart')) || [];

const proCart = () => {
  try {
    const id = JSON.parse(window.localStorage.getItem('add-cart'));
    const idCounts = id.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});

    let totalPriceFooter = 0;
    cartTable.innerHTML = ''; // Clear the table content before adding new items

    Object.entries(idCounts).forEach(el => {
      const items = allProduct.filter(item => item.id == el[0]);
      items.forEach(pro => {
        if (pro) {
          totalPriceFooter += pro.price * el[1];
          cartTable.innerHTML += `
            <tr id="has-orther" data-id="${pro.id}">
              <td>
                <div class="img">
                  <a href="detailProduct.html?id=${pro.id}">
                    <img src="${pro.img}" alt="" />
                  </a>
                  <div class="detail-in-cart">
                    <p>-${pro.d1}</p>
                    <p>-${pro.d2}</p> 
                    <p>-${pro.d3}</p>
                  </div>
                </div>
              </td>
              <td>$${pro.price}</td>
              <td>
                <div class="quantiy-btn">
                  <button id="sub-qty" data-id="${pro.id}">
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <p class="display-qty" data-id="${pro.id}">${el[1]}</p>
                  <button id="plus-qty" data-id="${pro.id}">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </td>
              <td style="position: relative;" class="total-price">
                <i data-id="${pro.id}" id="deleteCart" style="font-size: .9em; position: absolute; top: 5px; right: 10px; cursor: pointer;" class="fa-regular fa-trash-can"></i>
                $${pro.price * el[1]}
              </td>
            </tr>`;
        }
      });
    });

    document.getElementById('total-price-footer').innerHTML = "$" + totalPriceFooter;
    cartContainer.style.display = 'block';
    document.getElementById('no-orther').style.display = 'none';
  } catch (e) {
    cartContainer.style.display = 'none';
    document.getElementById('no-orther').style.display = 'flex';
    console.log(e);
  }

  if (cart.length === 0){
    cartContainer.style.display = 'none';
    document.getElementById('no-orther').style.display = 'flex';
  }
  incrementNumCart();
  deleteCartPro();
};

const incrementNumCart = () => {
  document.querySelectorAll('#plus-qty').forEach(btn => {
    const id = btn.getAttribute('data-id');
    btn.addEventListener('click', () => {
      cart.push(id);
      localStorage.setItem('add-cart', JSON.stringify(cart));
      document.querySelector('.number-cart').innerHTML = cart.length;
      proCart();
    });
  });


  // decrement qty cart
  document.querySelectorAll('#sub-qty').forEach(btn => {
    const id = btn.getAttribute('data-id');
    btn.addEventListener('click', () => {
      const index = cart.indexOf(id);
      if (index > -1) {
        cart.splice(index, 1);
        localStorage.setItem('add-cart', JSON.stringify(cart));
        document.querySelector('.number-cart').innerHTML = cart.length;
        proCart();
      }
      if (cart.length === 0){
        cartContainer.style.display = 'none';
        document.getElementById('no-orther').style.display = 'flex';
      }
    });
    
  });
};

const deleteCartPro = () => {
  document.querySelectorAll('#deleteCart').forEach(btn => {
    const id = btn.getAttribute('data-id');
    btn.addEventListener('click', () => {
      cart = cart.filter(elId => elId != id);
      localStorage.setItem('add-cart', JSON.stringify(cart));
      document.querySelector(`tr[data-id="${id}"]`).remove(); // Remove the item row from the table
      updateTotalPrice();
      document.querySelector('.number-cart').innerHTML = cart.length;
      if (cart.length === 0){
        cartContainer.style.display = 'none';
        document.getElementById('no-orther').style.display = 'flex';
      }
    });
  });
};

const updateTotalPrice = () => {
  const id = JSON.parse(window.localStorage.getItem('add-cart')) || [];
  const idCounts = id.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  let totalPriceFooter = 0;
  Object.entries(idCounts).forEach(el => {
    const items = allProduct.filter(item => item.id == el[0]);
    items.forEach(pro => {
      if (pro) {
        totalPriceFooter += pro.price * el[1];
      }
    });
  });
  document.getElementById('total-price-footer').innerHTML = "$" + totalPriceFooter;
};

proCart();
