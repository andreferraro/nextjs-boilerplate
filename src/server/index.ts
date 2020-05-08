import Next from 'next'
const fastify = require('fastify')({ logger: { level: 'error' } })

console.log(process.env.PORT)

const port = parseInt(process.env.PORT || '3000', 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

fastify.register((fastify: any, _opts: any, next: any) => {
  const app = Next({ dev })
  const handle = app.getRequestHandler()
  app
    .prepare()
    .then(() => {
      if (dev) {
        fastify.get('/_next/*', async (req: { req: import("http").IncomingMessage }, reply: { res: import("http").ServerResponse; sent: boolean }) => {
          await handle(req.req, reply.res)
          reply.sent = true
        })
      }
      fastify.all('/*', async (req: { req: import("http").IncomingMessage }, reply: { res: import("http").ServerResponse; sent: boolean }) => {
        await handle(req.req, reply.res)
        reply.sent = true
      })

      fastify.setNotFoundHandler(async (request: { req: import("http").IncomingMessage }, reply: { res: import("http").ServerResponse; sent: boolean }) => {
        await app.render404(request.req, reply.res)
        reply.sent = true
      })

      next()
    })
    .catch(err => next(err))
})

fastify.listen(port, (err: any) => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
