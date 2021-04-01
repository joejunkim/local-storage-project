window.addEventListener("DOMContentLoaded", (event) => {

  const storeItem = () => {
    const button = document.getElementById('add-to-cart');
    button.addEventListener('click', (event) => {
      const itemValue = document.getElementById('items').value
      const qtyValue = document.getElementById('quantity').value

      localStorage.setItem(itemValue, qtyValue)
    })
    showCart();
  };

  const showCart = () => {
    const shoppingCart = document.getElementById('shopping-cart');
    const ul = document.createElement('ul');
    for (let i = 0; i < localStorage.length; i++) {
      const item = localStorage.key(i);
      const quantity = localStorage.getItem(item);
      const li = document.createElement('li');
      li.setAttribute("id", item)
      const removeButton = document.createElement('button')
      removeButton.setAttribute('class', 'buttons')
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
    const allButtons = document.querySelectorAll(".buttons");
    allButtons.forEach((button) => {
      button.addEventListener('click', event => {
        const buttonParent = event.target.parentNode.id;
        console.log(buttonParent)
        localStorage.removeItem(buttonParent);
       
        location.reload();
        //showCart is invoked 
      showCart();
      })
      
    })
  };
// storeItem has to be called before removeItem
  storeItem();
  removeItem();


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
