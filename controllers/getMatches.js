const { response } = require('express')


const getMatches = async( req, res = response ) => {


    res.json({
        // puuid: data,
        puuid: 'Arr Matches obtenido',
        ok: true,

    })
}

module.exports = getMatches