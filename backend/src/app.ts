
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import schema from '../src/schema';

import './ultils/db';

dotenv.config();
const { ApolloServer, gql } = require("apollo-server-express")

const app = express();


const server = new ApolloServer({
  schema,
  introspection: true,
  tracing: true,
  path: '/',
})

server.applyMiddleware({
  app,
  path: '/',
  onHealthCheck: () =>
      // eslint-disable-next-line no-undef
      new Promise((resolve, reject) => {
          if (mongoose.connection.readyState > 0) {
              resolve();
          } else {
              reject();
          }
      }),
});
app.listen({ port: process.env.PORT }, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT}`);
  console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`);
});