const { response } = require('express')


const getPuuid = async( req, res = response ) => {

    const { gameName, tagLine } = req.query
    
    const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${ gameName }/${ tagLine }?api_key=${ process.env.RGAPI }`
    const data = await fetch( url )
    const summoner = await data.json()

    res.json({
        summoner: summoner,
        puuid: 'puuid obtenido',
        ok: true,

    })
}

module.exports = getPuuid