import { Router } from 'express'

const authRouter = Router()

authRouter.get('/', (req, res) => {
  try {
    res.status(200).json({ Status: 'AUTH ENDPOINT OK', created: Date.now().toString(), version: '1.0.0' })
  }
  catch {
    res.status(500).json({ Status: 'AUTH ENDPOINT FAILURE', created: Date.now().toString(), version: '1.0.0' })
  }
})

export default authRouter
