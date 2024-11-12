const { response } = require('express')


const getRankProfile = async( req, res = response ) => {

    res.json({
        // puuid: data,
        puuid: 'rankProfile obtenido',
        ok: true,

    })
}

module.exports = getRankProfile