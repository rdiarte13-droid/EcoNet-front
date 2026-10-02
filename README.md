# EcoNet

Proyecto web educativo sobre el cuidado del medio ambiente.

## Tecnologías utilizadas

- HTML5
- CSS3
- Bootstrap 5
- DOM
- React
- Vite

## Estructura

EcoNet/
│
├── index.html
├── style.css
├── package.json
├── README.md
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   │
│   └── components/
│       ├── Navbar.jsx
│       ├── Presentacion.jsx
│       ├── Video.jsx
│       ├── Lugares.jsx
│       ├── Comunidades.jsx
│       └── Footer.jsx
│
└── public/
    └── img/

## Instalación

Abrir una terminal dentro de la carpeta EcoNet.

Ejecutar:

npm install

Después:

npm run dev

Vite mostrará una dirección similar a:

http://localhost:5173/

Abrir esa dirección en el navegador.

## ¿Qué hace cada archivo?

### index.html

Es la estructura HTML inicial.

Contiene el elemento:

<div id="root"></div>

donde React carga toda la aplicación.

### main.jsx

Es el punto de entrada de React.

Carga:

- React
- ReactDOM
- Bootstrap
- CSS
- App.jsx

### App.jsx

Organiza los componentes principales de EcoNet.

### Navbar.jsx

Contiene el nombre EcoNet y el menú de navegación.

### Presentacion.jsx

Contiene la sección "¿Qué es EcoNet?".

### Video.jsx

Contiene el video educativo.

### Lugares.jsx

Contiene el carrusel de Bootstrap.

Tiene exactamente tres lugares.

### Comunidades.jsx

Muestra las comunidades y permite agregar nuevas.

Los datos no se guardan en una base de datos.

### Footer.jsx

Contiene los datos de contacto y el formulario de comentarios.

### style.css

Contiene los estilos visuales de la página.

También contiene:

background-attachment: fixed;

para mantener fijo el fondo.

### script.js

Contiene funciones sencillas de JavaScript y DOM.

### package.json

Contiene las dependencias y comandos necesarios para ejecutar el proyecto.

## ¿Cómo agregar una comunidad?

Ir a:

Comunidades EcoNet

Completar:

- Nombre
- Descripción
- Actividad
- Enlace de contacto

Presionar:

Agregar comunidad

La nueva tarjeta aparecerá automáticamente.

## ¿Dónde cambiar las imágenes?

Las imágenes están en:

public/img/

Para cambiar el fondo:

public/img/bosque.jpg

Para cambiar los lugares:

public/img/lugar1.jpg
public/img/lugar2.jpg
public/img/lugar3.jpg

## ¿Dónde cambiar los datos de contacto?

Editar:

src/components/Footer.jsx

Buscar:

[Agregar Instagram]
[Agregar WhatsApp]
[Agregar Email]
[Agregar ubicación]

y reemplazarlos por los datos correspondientes.

## ¿Dónde se utiliza Bootstrap?

Bootstrap se utiliza principalmente para:

- Navbar responsive
- Carrusel
- Grid
- Cards
- Formularios
- Botones
- Responsive

## ¿Dónde se utiliza JavaScript?

JavaScript se utiliza para:

- Validar formularios
- Mostrar mensajes
- Limpiar formularios
- Modificar elementos HTML
- Agregar comunidades

## ¿Dónde se utiliza DOM?

Se utiliza mediante funciones como:

document.getElementById()

document.querySelector()

textContent

setAttribute()

## ¿Dónde se utiliza React?

React se utiliza para crear:

- Navbar
- Presentación
- Video
- Lugares
- Comunidades
- Footer

También se utiliza useState() para manejar las comunidades y los formularios.

## Importante

Las comunidades se almacenan solamente mientras la página está abierta.

Si se recarga la página, las comunidades agregadas manualmente desaparecen.

Esto ocurre porque el proyecto no utiliza una base de datos.

## Ejecutar el proyecto

npm install

npm run dev