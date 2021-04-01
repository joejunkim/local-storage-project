window.addEventListener("DOMContentLoaded", (event) => {
  
  let formStorage = () => {
    const form = document.getElementById('.form form__container');

    form.addEventListener('click', (event)=>{
      const value = document.getElementById('items')
      value.innerText = event.target.value;

      localStorage.setItem("item",value)
    })
  // const showCart = () => {
    
    // };
    
    // const storeItem = () => {
      
      // };
      
      // const removeItem = () => {
        
        // };
       
        
      }
      formStorage()
      });
      