import validateUser from './validate_User'
import validatelogin from './validatelogin'

import blog from '../models/db'

class Users {
   addUser(req,res) {
        
        const { error } = validateUser(req.body);
        
        if(error) return res.status(400).send(error.details[0].message);
    
        const user = {
            
            username : req.body.username,
            password : req.body.password
        };

        // const { username, password } = user;

        blog.users.push(user);

        res.json({'status': 201, 'message': 'user created succesfully','UserIdentification':user });
        
    }

    login (req, res) {
        
        const { error } = validatelogin(req.body);
        
        if(error) return res.status(400).send(error.details[0].message);
    
        let username = req.body.username
        let password = req.body.password

        let userIndex = blog.users.findIndex((user)  => user.username == username && user.password == password);

        let loggedUser = blog.users[userIndex];

        res.json({ 'status':200,
        'message':'successfully logged in',
        'username': loggedUser.username })
    }

    getallUsers (req,res){
        res.send(blog.users);
    };
}

export default Users = new Users()