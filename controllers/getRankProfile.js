const { response } = require('express')


const getRankProfile = async( req, res = response ) => {

    const { summonerId } = req.query
    
    try {
        
        const url = `https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${ summonerId }?api_key=${ process.env.RGAPI }`
        const data = await fetch( url )
        const rankProfile = await data.json()
        
        if( rankProfile.length === 0 ){
            throw new Error('Summoner has not played any ranked games recently')
        }

        if (rankProfile.status?.status_code === 400) {
            throw new Error(rankProfile.status.message);
        }

        res.json({
            rankProfile: rankProfile,
            msg: 'rankProfile obtained',
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

module.exports = getRankProfile