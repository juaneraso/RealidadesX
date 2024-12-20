// const express = require('express');
// const { createRequestHandler } = require('@remix-run/express');

// const app = express();

// // Servir archivos estáticos
// app.use(express.static('build/client'));

// // Manejar las rutas con Remix
// app.all('*', async (req, res, next) => {
//   const build = await import('./build/server/index.js');
//   const handler = createRequestHandler({
//     build: build.default,
//   });
//   return handler(req, res, next);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// import express from 'express';
// import { createRequestHandler } from '@remix-run/express';

// const app = express();

// // Servir archivos estáticos
// app.use(express.static('./build/client'));

// // Manejar las rutas con Remix
// app.all('*', async (req, res, next) => {
//   const handler = createRequestHandler({
//     build: await import('./build/server/index.js').then(module => module.default),
//   });
//   return handler(req, res, next);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// import express from 'express';
// import { createRequestHandler } from '@remix-run/express';

// const app = express();

// // Servir archivos estáticos
// app.use(express.static('./build/client'));

// app.all('*', async (req, res, next) => {
//   try {
//     const buildModule = await import('./build/server/index.js');
//     console.log('Build module raw content:', buildModule); // Inspeccionamos la exportación
//     const build = buildModule.default;

//     if (!build) {
//       throw new Error('Build is undefined or null.');
//     }

//     // Agregar modo si no existe
//     if (!build.mode) {
//       build.mode = process.env.NODE_ENV || 'development';
//     }

//     const handler = createRequestHandler({ build });
//     return handler(req, res, next);
//   } catch (error) {
//     console.error('Error handling request:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
import express from 'express';
import { createRequestHandler } from '@remix-run/express';

const app = express();

// Servir archivos estáticos
app.use(express.static('./build/client'));

// Manejar las rutas con Remix
app.all('*', async (req, res, next) => {
  try {
    // Intentamos importar correctamente el build
    const buildModule = await import('./build/server/index.js');
    console.log('Build module content:', buildModule); // Ver el contenido del módulo importado

    const build = buildModule.default;

    if (!build) {
      throw new Error('Build is undefined or null.');
    }

    // Si el modo no está definido, establecer uno por defecto
    if (!build.mode) {
      build.mode = 'development';
    }

    const handler = createRequestHandler({ build });
    return handler(req, res, next);
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
