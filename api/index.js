/**
 * Vercel Serverless Function - Entry Point
 * 
 * This file is the main entry point for Vercel deployment.
 * It exports an Express app that handles all HTTP requests.
 */

const app = require('./vercel');

// Export untuk Vercel Serverless
module.exports = app;
module.exports.default = app;

// Handler export untuk kompatibilitas
const handler = async (req, res) => {
  return app(req, res);
};

module.exports.handler = handler;
