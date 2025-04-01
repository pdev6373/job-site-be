import 'dotenv/config';
require('express-async-errors');
import express from 'express';
import { RegisterRoutes } from '../public/routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJson from '../public/swagger.json';
import cors from 'cors';
import morgan from 'morgan';
import { ValidateError } from 'tsoa';
import { createServer } from 'http';

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('common'));

RegisterRoutes(app);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    if (err instanceof ValidateError)
      res.status(400).json({
        success: false,
        message: 'Validation Failed',
        errors: err.fields,
      });
    else
      res.status(500).json({
        success: false,
        message: err.message || 'Internal Server Error',
      });
  },
);

export { app, server };
