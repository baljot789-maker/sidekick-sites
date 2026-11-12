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

  // Sideways photo strips: arrow buttons for mouse users, hint hides once someone scrolls.
  document.querySelectorAll(".rail-wrap").forEach(function (wrap) {
    var rail = wrap.querySelector(".rail");
    var hint = wrap.querySelector(".rail-hint");
    var prev = document.createElement("button");
    var next = document.createElement("button");
    prev.type = next.type = "button";
    prev.className = "rail-btn rail-prev"; next.className = "rail-btn rail-next";
    prev.setAttribute("aria-label", "Previous photo"); next.setAttribute("aria-label", "Next photo");
    prev.innerHTML = "&#8249;"; next.innerHTML = "&#8250;";
    wrap.appendChild(prev); wrap.appendChild(next);
    function step() { var s = rail.querySelector(".slide"); return s ? s.getBoundingClientRect().width + 14 : 300; }
    function update() {
      prev.disabled = rail.scrollLeft < 4;
      next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
      var fits = rail.scrollWidth <= rail.clientWidth + 4;
      wrap.classList.toggle("fits", fits);
      if (hint) hint.style.visibility = (fits || rail.scrollLeft > 20) ? "hidden" : "visible";
    }
    prev.addEventListener("click", function () { rail.scrollBy({ left: -step(), behavior: "smooth" }); });
    next.addEventListener("click", function () { rail.scrollBy({ left: step(), behavior: "smooth" }); });
    rail.addEventListener("scroll", update, { passive: true });
    rail.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { rail.scrollBy({ left: step(), behavior: "smooth" }); e.preventDefault(); }
      if (e.key === "ArrowLeft") { rail.scrollBy({ left: -step(), behavior: "smooth" }); e.preventDefault(); }
    });
    window.addEventListener("resize", update);
    update();
  });

  // Tap a photo to see it full size. Left and right stay inside the same job.
  var links = [].slice.call(document.querySelectorAll("a.zoom"));
  if (links.length) {
    var box = document.createElement("div");
    box.className = "lb"; box.hidden = true;
    box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Photo viewer");
    box.innerHTML = '<div class="lb-stage"><img alt=""></div><p class="lb-cap"></p>' +
      '<button class="lb-x" type="button" aria-label="Close">&times;</button>' +
      '<button class="lb-prev" type="button" aria-label="Previous photo">&#8249;</button>' +
      '<button class="lb-next" type="button" aria-label="Next photo">&#8250;</button>';
    document.body.appendChild(box);
    var big = box.querySelector("img"), cap = box.querySelector(".lb-cap");
    var group = [], at = 0, opener = null, touchX = null;
    function show(i) {
      at = (i + group.length) % group.length;
      var l = group[at], t = l.querySelector("img");
      big.src = l.getAttribute("href"); big.alt = t ? t.alt : "";
      cap.textContent = l.getAttribute("data-cap") || "";
      var one = group.length < 2;
      box.querySelector(".lb-prev").hidden = one; box.querySelector(".lb-next").hidden = one;
    }
    function open(l) {
      var g = l.getAttribute("data-group");
      group = links.filter(function (x) { return x.getAttribute("data-group") === g; });
      opener = l; show(group.indexOf(l));
      box.hidden = false; document.body.classList.add("lb-open");
      box.querySelector(".lb-x").focus();
    }
    function close() {
      box.hidden = true; document.body.classList.remove("lb-open");
      if (opener) opener.focus();
    }
    links.forEach(function (l) { l.addEventListener("click", function (e) { e.preventDefault(); open(l); }); });
    box.querySelector(".lb-x").addEventListener("click", close);
    box.querySelector(".lb-prev").addEventListener("click", function () { show(at - 1); });
    box.querySelector(".lb-next").addEventListener("click", function () { show(at + 1); });
    box.addEventListener("click", function (e) { if (e.target === box || e.target.className === "lb-stage") close(); });
    document.addEventListener("keydown", function (e) {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(at - 1);
      if (e.key === "ArrowRight") show(at + 1);
    });
    box.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX; touchX = null;
      if (Math.abs(dx) > 50) show(at + (dx < 0 ? 1 : -1));
    });
  }
})();
