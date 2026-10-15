document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
      document.body.classList.toggle("menu-open", !open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }));
  }

  const form = document.querySelector("#enquiry-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const recipient = "cliu8898@gmail.com";
      if (recipient === "cliu8898@gmail.com") {
        const status = document.querySelector("#form-status");
        status.textContent = "Please replace cliu8898@gmail.com in contact.html and assets/js/main.js with your business email before using this form.";
        return;
      }
      const data = new FormData(form);
      const subject = encodeURIComponent("SERISDAN Website Enquiry — " + data.get("project"));
      const body = encodeURIComponent(
        "Name / Company: " + data.get("name") + "\n" +
        "Email: " + data.get("email") + "\n" +
        "Project: " + data.get("project") + "\n\n" +
        "Project details:\n" + (data.get("details") || "Not provided")
      );
      window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
    });
  }
});