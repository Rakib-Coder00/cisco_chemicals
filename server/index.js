//initializing Express Server ==>
import express from 'express'
import cors from 'cors'
import colors from 'colors'
import dotenv from 'dotenv'
const app = express()
dotenv.config()



const port = process.env.PORT || 5000


//middleware =>
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Server is running...✔️')
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`.yellow.bold);
})