// Open the popup
function openPopup() {
  document.getElementById("orderPopup").style.display = "flex";
}

// Close the popup
function closePopup() {
  document.getElementById("orderPopup").style.display = "none";
}

// Handle form submission
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const product = document.getElementById("product").value;
  const details = document.getElementById("details").value;

  // For now, just log the order
  console.log("Order submitted:", { name, email, product, details });

  alert("🦇 Your desire has been placed at the altar. You'll be contacted soon.");

  closePopup();
});
