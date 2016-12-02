
var accordionTitle = document.querySelectorAll('.accordion__title');
var accordionBody  = document.querySelectorAll('.accordion__body');

console.log(accordionTitle);

for (var i = 0; i < accordionTitle.length; i++ ) {

  accordionTitle[i].onclick = function (event) {
    event.preventDefault();

    for (var j = 0; j < accordionBody.length; j++) {
      accordionBody[j].classList.remove('active');
    }

    this.classList.toggle("active");
  }

}