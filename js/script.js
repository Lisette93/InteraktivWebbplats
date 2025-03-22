document.addEventListener('DOMContentLoaded', () => {
    /* Lunch.html /*
    /* Show or hide info about lunch buffet*/
    const showHideButton = document.getElementById('showHideInfo');
    const lunchInfo = document.getElementById('lunch-info');

    if (showHideButton && lunchInfo) {
      showHideButton.addEventListener('click', () => {
        lunchInfo.classList.toggle('hidden');
      });
    }
  


    /* menu.html*/
    /* Filter menu categorys */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categories = document.querySelectorAll('.menu-category');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        
        categories.forEach(section => {
          section.style.display = (category === 'all' || section.id === category) ? '' : 'none';
        });
      });
    });
  
    
    /* Calculation total price */
    const items = document.querySelectorAll('.menu-item input[type="checkbox"]');
    const showTotal = document.getElementById('total-price');
  
    function updateTotal() {
      let total = 0;
      items.forEach(item => {
        if (item.checked) total += parseFloat(item.dataset.price);
      });
      if (showTotal) showTotal.textContent = `Totalpris: ${total.toFixed(0)} kr`;
    }
  
    items.forEach(item => item.addEventListener('change', updateTotal));
    updateTotal();
  
  });
  