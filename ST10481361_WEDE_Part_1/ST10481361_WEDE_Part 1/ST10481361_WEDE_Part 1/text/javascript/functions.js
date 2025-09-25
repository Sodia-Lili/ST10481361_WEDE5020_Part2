window.onload = function() {
  alert("JS loaded!");
}
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
};