// AKM Real Estate and Construction: phone number, mobile menu, and the quote form.
(function () {
  // The AKM customer number. Type it here once, like "662-555-0123", and every
  // Call and Text button on the site appears with it. Leave it blank to hide them.
  var PHONE = "";

  if (PHONE) {
    var digits = PHONE.replace(/\D/g, "");
    if (digits.length === 10) digits = "1" + digits;
    var dial = "+" + digits;
    document.querySelectorAll("[data-phone]").forEach(function (el) {
      el.setAttribute("href", el.getAttribute("data-phone") + ":" + dial);
      el.hidden = false;
    });
    document.querySelectorAll("[data-phone-text]").forEach(function (el) { el.textContent = PHONE; });
    document.querySelectorAll("[data-phone-block]").forEach(function (el) { el.hidden = false; });
    document.querySelectorAll("[data-no-phone]").forEach(function (el) { el.hidden = true; });
  }

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

  // A link like contact.html?project=Roofing#quote picks that project in the form.
  var wanted = new URLSearchParams(window.location.search).get("project");

  document.querySelectorAll("form[data-sms]").forEach(function (form) {
    var f = form.elements;
    var tip = form.querySelector("[data-tip]");
    function updateTip() {
      if (!tip) return;
      tip.textContent = tip.getAttribute("data-photo-tip");
    }
    if (wanted) {
      for (var i = 0; i < f.project.options.length; i++) {
        if (f.project.options[i].value === wanted) f.project.selectedIndex = i;
      }
    }
    updateTip();
    f.project.addEventListener("change", updateTip);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var lines = [
        "Hi, this is " + f.name.value.trim() + ".",
        "Project: " + f.project.value,
        f.need.value.trim(),
        "Town: " + f.town.value.trim(),
        "My number: " + f.phone.value.trim()
      ];
      var body = encodeURIComponent(lines.join("\n"));
      window.location.href = "sms:" + form.getAttribute("data-sms") + "?&body=" + body;
    });
  });
})();
