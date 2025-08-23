// ========================
// POPUP OPEN / CLOSE LOGIC
// ========================

// Get elements
const orderBtn = document.getElementById("orderBtn");   // "Order" button in nav
const orderPopup = document.getElementById("orderPopup"); // Popup modal
const closeBtn = document.querySelector(".popup .close"); // Close X button
const orderForm = document.getElementById("orderForm");   // The form inside popup

// Open the popup
function openPopup() {
  orderPopup.style.display = "flex";
}

// Close the popup
function closePopup() {
  orderPopup.style.display = "none";
}

// Handle nav "Order" button click
if (orderBtn) {
  orderBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent jump
    openPopup();
  });
}

// Handle close button click
if (closeBtn) {
  closeBtn.addEventListener("click", closePopup);
}

// Close popup if clicking outside it
window.addEventListener("click", (e) => {
  if (e.target === orderPopup) {
    closePopup();
  }
});


// ========================
// FORM SUBMISSION HANDLER
// ========================
if (orderForm) {
  orderForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const product = document.getElementById("product").value;
    const details = document.getElementById("details").value;

    // TEMP: Log it to console (for testing)
    console.log("Order submitted:", { name, email, product, details });

    // Show spooky alert
    alert("🦇 Your desire has been placed at the altar. You'll be contacted soon.");

    // Close popup after submit
    closePopup();
  });
}

// ========================
// CART POPUP LOGIC
// ========================

const cartBtn = document.getElementById("cartBtn");
const cartPopup = document.getElementById("cartPopup"); // make sure this exists in your HTML
const cartClose = document.querySelector(".cart-popup .close");

function openCart() {
  cartPopup.style.display = "flex";
}

function closeCart() {
  cartPopup.style.display = "none";
}

if (cartBtn) {
  cartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openCart();
  });
}

if (cartClose) {
  cartClose.addEventListener("click", closeCart);
}

window.addEventListener("click", (e) => {
  if (e.target === cartPopup) {
    closeCart();
  }
});

