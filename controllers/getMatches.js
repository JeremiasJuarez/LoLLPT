const { response } = require('express')


const getMatches = async( req, res = response ) => {

    const { puuid, count } = req.query
    
    try {
        
        const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${ puuid }/ids?start=0&count=${ count }&api_key=${ process.env.RGAPI }`
        const data = await fetch( url )
        const matches = await data.json()

        if( matches.length === 0 ){
            throw new Error('Summoner has not played any games recently')
        }

        if (matches.status?.status_code === 400) {
            throw new Error(matches.status.message);
        }

        res.json({
            matches: matches,
            msg: 'Matches obtained',
            ok: true,
        })
    

    } catch (error) {

        if( error.message === 'Summoner has not played any games recently'){
            res.status(404).json({
                error: error.message,
                ok: false,
                msg: 'Summoner exist but has not played any games recently'
            })
        }

        if( error.message === `Bad Request - Exception decrypting ${puuid}`){

            res.status(404).json({
                error: error.message,
                ok: false,
                msg: 'matches not found - Invalid or non-existent puuid',
            });
        }

    }


}

module.exports = getMatches