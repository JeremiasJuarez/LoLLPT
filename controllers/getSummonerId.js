const { response } = require('express')


const getSummonerId = async( req, res = response ) => {

    const { puuid } = req.query
    
    const url = `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${ puuid }?api_key=${ process.env.RGAPI }`
    const data = await fetch( url )
    const summonerLong = await data.json()

    res.json({
        summonerLong: summonerLong,
        summonerId: 'summonerId obtained',
        ok: true,

    })
}

module.exports = getSummonerId