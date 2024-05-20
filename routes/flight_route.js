const router = require('express').Router();
const { getAllFlight, createFlight, updateFlight, deleteFlight} = require('../controllers/flight_controller');


router.get("/", getAllFlight)
router.post("/", createFlight)
router.put("/", updateFlight)
router.delete("/", deleteFlight)


module.exports = router;