# Proyecto Gitignore - Web Universidad Mayor de San Simón (UMSS)


### Integrantes:

- Bladimir Luna Corrales
- Brayan Herland Macilla Escalera
- Cristhian Alessandro Aguilar Castellon
- Jose Jonatan Zambrana Ecobar
> *nuestro logo*

<p align="center">
  <img src="assets/img/tux.png" alt="Introducción Git" width="750" height="500">
</p>

---

## ⚠️ ¡Revisar la Wiki antes de todo!

Toda la documentación detallada del proyecto (arquitectura, CI, flujo de ramas, estándares de código, etc.) se encuentra disponible en la **[WIKI del proyecto](../../wiki)**.

🚀 **[Visitar la Web del Proyecto Gitignore](https://ag-cris21.github.io/gitgnore/)**

---

---

## 🚀 Características del Proyecto

Nuestro sitio web ofrece una experiencia completa para postulantes y estudiantes regulares de la UMSS, dividida en varias secciones clave:

- 🏛️ **Reseña Institucional:** Información detallada sobre la historia, misión, visión y los principios fundamentales de la universidad.
- 📚 **Facultades y Carreras:** Exploración de las principales facultades (Derecho, Ciencias Económicas, Medicina y Tecnología) y su respectiva oferta académica.
- 🌳 **Campus UMSS:** Galería e información sobre las instalaciones principales, bibliotecas y laboratorios.
- 🎓 **Vida Estudiantil:** Una guía completa con consejos de supervivencia, los mejores lugares para comer, zonas de estudio y eventos comunitarios.
- 📞 **Contacto:** Sección con información para contactar a los distintos departamentos de la universidad.

## 🛠️ Tecnologías y Herramientas Utilizadas

Este proyecto fue desarrollado aplicando buenas prácticas de desarrollo web, modularización de componentes e integración de frameworks modernos:

- **Frontend Core:** HTML5, CSS3, JavaScript (Vanilla).
- **Framework UI:** [Bootstrap 5.3](https://getbootstrap.com/) para diseño responsivo (Grid system, Cards, Carousels).
- **Iconografía:** [Font Awesome 6.4](https://fontawesome.com/) para una interfaz visual y atractiva.
- **Arquitectura Web:** Modularización de componentes mediante la inyección de partes estáticas (Navbar, Footer, Info UMSS) utilizando JavaScript, manteniendo el código HTML limpio y escalable.

---
## 🌐 Sitio Web del Proyecto

Estado actual del proyecto
Arquitectura diseñada y documentada
CI implementado y funcional
Plantilla de Pull Request activa
Reglas de protección en ramas activas
User Stories definidas y organizadas
Código base creado con enfoque modular y escalable
Puedes visualizar el resultado final y explorar nuestro proyecto desplegado a través de GitHub Pages en el siguiente enlace:


## ⚙️ Cómo Ejecutar en Local (Guía para el Auxiliar)
****
Si estás usando **Linux**, puedes usar `npx` (que viene incluido con Node.js) para levantar un servidor estático rápidamente.

```bash
sudo apt update
sudo apt install nodejs npm
```

*(Si usas Fedora: `sudo dnf install nodejs` o Arch Linux: `sudo pacman -S nodejs npm`)*.

Puedes verificar que se instaló correctamente ejecutando: `node -v` y `npm -v`.

### 2. Levantar el Servidor Local


**Opción A (Recomendada - Serve básico):**
```bash
npx serve .
```

**Opción B (Sin caché, ideal para ver cambios rápido):**
```bash
npx http-server -c-1
```

**Opción C (Auto-recarga al editar archivos):**
```bash
npx live-server
```



## 📋 Resumen del Proyecto

Este proyecto consiste en un **sitio web informativo** sobre la institución educativa, implementado con **HTML, CSS y JavaScript vanilla**, bajo un enfoque profesional que incluye:

- ✅ Validación de código con linters (HTML, CSS, JavaScript)
- ✅ Integración Continua (CI) con GitHub Actions
- ✅ Estructura modular de componentes reutilizables
- ✅ Despliegue automático en GitHub Pages

---

## 🔄 Integración Continua (CI)

Se configuró un flujo de CI con **GitHub Actions** que realiza validaciones automáticas en cada `push` y `pull request`:

### Validaciones ejecutadas:

#### 1️⃣ **Validación de HTML**

- Verifica la sintaxis y estructura correcta de todos los archivos HTML
- Detecta etiquetas mal cerradas, atributos inválidos, etc.
- Se ejecuta con `npm run lint:html`

#### 2️⃣ **Validación de JavaScript**

- Utiliza **ESLint** para analizar el código JavaScript
- Detecta errores de sintaxis, variables no utilizadas, inconsistencias de estilo
- Sigue la configuración de Airbnb para mejores prácticas
- Se ejecuta con `npm run lint:js`

#### 3️⃣ **Validación de CSS**

- Utiliza **Stylelint** para validar hojas de estilo
- Verifica indentación, uso de comillas, especificidad de selectores
- Se ejecuta con `npm run lint:css`

#### 4️⃣ **Verificación de archivos**

- Detecta archivos temporales o del sistema (`.log`, `.DS_Store`, etc.)
- Asegura que no se cometan archivos innecesarios

### Cómo ejecutar validaciones localmente:

```bash
# Instalar dependencias
npm install

# Ejecutar todas las validaciones
npm run lint

# O ejecutar validaciones específicas
npm run lint:html   # Solo HTML
npm run lint:js     # Solo JavaScript
npm run lint:css    # Solo CSS
```


### Estado actual del proyecto

- ✅ Estructura de carpetas organizada y modular
- ✅ CI implementado y funcional
- ✅ Validadores de código configurados
- ✅ Despliegue automático en GitHub Pages
- ✅ Documentación de estándares de código

---
