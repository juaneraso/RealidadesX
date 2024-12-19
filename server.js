import express from 'express';
import { createRequestHandler } from '@remix-run/express';

const app = express();

// Servir archivos estáticos
app.use(express.static('./build/client'));

// Manejar las rutas con Remix
app.all(
  '*',
  createRequestHandler({
    build: require('./build/server/index.js'),
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
