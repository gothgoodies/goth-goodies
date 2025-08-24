// -------------------------------
// POPUP LOGIC
// -------------------------------

// ORDER POPUP
const orderPopup = document.getElementById("orderPopup");
const orderCloseBtn = document.querySelector("#orderPopup .close");
const orderForm = document.getElementById("orderForm");

// Open Order popup on button click
document.querySelectorAll(".orderBtn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    if (orderPopup) orderPopup.style.display = "flex";
  });
});

// Close Order popup on X
if (orderCloseBtn && orderPopup) {
  orderCloseBtn.addEventListener("click", () => {
    orderPopup.style.display = "none";
  });
}

// Close Order popup if clicking outside content
window.addEventListener("click", e => {
  if (e.target === orderPopup) orderPopup.style.display = "none";
});

// ORDER FORM SUBMISSION
if (orderForm) {
  orderForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const product = document.getElementById("product")?.value || "";
    const details = document.getElementById("details")?.value || "";

    console.log("Order submitted:", { name, email, product, details });
    alert("🦇 Your desire has been placed at the altar. You'll be contacted soon.");

    if (orderPopup) orderPopup.style.display = "none";
    orderForm.reset();
  });
}

// CART POPUP
const cartPopup = document.getElementById("cartPopup");
const cartCloseBtn = document.querySelector("#cartPopup .close-cart");
const cartLink = document.querySelector('.nav-buttons a[href="#cart"]');

// Open Cart popup
if (cartLink && cartPopup) {
  cartLink.addEventListener("click", e => {
    e.preventDefault();
    cartPopup.style.display = "flex";
  });
}

// Close Cart popup on X
if (cartCloseBtn && cartPopup) {
  cartCloseBtn.addEventListener("click", () => {
    cartPopup.style.display = "none";
  });
}

// Close Cart popup if clicking outside content
window.addEventListener("click", e => {
  if (e.target === cartPopup) cartPopup.style.display = "none";
});

// -------------------------------
// SMOOTH SCROLL FOR NAV LINKS
// -------------------------------
document.querySelectorAll(".nav-buttons a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
