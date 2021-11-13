require('dotenv').config()
const express = require('express')
const db = require('./DB/db')

const app = express()

const cors = require("cors");
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
    db.DB_Init() //open connection to mongodb
})

app.get('/stats/set', async (req, res) => {
    // input validation
    if(!req.query.steps || !req.query.lookup || !req.query.side) {
        res.status(400).send('wrong params')
        return
    }

    const steps = parseInt(req.query.steps)
    const lookup = parseInt(req.query.lookup)
    if(isNaN(steps) || isNaN(lookup)) {
        res.status(400).send('steps,lookup should be of type integer')
        return
    }

    const side = req.query.side
    if(side !== 'wolfes' && side !== 'rabbit') {
        res.status(400).send('side should be wolfes or rabbit')
        return
    }

    //real code
    res.status(200).send(await db.DB_SwapStats(lookup, steps, side) ? 'swapped stats' : 'old stats remaining')
})

app.get('/stats', async (req, res) => {
    // input validation
    if(!req.query.lookup || !req.query.side) {
        res.status(400).send('wrong params')
        return
    }

    const lookup = parseInt(req.query.lookup)
    if(isNaN(lookup)) {
        res.status(400).send('lookup should be of type integer')
        return
    }

    const side = parseInt(req.query.side)
    if(side !== 'wolfes' & side !== 'rabbit') {
        res.status(400).send('side should be wolfes or rabbit')
        return
    }

    //real code
    const best_stat = await db.DB_GetStats(lookup, side)
    res.status(200).send(`${best_stat}`)
})