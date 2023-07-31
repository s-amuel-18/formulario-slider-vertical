$("[data-mask]").inputmask();

// * Configuración swiper js
const swiperSlide = new Swiper(".mySwiper", {
  direction: "vertical",
  // initialSlide: 0,
  speed: 800,
  allowTouchMove: false,
});

// * funcion siguiente slide
function nextSlide() {
  swiperSlide.slideNext();
}
function prevSlide() {
  swiperSlide.slidePrev();
}

// * Validación Zip code
(function () {
  const btnSubmit = document.querySelector("#submit-zip-code");
  const inputZipCode = document.querySelector("#input-zip-code");

  btnSubmit.addEventListener("click", function (e) {
    const valueZipCode = inputZipCode.value;

    if (!isValidZipCode(valueZipCode)) {
      alert(
        "Please correct the following errors: \n\n  -Please enter your zip code"
      );
      return null;
    }

    nextSlide();
  });
})();

// * Validación Email address
(function () {
  const btnSubmit = document.querySelector("#submit-email-address");
  const inputEmailAddress = document.querySelector("#email-address");
  // console.log(inputEmailAddress);

  btnSubmit.addEventListener("click", function (e) {
    const valueEmailAddress = inputEmailAddress.value;

    if (!validator.isEmail(valueEmailAddress)) {
      alert(
        "Please correct the following errors: \n\n -Please enter your email address"
      );
      return null;
    }

    nextSlide();
  });
})();

// * Validación numero de telefono
(function () {
  const btnSubmit = document.querySelector("#submit-phone-number");
  const inputEmailAddress = document.querySelector("#phone-number");

  btnSubmit.addEventListener("click", function (e) {
    if (!$(inputEmailAddress).inputmask("isComplete")) {
      alert(
        "Please correct the following errors: \n\n - Please enter your phone number"
      );
      return null;
    }

    nextSlide();
  });
})();

// *Validacion nombre y apellido
(() => {
  const btnSubmit = document.querySelector("#submit-name-text");
  const inputLastName = document.querySelector("#last_name_text");
  const inputFirsName = document.querySelector("#firs_name_text");

  btnSubmit.addEventListener("click", (e) => {
    const valueLasName = inputLastName.value;
    const valueFirsName = inputFirsName.value;
    console.log(valueFirsName.length);
    console.log(valueLasName.length);
    // alert(valueLasName);

    if (valueLasName.length == 0 || valueFirsName.length == 0) {
      alert(
        "Please correct the following errors: \n\n -Please enter your first name \n -Please enter your last name "
      );
      return null;
    }

    nextSlide();
  });
})();
