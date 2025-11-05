import { z } from 'zod'

const envSchema = z.object({
    NODE_ENV: z
        .enum(['development', 'production', 'test'])
        .default('development'),
    PORT: z.coerce.number().default(3333),
    DATABASE_URL: z.url(),
})

export type Env = z.infer<typeof envSchema>

const _env = envSchema.safeParse(process.env)

if (_env.error) {
    console.log(_env.error)
}

export const env = _env.data
