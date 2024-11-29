const { response } = require('express')


const getRankProfile = async( req, res = response ) => {

    const { summonerId, server } = req.query
    
    console.log( summonerId )
    console.log( server )

    try {
        const url = `https://${ server }.api.riotgames.com/lol/league/v4/entries/by-summoner/${ summonerId }?api_key=${ process.env.RGAPI }`
        const data = await fetch( url )
        const rankProfile = await data.json()
        
       if( !data.ok ){
        throw new Error('Error at fetching RIOT endpoint')
       }

       res.json({
        rankProfile: rankProfile,
        ok: true,
        msg: 'Rankprofile Obtained'
       })

    } catch (error) {
        res.status(404).json({
            riotError: error.message,
            ok: false,
            msg: 'Rankprofile not found - Invalid or non-existent summonerId',
        });
    }


}

module.exports = getRankProfile

//*U4ZlPbscYwuOUMIqSYcYjA7hEU5gJcx0l1f1guraEDtJuyU