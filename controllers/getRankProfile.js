const { response } = require('express')


const getRankProfile = async( req, res = response ) => {

    const { summonerId } = req.query
    
    const url = `https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${ summonerId }?api_key=${ process.env.RGAPI }`
    const data = await fetch( url )
    const rankProfile = await data.json()

    res.json({
        rankProfile: rankProfile,
        msg: 'rankProfile obtained',
        ok: true,

    })
}

module.exports = getRankProfile