const { response } = require('express')


const getSummonerId = async( req, res = response ) => {

    const { puuid } = req.query
    
    try {
        
        const url = `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${ puuid }?api_key=${ process.env.RGAPI }`
        const data = await fetch( url )
        const summonerLong = await data.json()
        
        if (summonerLong.status?.status_code === 400) {
            throw new Error(summonerLong.status.message);
        }

        res.json({
            summonerLong: summonerLong,
            msg: 'summonerId obtained',
            ok: true,
        })


    } catch (error) {
        res.json({
            riotError: error.message,
            ok: false,
            msg: 'summonerId not found - Invalid or non-existent puuid',
        });
    }


}

module.exports = getSummonerId