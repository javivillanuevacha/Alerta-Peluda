/**
 * ALERTA PELUDA - JavaScript Principal
 * Funcionalidades para la web de ofertas de mascotas
 */

/**
 * Maneja el click en los botones de oferta
 * @param {string} productId - ID del producto
 */
function handleOfferClick(productId) {
  // Log para debugging
  console.log("Producto seleccionado: " + productId);

  // Aquí puedes añadir tracking analytics, GTM, etc.
  // trackEvent('offer_click', productId);

  // Mensaje temporal hasta tener enlaces reales
  alert(
    "¡Genial! Has seleccionado una oferta increíble.\n\nProducto: " +
      productId +
      "\n\nPronto tendremos los enlaces de afiliado funcionando. 🐾"
  );

  // Cuando tengas los enlaces reales, reemplaza el alert por:
  /*
    var affiliateLinks = {
        'pienso-royal-canin': 'https://tu-enlace-afiliado.com/pienso',
        'torre-juegos-gatos': 'https://tu-enlace-afiliado.com/torre',
        'cama-ortopedica': 'https://tu-enlace-afiliado.com/cama'
        // Añade más productos aquí
    };
    
    if (affiliateLinks[productId]) {
        window.open(affiliateLinks[productId], '_blank');
    }
    */
}

/**
 * Inicialización cuando se carga la página
 */
document.addEventListener("DOMContentLoaded", function () {
  console.log("🐾 Alerta Peluda cargada correctamente");

  // Añadir efectos hover suaves a las cards
  var cards = document.querySelectorAll(".product-card");
  cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 15px 40px rgba(124, 152, 133, 0.15)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
    });
  });

  // Smooth scroll para enlaces internos
  var internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Highlighting del botón de categoría activo
  highlightActiveCategory();

  // Contador de productos visible
  updateProductCounter();

  // Añadir efecto de click a los botones
  addButtonClickEffects();
});

/**
 * Resalta la categoría activa en la navegación
 */
function highlightActiveCategory() {
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var categoryButtons = document.querySelectorAll(".category-btn");

  categoryButtons.forEach(function (btn) {
    btn.classList.remove("active");
    var href = btn.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      btn.classList.add("active");
    }
  });
}

/**
 * Actualiza el contador de productos
 */
function updateProductCounter() {
  var visibleProducts = document.querySelectorAll(".product-card:not(.hidden)");
  var counter = document.querySelector(".counter-badge");
  if (counter) {
    counter.textContent = visibleProducts.length + " productos";
  }
}

/**
 * Añade efectos visuales a los botones
 */
function addButtonClickEffects() {
  var offerButtons = document.querySelectorAll(".offer-btn");
  offerButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Efecto visual al hacer click
      this.style.transform = "scale(0.95)";
      var self = this;
      setTimeout(function () {
        self.style.transform = "scale(1)";
      }, 150);
    });
  });
}

/**
 * Función para añadir nuevos productos fácilmente
 * Ejemplo de cómo estructurar los datos
 */
function addNewProduct(productData) {
  /*
    Estructura esperada:
    {
        id: 'producto-id',
        title: 'Nombre del Producto',
        image: 'url-imagen',
        category: 'perros', // perros, gatos, pajaros, pequenos, peces
        originalPrice: 59.99,
        salePrice: 39.99,
        discount: 33,
        icon: 'bi-star-fill', // Icono de Bootstrap
        iconColor: 'text-warning'
    }
    */

  var categoryClasses = {
    perros: "badge-perros",
    gatos: "badge-gatos",
    pajaros: "badge-pajaros",
    pequenos: "badge-pequenos",
    peces: "badge-peces",
  };

  var categoryIcons = {
    perros: "bi-heart",
    gatos: "bi-emoji-smile",
    pajaros: "bi-music-note",
    pequenos: "bi-star",
    peces: "bi-droplet",
  };

  var categoryNames = {
    perros: "Perros",
    gatos: "Gatos",
    pajaros: "Pájaros",
    pequenos: "Pequeños",
    peces: "Peces",
  };

  var productHTML =
    '<div class="col-lg-4 col-md-6 col-12">' +
    '<div class="product-card" data-category="' +
    productData.category +
    '">' +
    '<img src="' +
    productData.image +
    '" alt="' +
    productData.title +
    '" class="product-image">' +
    '<div class="product-info">' +
    '<div class="category-badge ' +
    categoryClasses[productData.category] +
    '">' +
    '<i class="' +
    categoryIcons[productData.category] +
    '"></i> ' +
    categoryNames[productData.category] +
    "</div>" +
    '<h4 class="product-title">' +
    '<i class="bi ' +
    productData.icon +
    " " +
    productData.iconColor +
    '"></i>' +
    productData.title +
    "</h4>" +
    '<div class="price-section">' +
    '<span class="original-price">€' +
    productData.originalPrice +
    "</span>" +
    '<span class="sale-price">€' +
    productData.salePrice +
    "</span>" +
    '<span class="discount-badge">-' +
    productData.discount +
    "%</span>" +
    "</div>" +
    '<button class="offer-btn" onclick="handleOfferClick(\'' +
    productData.id +
    "')\">" +
    '<i class="bi bi-bag-check"></i> Ver Oferta' +
    "</button>" +
    "</div>" +
    "</div>" +
    "</div>";

  // Aquí insertarías el HTML en el contenedor de productos
  console.log("Nuevo producto listo para añadir:", productHTML);
  return productHTML;
}

/**
 * Función para tracking de eventos (para Google Analytics, etc.)
 */
function trackEvent(eventName, productId, category) {
  // Verificar si Google Analytics está disponible
  if (typeof gtag !== "undefined") {
    gtag("event", eventName, {
      product_id: productId,
      category: category || "unknown",
      currency: "EUR",
    });
  }

  // Verificar si Facebook Pixel está disponible
  if (typeof fbq !== "undefined") {
    fbq("track", "ViewContent", {
      content_ids: [productId],
      content_type: "product",
    });
  }

  console.log("Evento tracked: " + eventName + " - " + productId);
}

/**
 * Función para mostrar notificaciones toast
 */
function showToast(message, type) {
  type = type || "success";

  // Crear elemento toast
  var toast = document.createElement("div");
  toast.className = "toast-notification toast-" + type;
  toast.innerHTML =
    '<div class="toast-content">' +
    '<i class="bi bi-check-circle-fill"></i>' +
    "<span>" +
    message +
    "</span>" +
    "</div>";

  // Estilos del toast
  toast.style.cssText =
    "position: fixed; top: 20px; right: 20px; background: " +
    (type === "success" ? "#28a745" : "#dc3545") +
    "; color: white; padding: 1rem 1.5rem; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); z-index: 9999; transform: translateX(100%); transition: transform 0.3s ease;";

  document.body.appendChild(toast);

  // Mostrar toast
  setTimeout(function () {
    toast.style.transform = "translateX(0)";
  }, 100);

  // Ocultar toast después de 3 segundos
  setTimeout(function () {
    toast.style.transform = "translateX(100%)";
    setTimeout(function () {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

/**
 * Función para lazy loading de imágenes
 */
function initLazyLoading() {
  var images = document.querySelectorAll(".product-image[data-src]");

  if ("IntersectionObserver" in window) {
    var imageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(function (img) {
      imageObserver.observe(img);
    });
  }
}

/**
 * Función para búsqueda de productos
 */
function searchProducts(query) {
  var products = document.querySelectorAll(".product-card");
  var searchTerm = query.toLowerCase();

  products.forEach(function (product) {
    var title = product
      .querySelector(".product-title")
      .textContent.toLowerCase();
    var category = product.dataset.category || "";

    if (
      title.indexOf(searchTerm) !== -1 ||
      category.indexOf(searchTerm) !== -1
    ) {
      product.style.display = "block";
      product.classList.remove("hidden");
    } else {
      product.style.display = "none";
      product.classList.add("hidden");
    }
  });

  updateProductCounter();
}

/**
 * Función para ordenar productos
 */
function sortProducts(criteria) {
  var container = document.querySelector(".row.g-4");
  if (!container) return;

  var products = Array.from(container.querySelectorAll(".col-lg-4"));

  products.sort(function (a, b) {
    var salePriceA = a.querySelector(".sale-price");
    var salePriceB = b.querySelector(".sale-price");
    var discountA = a.querySelector(".discount-badge");
    var discountB = b.querySelector(".discount-badge");

    if (!salePriceA || !salePriceB) return 0;

    var priceA = parseFloat(salePriceA.textContent.replace("€", ""));
    var priceB = parseFloat(salePriceB.textContent.replace("€", ""));

    switch (criteria) {
      case "price-low":
        return priceA - priceB;
      case "price-high":
        return priceB - priceA;
      case "discount":
        if (!discountA || !discountB) return 0;
        var discA = parseInt(discountA.textContent.replace(/[^0-9]/g, ""));
        var discB = parseInt(discountB.textContent.replace(/[^0-9]/g, ""));
        return discB - discA;
      default:
        return 0;
    }
  });

  products.forEach(function (product) {
    container.appendChild(product);
  });
}

/**
 * Función para obtener productos recomendados
 */
function getRecommendedProducts(currentCategory, limit) {
  limit = limit || 3;
  var allProducts = document.querySelectorAll(".product-card");
  var recommended = [];

  allProducts.forEach(function (product) {
    if (
      product.dataset.category === currentCategory &&
      recommended.length < limit
    ) {
      var titleElement = product.querySelector(".product-title");
      var priceElement = product.querySelector(".sale-price");
      var imageElement = product.querySelector(".product-image");
      var discountElement = product.querySelector(".discount-badge");

      if (titleElement && priceElement && imageElement) {
        recommended.push({
          title: titleElement.textContent.trim(),
          price: priceElement.textContent,
          image: imageElement.src,
          discount: discountElement ? discountElement.textContent : "",
        });
      }
    }
  });

  return recommended;
}

// Exportar funciones para usar en otros archivos (si es necesario)
if (typeof window !== "undefined") {
  window.AlertaPeluda = {
    handleOfferClick: handleOfferClick,
    addNewProduct: addNewProduct,
    trackEvent: trackEvent,
    showToast: showToast,
    searchProducts: searchProducts,
    sortProducts: sortProducts,
    getRecommendedProducts: getRecommendedProducts,
  };
}
