'use strict';

// Mock user data
const users = [
  {
    id: 1,
    firstName: 'Satoshi',
    lastName: 'Nakamoto',
    email: 'satoshi@nakamoto.com',
    password: 'craigwright' // In a real application, passwords should be hashed
  },
  {
    id: 2,
    firstName: 'Bob',
    lastName: 'Allison',
    email: 'bob@allison.com',
    password: 'Bob123!!!'
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Robertson',
    email: 'alice@robertson.com',
    password: 'mykidsbirthday1!'
  }
];


// get all users

function getAllUsers() {
    return users.map( user => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }))
}

module.exports = async function (fastify, opts) {

    fastify.get('/users', async function (request, reply) {
        return getAllUsers()
    })

    fastify.get('/users/:id', async function (request, reply) {
        const userId = parseInt(request.params.id)
        const user = users.find(user => user.id === userId)

        if (!user) {
            reply.code(404).send({message: 'User not found, dummy!'})
        } else {
            return {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        }
    })

    fastify.get('/users/:id/first-name', async function (request, reply) {
        const userId = parseInt(request.params.id)
        const user = users.find(user => user.id === userId)

        if (!user) {
            reply.code(404).send({message: 'haha no first names 4 u'})
        } else {
            return {firstName: user.firstName}
        }
    })


} //end