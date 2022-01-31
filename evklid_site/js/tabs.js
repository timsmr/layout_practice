// $( function() {
//     $( "#tabs" ).tabs();
//   } );

document.querySelectorAll('.how__item-link').forEach(function(tabBtn) {
  tabBtn.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path;
    document.querySelectorAll('.how__content').forEach(function(tabContent) {
      tabContent.classList.remove('tab-content-active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
  });
});