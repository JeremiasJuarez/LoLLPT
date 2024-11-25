const { response } = require('express')


const getMatch = async( req, res = response ) => {

    const { matchId } = req.query
    
    try {
        
        const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${ matchId }?api_key=${ process.env.RGAPI }`
        const data = await fetch( url )
        const match = await data.json()
        
        if( data.status === 404 ){
            throw new Error( match.status?.message || 'Data not found - match file not found')
        }

        res.json({
            match: match,
            msg: 'Match obtained',
            ok: true,
        })
    
    } catch (error) {
        res.status(404).json({
            riotError: error.message,
            ok: false,
            msg: 'Match id invalid or non-existent'
        })
    }

}

module.exports = getMatch