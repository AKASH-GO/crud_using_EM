var Userdb = require('../model/model');

// create and save new user
exports.create = function (req, res){
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    // save user in the database
    user
        .save(user)
        .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error occurred while creating a create operation"
            });
        });
}

// retrieve and return all users / retrieve and return a single user
exports.find = function (req, res){
    Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error Occurred while retriving user information"})
        })
}

// Update a new identified user by user id
exports.update = function (req, res){

}

// Delete a user with specified user id in the request
exports.delete = function (req, res){

}