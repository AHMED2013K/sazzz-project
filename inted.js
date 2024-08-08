// inted.js

document.addEventListener('DOMContentLoaded', function () {

    // Toggle search bar visibility
    const searchBtn = document.getElementById('search-btn');
    const searchBar = document.querySelector('.search-bar-container');
    searchBtn.addEventListener('click', () => {
        searchBar.classList.toggle('active');
    });

    // Toggle login form visibility
    const loginBtn = document.getElementById('login-btn');
    loginBtn.addEventListener('click', () => {
        // Implement login functionality or visibility toggle here
        alert('Login button clicked!');
    });

    // Change video source on button click
    const vidBtns = document.querySelectorAll('.vid-btn');
    const videoSlider = document.getElementById('video-slider');
    vidBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const src = btn.getAttribute('data-src');
            videoSlider.src = src;
            vidBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Form validation
    document.querySelector('form').addEventListener('submit', function (event) {
        const name = document.getElementById('nm').value;
        const email = document.getElementById('ur').value;
        const number = document.getElementById('nb').value;
        const subject = document.getElementById('sub').value;

        if (!name || !email || !number || !subject) {
            alert('Please fill out all fields.');
            event.preventDefault(); // Prevent form submission
        }

        // You can add more complex validation here if needed
    });

    // Optional: Initialize Swiper (if you are using Swiper for the gallery)
    if (document.querySelector('.swiper-container')) {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

});
