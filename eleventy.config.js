// Configuración de Eleventy (el generador que convierte las plantillas en HTML).
// - Lo que escribimos está en la carpeta  src/
// - La web terminada sale en la carpeta   _site/   (eso es lo que se sube a Banahosting)

export default function (eleventyConfig) {
  // Archivos que se copian tal cual, sin procesar
  eleventyConfig.addPassthroughCopy({ "src/static/.htaccess": ".htaccess" });
  eleventyConfig.addPassthroughCopy({ "src/static/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Año actual, para el pie de página
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
