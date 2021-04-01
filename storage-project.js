window.addEventListener("DOMContentLoaded", (event) => {

  const storeItem = () => {
    const button = document.getElementById('add-to-cart');
    button.addEventListener('click', (event) => {
      const itemValue = document.getElementById('items').value
      const qtyValue = document.getElementById('quantity').value

      localStorage.setItem(itemValue, qtyValue)
    })
  };

  const showCart = () => {
    const shoppingCart = document.getElementById('shopping-cart');
    const ul = document.createElement('ul');
    for (let i = 0; i < localStorage.length; i++) {
      const item = localStorage.key(i);
      const quantity = localStorage.getItem(item);
      const li = document.createElement('li');
      const removeButton = document.createElement('button')
      removeButton.innerText = "Remove Item"
      if (quantity){
        li.innerText = "item: " + item + ", quantity: " + quantity + " "
        li.appendChild(removeButton)
        ul.appendChild(li);
      }

      shoppingCart.appendChild(ul);

      };
    }

  const removeItem = () => {
    remove.addEventListener('click', event => {

    })


  };

  storeItem();
  showCart();


});





    // Another way to loop through localStoract using a key forloop
// for(let key in localStorage){
  //   const item = key;
  //   const quantity = localStorage.getItem(key);
//   const li = document.createElement('li');
//   // if(quantity){
//     li.innerText = "item: " + item + ", quantity: " + quantity;
//     ul.appendChild(li);
//   // }
