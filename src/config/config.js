"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
var Env;
(function (Env) {
    Env["Production"] = "prod";
    Env["Development"] = "dev";
})(Env = exports.Env || (exports.Env = {}));
const DEFAULT_PORT = 3000;
if (fs_1.default.existsSync('.env')) {
    dotenv_1.default.config({ path: '.env' });
}
const config = {
    env: process.env.NODE_ENV || Env.Development,
    port: (process.env.PORT) || DEFAULT_PORT,
};
exports.default = config;
