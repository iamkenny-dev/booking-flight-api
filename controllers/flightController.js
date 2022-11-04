const { Users } = require("../models/Flight.js");
const { v4: uuid } = require("uuid");

// Get all Flight
exports.getUsers = async(req, res) => {
    try {
        const users = Users;
        res.status(200).json({
            message: "All users",
            users: users
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

// Get single Flight
exports.getUser = async(req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);

        res.status(200).json({
            message: "User found",
            user
        });
    } catch (error) {

    }
}

// Add/Book Flight
exports.createUser = async(req, res) => {
    try {
        const { title, time, price, date } = await req.body;

        const newUser = {
            id: uuid(),
            title,
            time,
            price,
            date
        };


        Users.push(newUser);

        res.status(201).json({
            message: "User created",
            newUser,
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Update/Edit Flight

exports.updateUser = async (req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);
        const { title, time, price, date } = await req.body;
        user.title = title;
        // user.time = time;
        res.status(200).json({
            message: "User updated",
            user,
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Delete Flight

exports.deleteUser = async (req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id = id);
        Users.splice(Users.indexOf(user), 1);
        res.status(200).json({
            message: "User deleted successfully",
            user
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// exports.example = (req, res) => {
//     console.log("example")
//     res.send("Flight example")
// }


