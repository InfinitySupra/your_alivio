let toggleButton = document.querySelector('.toggle-menu');
    let navBar = document.querySelector('.nav-bar');
    toggleButton.addEventListener('click', function () {
        navBar.classList.toggle('toggle');
    });