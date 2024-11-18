const { response } = require('express')


const getPuuid = async( req, res = response ) => {

    const { gameName, tagLine } = req.query
    
    
    try {
        const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${process.env.RGAPI}`;
        const data = await fetch(url);
        const summoner = await data.json();
    
        if (summoner.status?.status_code === 404) {
            throw new Error(summoner.status.message);
        }
    
        res.json({
            summoner: summoner,
            msg: 'puuid obtained',
            ok: true,
        });
    
    } catch (error) {
        res.status(404).json({
            riotError: error.message,
            ok: false,
            msg: 'Summoner not found - invalid or non-existent gameName#tagLine',
        });
    }
    
}


module.exports = getPuuid