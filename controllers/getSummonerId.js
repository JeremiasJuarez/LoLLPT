const { response } = require('express')


const getSummonerId = async( req, res = response ) => {

    res.json({
        // puuid: data,
        puuid: 'summonerId obtenido',
        ok: true,

    })
}

module.exports = getSummonerId