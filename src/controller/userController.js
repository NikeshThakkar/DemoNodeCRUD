const User = require('../model/UserModel');

// get user by Id
const getUserById = async(req, res) => {
    try{
        let user;
        let id = req.params.id;
       if(id) {
         user = await User.findByPk(id);
         if(!user){
            return res.status(404).send({
                error: 'No matching user details found!',
              });
        }
       delete user.dataValues.password
        res.status(200).send({
            success: true,
            message:'get user by id successfully!',
            res: user.dataValues
            });        
        } else {
            res.status(403).send({
                success: false,
                error: 'something went wrong ',
              });
        }
    } catch(error) {
        res.status(500).send({
            success: false,
            error: error.message,
            stack: error.stack,
          });
    }
};

// get All users
const getAllUsers = async(req, res) => {
    try{
        let users;
       users = await User.findAll({
        where: {
            isActive : true
        }
       });
       if(!users) {
        return res.status(404).send({
            error: 'No matching user details found!',
          });
       }
       users = users.map((val) => {
        delete val.dataValues.password
         return {
            ...val
         }
       })
       res.status(200).send({
        success: true,
        message:'get all users successfully!',
        res: users
        });
    } catch(error) {
        res.status(500).send({
            success: false,
            error: error.message,
            stack: error.stack,
          });
    }
};

//update User
const updateUser = async(req,res) =>{
    try{
        let id = req.params.id;
        const user = await User.findByPk(id);
          if(!user){
            return res.status(404).send({
                error: 'No matching user details found!',
              });
          }
           let newUser = await User.update({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: user.password
           }, {where : { id: id }});
        if(newUser) {
            res.status(200).send({
                success: true,
                message:'update user successfully!',
                res: newUser
            });   
        }

    }catch(error){
        res.status(500).send({
            success: false,
            error: error.message,
            stack: error.stack,
          });
    }
}
module.exports = { getUserById, getAllUsers, updateUser };
