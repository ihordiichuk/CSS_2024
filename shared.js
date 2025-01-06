var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButton = document.querySelectorAll('.plan Button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop);
for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function () {
       selectPlanButton[i].addEventListener('click', function () {
            modal.style.display = 'block';
            backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click', сloseModal);

modalNoButton.addEventListener('cllick', сloseModal);

function сloseModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}

