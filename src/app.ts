import 'dotenv/config'
import Fastify from 'fastify'
import { env } from './config/env'

const fastify = Fastify({
    logger: true,
})

fastify.get('/status', (_, response) => {
    response.status(200).send({ message: 'Server OK' })
})

fastify.listen({ port: env?.PORT }, () => {
    console.log(`port listening at ${env?.PORT}`)
})
