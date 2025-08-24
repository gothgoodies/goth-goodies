// POPUP OPEN / CLOSE LOGIC
const orderPopup = document.getElementById("orderPopup");
const closeBtn = document.querySelector(".popup .close");
const orderForm = document.getElementById("orderForm");

// Open Order popup
document.querySelectorAll(".orderBtn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    orderPopup.style.display = "flex";
  });
});

// Close Order popup
if (closeBtn) closeBtn.addEventListener("click", () => {
  orderPopup.style.display = "none";
});

// Close if clicking outside popup
window.addEventListener("click", e => {
  if (e.target === orderPopup) orderPopup.style.display = "none";
});

// FORM SUBMISSION
if (orderForm) {
  orderForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const product = document.getElementById("product").value;
    const details = document.getElementById("details").value;

    console.log("Order submitted:", { name, email, product, details });
    alert("🦇 Your desire has been placed at the altar. You'll be contacted soon.");

    orderPopup.style.display = "none";
    orderForm.reset();
  });
}

// SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll(".nav-buttons a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
