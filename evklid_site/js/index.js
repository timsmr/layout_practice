window.addEventListener('DOMContentLoaded', function() {

    // search field
    let search_btn = document.querySelector('.search-btn');
    let search_form = document.querySelector('.search-link');
    let closed_btn = document.querySelector('.closed-search-btn');
    search_btn.addEventListener('click', function() {
        search_btn.style.transform = 'scale(0)';
        search_form.classList.toggle('search-link-active');
        search_form.querySelector('.search-form-btn').classList.toggle('search-form-btn-active');
        search_form.querySelector('.search-input').classList.toggle('search-input-active');
        search_form.querySelector('.closed-search-btn').classList.toggle('closed-search-btn-active');
        document.querySelector('.header__logo').classList.toggle('header__logo-active');
    });

    closed_btn.addEventListener('click', function() {

        search_form.querySelector('.search-form-btn').classList.toggle('search-form-btn-active');
        search_form.querySelector('.search-input').classList.toggle('search-input-active');
        search_form.querySelector('.closed-search-btn').classList.toggle('closed-search-btn-active');
        search_form.classList.toggle('search-link-active');
        document.querySelector('.header__logo').classList.toggle('header__logo-active');
        search_btn.style.transform = 'scale(1)';
    });

    // header menu
    let header_menu = document.querySelector('.header__menu');
    let header_menu_active = document.querySelector('.header__menu-active');
    let header = document.querySelector('.header');
    let header_nav = document.querySelector('.header__nav');
    header_menu.addEventListener('click', function(){
        header.classList.toggle('header-active');
        header_nav.classList.toggle('header-active');
        header_menu.style.display = 'none';
        header_menu_active.classList.toggle('header__menu-active-active');
        // document.querySelector('html').style.overflowY = 'hidden';
    });

    header_menu_active.addEventListener('click', function(){
        header.classList.toggle('header-active');
        header_nav.classList.toggle('header-active');
        header_menu.style.display = 'inline-block';
        header_menu_active.classList.toggle('header__menu-active-active');
        // document.querySelector('html').style.overflowY = 'auto';

    });

});