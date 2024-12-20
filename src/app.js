import express from 'express'
import morgan from 'morgan'
import {config} from 'dotenv'

config()


import {createRoles} from './libs/initialSetup'


import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

const app = express()

createRoles()

app.use(express.json())
app.use(morgan('dev'))

app.use(productsRoutes)
app.use('/auth', authRoutes)
app.use(userRoutes)


export default app
