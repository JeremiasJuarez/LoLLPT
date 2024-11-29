const { response } = require('express')


const getSummonerId = async( req, res = response ) => {

    const { server, puuid } = req.query
    
    try {
        
        const url = `https://${ server }.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${ puuid }?api_key=${ process.env.RGAPI }`
        const response = await fetch( url )
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.status?.message || `Error ${response.status}`);
        }

        const summonerLong = await response.json()

        res.json({
            summonerLong: summonerLong,
            msg: 'summonerId obtained',
            ok: true,
        })


    } catch (error) {
        res.status(404).json({
            riotError: error.message,
            ok: false,
            msg: 'summonerId not found - Invalid or non-existent puuid',
        });
    }


}

module.exports = getSummonerId