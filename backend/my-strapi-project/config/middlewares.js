module.exports = [
  'strapi::errors',  // Ensure this exists
  'strapi::security',
  'strapi::cors',  // If you still want CORS, keep this but update its configuration
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

