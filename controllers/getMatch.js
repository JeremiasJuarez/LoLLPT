const { response } = require('express')


const getMatch = async( req, res = response ) => {

    const { matchId } = req.query
    
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${ matchId }?api_key=${ process.env.RGAPI }`
    const data = await fetch( url )
    const match = await data.json()

    res.json({
        
        match: match,
        msg: 'Matches obtained',
        ok: true,

    })
}

module.exports = getMatch