// JavaScript for Product Showcase interactivity

// Add event listeners to all "Buy Now" buttons
document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".btn-buy");
    const productCards = document.querySelectorAll(".product-card");
  
    // Add click event to "Buy Now" buttons
    buyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Product added to cart!");
      });
    });
  
    // Add hover effect to "Buy Now" buttons
    buyButtons.forEach((button) => {
      button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#d90429"; // Darker red
        button.style.transform = "scale(1.1)";
      });
      button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#ef233c"; // Original color
        button.style.transform = "scale(1)";
      });
    });
  
    // Add hover effect to product cards
    productCards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
      });
      card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      });
    });
  });
  