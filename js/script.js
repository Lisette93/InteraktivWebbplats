document.addEventListener('DOMContentLoaded', () => {

    /* ─── 1️⃣ TOGGLE LUNCH ───────────────────────── */
    const toggleBtn = document.getElementById('toggle-lunch');
    const lunchInfo = document.getElementById('lunch-info');
    if (toggleBtn && lunchInfo) {
      toggleBtn.addEventListener('click', () => {
        lunchInfo.classList.toggle('hidden');
      });
    }
  
    /* ─── 2️⃣ MENU FILTER ───────────────────────── */
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
  
    /* ─── 3️⃣ TOTAL PRICE CALCULATION ───────────── */
    const items = document.querySelectorAll('.menu-item input[type="checkbox"]');
    const totalDisplay = document.getElementById('total-price');
  
    function updateTotal() {
      let total = 0;
      items.forEach(item => {
        if (item.checked) total += parseFloat(item.dataset.price);
      });
      if (totalDisplay) totalDisplay.textContent = `Totalt: ${total.toFixed(0)} kr`;
    }
  
    items.forEach(item => item.addEventListener('change', updateTotal));
    updateTotal();
  
  });
  