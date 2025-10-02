import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

async function main() {
    app.listen(4200, ()=>{
        console.log(`Server run in port 4200`)
    })
}

main()