
require('dotenv').config()

const MongoClient = require("mongodb").MongoClient
const mongoClient = new MongoClient(process.env.DATABASE_URL, { useUnifiedTopology: true })

//reference to database
let db_stats
let stats


module.exports = {
    DB_Init: async function() {
        await mongoClient.connect()
        db_stats = mongoClient.db(process.env.DB_STATS)
        stats = db_stats.collection('stats')
        console.log('connected to database')
    },


    DB_SwapStats: async function(lookup, steps, side) {
        best_stat = await stats.findOne({lookup: lookup, side: side});
        console.log(best_stat)

        if(best_stat === null) {
            stats.insertOne({lookup: lookup, steps: steps, side: side})
            return true
        }
        else if(steps < best_stat.steps) {
            stats.updateOne({ lookup: lookup, side: side }, { $set: { steps: steps } })
            return true
        }

        return false
    },


    DB_GetStats: async function(lookup, side) {
        const best_stat = await stats.findOne({lookup: lookup, side: side});
        return best_stat ? best_stat.steps : -1
    }
}