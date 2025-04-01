//Wait until HTML content is loaded before running the script 

document.addEventListener('DOMContentLoaded', () => {
  
    /* Lunch.html 
     Show or hide info about lunch buffet*/
    const showHideButton = document.getElementById('showHideInfo');
    const lunchInfo = document.getElementById('lunch-info');

   
    if (showHideButton && lunchInfo) {
      showHideButton.addEventListener('click', () => {
      
        lunchInfo.classList.toggle('hidden');
      });
    }
  


    /* menu.html
     Filter menu categories */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categories = document.querySelectorAll('.menu-category');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        
         // Show or hide each section depending on selected category
        categories.forEach(section => {
          section.style.display = (category === 'all' || section.id === category) ? '' : 'none';
        });
      });
    });
  
    
    // Calculation total price for selected dishes
    const items = document.querySelectorAll('.menu-item input[type="checkbox"]');
    const showTotal = document.getElementById('total-price');
  
    function updateTotal() {
      let total = 0;
      items.forEach(item => {
        if (item.checked) total += parseFloat(item.dataset.price);
      });
      if (showTotal) showTotal.textContent = `Totalpris: ${total.toFixed(0)} kr`;

      // Visual effect when total updates
      showTotal.classList.remove('flash');
      void showTotal.offsetWidth;
      showTotal.classList.add('flash');

      setTimeout(() => {
        showTotal.classList.remove('flash');
      }, 300);
    }
  
    items.forEach(item => item.addEventListener('change', updateTotal)); 
    updateTotal(); 

  });