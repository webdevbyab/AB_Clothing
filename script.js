// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');

let count = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
    cartCount.style.animation = 'bounce 0.5s ease';
    setTimeout(() => {
      cartCount.style.animation = '';
    }, 500);
  });
});

// Bounce Animation for Cart Count
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
`;
document.head.appendChild(style);

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});