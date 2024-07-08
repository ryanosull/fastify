'use strict'

// import pino from 'pino';
// import { Logger } from 'pino';

// const logTest = pino()

// // const server = fastify({
// //   logger: logTest
// // })

// logTest.info('hello world')
// logTest.error('this is at error level  testeststestestestests')



// const logger: Logger = pino({
//     level: 'info' as const,
//     transport: {
//       target: 'pino-pretty',
//       options: {
//         colorize: true
//       }
//     }
//   });

module.exports = async function (fastify, opts) {
    fastify.get('/hello', async function (request, reply) {
        return {message: 'Hello, Buttface!'}
    })



} //end