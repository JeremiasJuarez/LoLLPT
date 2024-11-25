const { response } = require('express')


const getMatches = async( req, res = response ) => {

    const { puuid, count } = req.query
    
    try {
        
        const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${ puuid }/ids?start=0&count=${ count }&api_key=${ process.env.RGAPI }`
        const data = await fetch( url )
        const matches = await data.json()

        
        if (data.status === 400) {
            throw new Error(matches.status?.message || 'Bad Request: Invalid data');
        }
        
        if (data.status === 404) {
            throw new Error(matches.status?.message || 'Not Found: Invalid or non-existent puuid');
        }
        
        if( matches.length === 0 ){
            return res.json({
                matches: matches,
                msg: 'Summoner has not played any games recently',
                ok: true,
            })
        }

        res.json({
            matches: matches,
            msg: 'Matches obtained',
            ok: true,
        })
    

    } catch (error) {

        res.status(404).json({
            riotError: error.message,
            ok: false,
            msg: 'Matches not found - Invalid or non-existent puuid',
        });

    }


}

module.exports = getMatches