document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[type="radio"][name="radio"]');

  radios.forEach(function (radio) {
    radio.addEventListener("click", function () {
      alert(this.value);
    });
  });
});
