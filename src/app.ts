import 'dotenv/config'
import Fastify from 'fastify'

const PORT = Number(process.env.PORT)

if (!PORT) {
    throw new Error('PORT NOT DEFINED.')
}

const fastify = Fastify({
    logger: true,
})

fastify.get('/status', (_, response) => {
    return response.status(200).send({
        message: 'Working',
    })
})

fastify.get('/', (_, response) => {
    return response.status(200).send({
        message: 'Working',
    })
})

fastify.listen({ port: PORT }, () => {
    console.log(`port listening at ${PORT}`)
})
