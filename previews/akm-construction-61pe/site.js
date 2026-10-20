// Mobile menu, and the quote form that opens a pre-filled text message.
(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  document.querySelectorAll("form[data-sms]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements;
      var lines = [
        "Hi, this is " + f.name.value.trim() + ".",
        f.need.value.trim(),
        "Town: " + f.town.value.trim(),
        "My number: " + f.phone.value.trim()
      ];
      var body = encodeURIComponent(lines.join("\n"));
      window.location.href = "sms:" + form.getAttribute("data-sms") + "?&body=" + body;
    });
  });
})();
