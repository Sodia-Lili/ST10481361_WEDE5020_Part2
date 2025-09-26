// JavaScript for Carousel Functionality

  window.onload = function() {
  // New Arrivals Carousel
  const newImages = document.getElementById('carousel-new-images');
  document.getElementById('carousel-new-left').onclick = function() {
    newImages.insertBefore(newImages.lastElementChild, newImages.firstElementChild);
  };
  document.getElementById('carousel-new-right').onclick = function() {
    newImages.appendChild(newImages.firstElementChild);
  };

  // Best Sellers Carousel
  const bestImages = document.getElementById('carousel-best-images');
  document.getElementById('carousel-best-left').onclick = function() {
    bestImages.insertBefore(bestImages.lastElementChild, bestImages.firstElementChild);
  };
  document.getElementById('carousel-best-right').onclick = function() {
    bestImages.appendChild(bestImages.firstElementChild);
  };

  // Our Products Carousel
  const productsImages = document.getElementById('carousel-products-images');
  document.getElementById('carousel-products-left').onclick = function() {
    productsImages.insertBefore(productsImages.lastElementChild, productsImages.firstElementChild);
  };
  document.getElementById('carousel-products-right').onclick = function() {
    productsImages.appendChild(productsImages.firstElementChild);
  };

  // Featured Sellers Carousel
  const featuredImages = document.getElementById('carousel-featured-images');
  document.getElementById('carousel-featured-left').onclick = function() {
    featuredImages.insertBefore(featuredImages.lastElementChild, featuredImages.firstElementChild);
  };
  document.getElementById('carousel-featured-right').onclick = function() {
    featuredImages.appendChild(featuredImages.firstElementChild);
      };
  
};

/*(ChatGPT, 2025)*/

// JavaScript for Hamburger Menu and Carousel Functionality
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    });

/*(ChatGPT, 2025)*/

