const jwtToken = require("jsonwebtoken")

const home = (req, res)=>{
    const tokenString = req.headers.token;
    const token = tokenString.split(' ')[1];
    console.log("Token::", token);


    jwtToken.verify(token, "secretKey123", (err, decodedData)=>{
        if (err) {
            res.status(401).end("invalid")
        }else{
            res.status(201).json(decodedData)
        }
    })
}

const signin = (req, res)=>{
    const userData = req.body;

    if (userData.email === "nurmohammad0605@gmail.com" &&
        userData.password === "123456"
        ) 
        
        {
        const payload ={
            name:"Konok",
            email: "nurmohammad0605@gmail.com",
            roll: "10"
        };

        const token = jwtToken.sign(payload, "secretKey123");

        res.status(201).json({
            userToken: token
        })

    }else{
        res.status(401).end({
            status: "Unauthorized"
        })
}

}

module.exports={
    signin,
    home
}