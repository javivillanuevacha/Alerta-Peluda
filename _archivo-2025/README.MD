# 🐾 Alerta Peluda - Web de Ofertas para Mascotas

Una web moderna y responsive para mostrar ofertas de productos para mascotas, perfecta para programas de afiliados como Zooplus.

## 📁 Estructura del Proyecto

```
alerta-peluda/
├── index.html          # Página principal con todas las ofertas
├── style.css           # Estilos CSS personalizados
├── script.js           # JavaScript principal
├── perros.html         # Página específica para perros
├── gatos.html          # Página específica para gatos
├── pajaros.html        # Página específica para pájaros
├── pequenos.html       # Página específica para animales pequeños
├── peces.html          # Página específica para peces
└── README.md           # Este archivo
```

## 🚀 Características

### ✨ Diseño Moderno

- **Responsive**: Se adapta perfectamente a móviles, tablets y escritorio
- **Colores suaves**: Verde pastel, naranja suave, diseño limpio
- **Tipografía**: Google Fonts (Poppins) para mejor legibilidad
- **Animaciones**: Efectos hover y transiciones suaves

### 🧱 Funcionalidades

- **Navegación por categorías**: Cada categoría tiene su página dedicada
- **Cards de productos**: Diseño uniforme con precios y descuentos
- **Botones interactivos**: Efectos visuales al hacer click
- **Footer con redes sociales**: Enlaces preparados para personalizar

### 📱 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Flexbox, Grid
- **Bootstrap 5.3**: Sistema de grid responsive
- **Bootstrap Icons**: Iconografía moderna
- **JavaScript Vanilla**: Sin dependencias externas

## 🛠️ Instalación y Uso

### 1. Descarga los archivos

Guarda todos los archivos en una carpeta:

- `index.html`
- `style.css`
- `script.js`
- `perros.html`
- `gatos.html`
- `pajaros.html`
- `pequenos.html`
- `peces.html`

### 2. Sube a tu hosting

Puedes usar cualquiera de estas opciones:

#### GitHub Pages (Gratis)

1. Sube los archivos a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu web estará disponible en `usuario.github.io/nombre-repo`

#### Vercel (Gratis)

1. Sube la carpeta a Vercel
2. Conecta tu repositorio
3. Deploy automático

#### Netlify (Gratis)

1. Arrastra la carpeta a Netlify
2. Deploy instantáneo

## ⚙️ Personalización

### 🎨 Cambiar Colores

Edita las variables CSS en `style.css`:

```css
:root {
  --primary-color: #7c9885; /* Verde principal */
  --secondary-color: #f4a261; /* Naranja suave */
  --accent-color: #e9c46a; /* Amarillo pastel */
  /* Cambia estos valores por tus colores preferidos */
}
```

### 🛍️ Añadir Productos

Para añadir un nuevo producto, copia esta estructura en cualquier página:

```html
<div class="col-lg-4 col-md-6 col-12">
  <div class="product-card">
    <img src="URL_IMAGEN" alt="Descripción" class="product-image" />
    <div class="product-info">
      <div class="category-badge badge-perros">
        <i class="bi bi-heart"></i> Categoría
      </div>
      <h4 class="product-title">
        <i class="bi bi-star-fill text-warning"></i>
        Nombre del Producto
      </h4>
      <div class="price-section">
        <span class="original-price">€XX.XX</span>
        <span class="sale-price">€XX.XX</span>
        <span class="discount-badge">-XX%</span>
      </div>
      <button class="offer-btn" onclick="handleOfferClick('producto-id')">
        <i class="bi bi-bag-check"></i> Ver Oferta
      </button>
    </div>
  </div>
</div>
```

### 🔗 Configurar Enlaces de Afiliado

#### 1. Edita `script.js`

Encuentra la función `handleOfferClick` y reemplaza el alert por tu lógica:

```javascript
function handleOfferClick(productId) {
  // Tracking de eventos (Google Analytics, Facebook Pixel, etc.)
  trackEvent("offer_click", productId);

  // Redirección a enlace de afiliado
  const affiliateLinks = {
    "pienso-royal-canin": "https://tu-enlace-zooplus.com/producto1",
    "torre-juegos-gatos": "https://tu-enlace-zooplus.com/producto2",
    // Añade más productos aquí
  };

  if (affiliateLinks[productId]) {
    window.open(affiliateLinks[productId], "_blank");
  }
}
```

#### 2. Obtén tus enlaces de Awin/Zooplus

1. Regístrate en Awin: [https://www.awin.com](https://www.awin.com)
2. Solicita acceso al programa de Zooplus
3. Genera enlaces para cada producto
4. Reemplaza los enlaces ficticios por los reales

### 📊 Configurar Analytics

#### Google Analytics 4

Añade antes del `</head>` en todas las páginas:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

#### Facebook Pixel

Añade después del `<body>` en todas las páginas:

```html
<!-- Facebook Pixel -->
<script>
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  fbq("init", "TU_PIXEL_ID");
  fbq("track", "PageView");
</script>
```

### 🎯 SEO Optimización

#### Meta Tags

Añade en el `<head>` de cada página:

```html
<meta
  name="description"
  content="Las mejores ofertas diarias para mascotas. Descuentos en piensos, juguetes, camas y más."
/>
<meta
  name="keywords"
  content="ofertas mascotas, descuentos perros, ofertas gatos, zooplus"
/>
<meta property="og:title" content="Alerta Peluda - Ofertas para Mascotas" />
<meta
  property="og:description"
  content="Descubre las mejores ofertas para tu mascota"
/>
<meta property="og:image" content="URL_IMAGEN_SOCIAL" />
<meta property="og:url" content="URL_TU_WEB" />
```

## 🎨 Personalización Avanzada

### Cambiar el Logo

Reemplaza el texto en el header por una imagen:

```html
<div class="logo-section text-center">
  <img src="tu-logo.png" alt="Alerta Peluda" style="height: 60px;" />
  <p>Tu compañero de ofertas para mascotas</p>
</div>
```

### Añadir Buscador

Crea un input de búsqueda que use la función `searchProducts()`:

```html
<div class="search-container">
  <input
    type="text"
    placeholder="Buscar productos..."
    onkeyup="searchProducts(this.value)"
  />
</div>
```

### Integrar Newsletter

Añade un formulario de suscripción:

```html
<div class="newsletter-section">
  <h4>🔔 ¡No te pierdas ninguna oferta!</h4>
  <form action="TU_SERVICIO_EMAIL" method="post">
    <input type="email" placeholder="tu@email.com" required />
    <button type="submit">Suscribirse</button>
  </form>
</div>
```

## 🚀 Próximos Pasos

1. **Configura los enlaces de afiliado** reales
2. **Personaliza los colores** con tu marca
3. **Añade más productos** copiando las cards existentes
4. **Configura Google Analytics** para tracking
5. **Optimiza para SEO** con meta tags
6. **Promociona en redes sociales**

## 📞 Soporte

Si necesitas ayuda con la personalización:

- Revisa el código comentado en `script.js`
- Usa las variables CSS para cambios rápidos de diseño
- Mantén la estructura de Bootstrap para responsive
- Testa en móviles antes de publicar

## 📄 Licencia

Este proyecto es de uso libre. Puedes modificarlo y usarlo para tus proyectos comerciales.

---

**¡Éxito con tu web de afiliados! 🐾**
