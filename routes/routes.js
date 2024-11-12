const { Router } = require('express')
const router = Router()

//Controllers
const getPuuid = require('../controllers/getPuuid')
const getSummonerId = require('../controllers/getSummonerId')
const getRankProfile = require('../controllers/getRankProfile')
const getMatches = require('../controllers/getMatches')


//*peticion a /{gameName}/{tagInline} para obtener el puuid
router.get('/puuid', getPuuid )


//*peticion a byPuuid/{encryptedPuuid} con el puuid para obtener el summonerId
router.get('/id', getSummonerId )


//*peticion a by-summoner/{encryptedSummonerId} para obtener el perfil de ranked
router.get('/rankprofile', getRankProfile )


//*peticion a matches/bypuuid/{puuid}/ids para tomar array de los ultimos matchs con sus ids
//* [ LA2_8465456456, LA2_854654564, LA2_6854564564 ]

router.get('/matches', getMatches )


module.exports = router