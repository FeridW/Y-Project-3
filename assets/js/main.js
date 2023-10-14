

const toggleBtn = document.querySelector('.toggle-button');

const toggleBtnIcon = document.querySelector('.toggle-button i');

const dropDown = document.querySelector('.dropdown');

toggleBtn.onclick = function() {
    dropDown.classList.toglle('open');
}