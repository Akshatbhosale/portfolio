document.querySelector('.dropdown-btn').addEventListener('click', function () {
    document.querySelector('.dropdown-content').classList.toggle('show');
  });
  
  function openTab(index) {
    const tabs = document.querySelectorAll('.tab-contents');
  
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active-tab', i === index);
    });
  
    document.querySelector('.dropdown-content').classList.remove('show');
  }
  