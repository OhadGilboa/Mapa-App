const User=require('./schema/userSchema');
const jwt=require('jsonwebtoken');
const loginOperations={
    fetchUser(userObject,request,response){

        console.log('userObject received at fetchUser function', userObject);

        User.find({"email":userObject.email,"user_password":userObject.password},(err,content)=>{

            console.log('making the query for login...');
            if(err){
                console.log('inside if...');
                response.json({
                    status: 404,
                    responseText: 'some error occured while loggin you in !'
                })
            }

            else if(content && content.length>0){

                //create a jwt token here

                console.log('inside elseif...');
                let token=jwt.sign({email: userObject.email},"secretkey",{expiresIn: '300s'});
                console.log('token made is',token);
                response.json({
                    content,token
                });
            }

            else{
                console.log('inside else...');
                response.json({
                    status: 404,
                    responseText: 'some error occured while loggin you in !'
                })

            }
        })
    },
    registerUser: function (userObject,request, response){
        console.log('register userObject', userObject);
        let user=new User({
            email: userObject.email,
            first_name: userObject.first_name,
            last_name: userObject.last_name,
            pitch: userObject.pitch,
            user_password: userObject.user_password,
            user_status: userObject.user_status,
            gender: userObject.gender,
            picture: userObject.picture,
            latitude: userObject.latitude,
            longtitude: userObject.longtitude,
            mode: userObject.mode,
            usersInRange: userObject.usersInRange
        });
        console.log('creating user for saving');
        user.save(err=>{
            console.log('saving user');
            if(err){
                response.json({
                    status: 404,
                    responseText: 'could not register user'
                })
            }
            else{
                response.json({
                    status: 200,
                    responseText: 'successfully registered user...'
                })
            }
        })
    }
}

module.exports=loginOperations;