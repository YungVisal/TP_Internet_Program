const { readUser, writeUser} = require('../db/db');
const login = async (email, password) =>{
    const users = await readUser();
    
    // chec if user is existed
    var a = 0;
    if(! email || password){
        return{
            "sucess": "false",
            "message": "Please complete your login!"
        }
    }else{
        for(let user in users){
            if(users[user].email){
                if(users[user].password == password){
                    a=1;
                }
            }
        }
    }
    if(a==0){
        return{
            "sucess": "false",
            "message": "Incorrect Email and Password"

        }
    }else{
        return{
            "sucess": "true",
            "message": "You are login sucess!"
        }
    }
    // check if password is match

    // save to db
    // return user's information
    
}
module.exports = {
    login,
}