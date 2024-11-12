const { response } = require('express')


const getMatches = async( req, res = response ) => {

    const { puuid, count } = req.query
    
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${ puuid }/ids?start=0&count=${ count }&api_key=${ process.env.RGAPI }`
    const data = await fetch( url )
    const matches = await data.json()

    res.json({
        
        matches: matches,
        msg: 'Matches obtained',
        ok: true,

    })
}

module.exports = getMatches