const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
    .get('/', controller.getUsers)
    .get("/:id", controller.getUser)
    .post("/", controller.createUser)
    .put("/:id", controller.updateUser)
    .delete("/:id", controller.deleteUser);

module.exports = router;

