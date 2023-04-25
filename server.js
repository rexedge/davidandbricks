const express = require('express')
const next = require('next')

const app = express()

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })

const publicHandler = express.static('public')

const defaultHandler = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
     app.use('/public', publicHandler)
     app.use(defaultHandler)
     app.listen(3000, err => {
          if (err) throw err
          console.log('> Ready on http://localhost:3000')
     })
})
