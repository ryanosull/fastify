'use strict'

const path = require('node:path')
const AutoLoad = require('@fastify/autoload')

// Pass --options via CLI arguments in command to enable these options.
const options = {}

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}

module.exports.options = options


///////////////////////////////////////////////////////////////////

// 'use strict'

// const path = require('node:path')
// const AutoLoad = require('@fastify/autoload')

// // Determine the current environment
// const environment = process.env.NODE_ENV || 'development'

// // Define logger configuration for different environments
// const envToLogger = {
//   development: {
//     transport: {
//       target: 'pino-pretty',
//       options: {
//         translateTime: 'HH:MM:ss Z',
//         ignore: 'pid,hostname',
//       },
//     },
//   },
//   production: true,
//   test: false,
// }

// // Create Fastify instance with appropriate logger configuration
// const fastify = require('fastify')({
//   logger: envToLogger[environment] ?? true // defaults to true if no entry matches in the map
// })

// // Existing code for registering plugins and routes
// fastify.register(AutoLoad, {
//   dir: path.join(__dirname, 'plugins'),
//   options: Object.assign({}, fastify.initialConfig)
// })

// fastify.register(AutoLoad, {
//   dir: path.join(__dirname, 'routes'),
//   options: Object.assign({}, fastify.initialConfig)
// })

// module.exports = fastify