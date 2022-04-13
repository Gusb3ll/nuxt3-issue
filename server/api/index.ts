import express from 'express'

import authRouter from './routes/v1/auth'

const app = express()

app.use(express.json())

app.use('/v1/auth', authRouter)

app.use((req, res) => {
  try {
    res.status(200).json({ Status: 'API OK', created: Date.now().toString(), version: '1.0.0' })
  }
  catch {
    res.status(500).json({ Status: 'API FAILURE', created: Date.now().toString(), version: '1.0.0' })
  }
})

export default app
