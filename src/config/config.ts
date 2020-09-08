import dotenv from 'dotenv';
import fs from 'fs';

export enum Env {
  Production = 'prod',
  Development = 'dev',
}
const DEFAULT_PORT = 3000;

if (fs.existsSync('.env')) {
  dotenv.config({path: '.env'});
}

const config = {
  env: (process.env.NODE_ENV as Env) || Env.Development,
  port: process.env.PORT || DEFAULT_PORT,
};

export default config;
