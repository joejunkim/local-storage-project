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
    
  };

  storeItem();


      // const removeItem = () => {

        // };

});
