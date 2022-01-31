$( function() {
    $( "#accordion" ).accordion({
        active: false,
        heightStyle: "content",
        collabsible: true,
        autoHeight: false,
    });
});

document.querySelectorAll('.questions__item-block').forEach(function(btn) {
    btn.addEventListener('click', function() {

        document.querySelectorAll('.questions_add').forEach(function(add_btn) {
            add_btn.classList.remove('questions_add-active');
        });

        btn.querySelector('.questions_add').classList.add('questions_add-active');                    
    });
});