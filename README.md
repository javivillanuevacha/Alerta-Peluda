# Alerta Peluda

Guía práctica para convivir con **galgos y podencos adoptados** · [alertapeluda.es](https://alertapeluda.es)

## Cómo está organizado

| Carpeta / archivo | Qué es |
|---|---|
| `src/` | La web: páginas, plantillas y estilos. **Aquí se trabaja.** |
| `src/_includes/` | Plantillas comunes (cabecera, pie, aviso de afiliados) |
| `src/_data/site.json` | Datos generales: nombre, dirección, redes sociales |
| `src/assets/` | Estilos e imágenes |
| `src/static/` | `.htaccess` y `robots.txt` |
| `.github/workflows/publicar.yml` | La publicación automática a Banahosting |

## Cómo se trabaja

1. Claude prepara los cambios en una rama y abre una **pull request**.
2. Javier la revisa y, si le parece bien, pulsa **Merge**.
3. GitHub genera la web y la sube sola a Banahosting (pestaña **Actions**).

## Probarla en el ordenador (opcional)

```bash
npm install
npm start
```

Y abrir http://localhost:8080
