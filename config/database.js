const mongoose = require('mongoose');


// importing dotenv to link .env with process
require("dotenv").config();


// method to connect with mongodb
// const dbConnnect = ()=>{
//     mongoose.connect(process.env.DATABASE_URL,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true
//     })
//     .then(()=>console.log('db connection successfull...'))
//     .catch((error)=>{console.log('issue with db connection');
//         console.error(error.message);
//         process.exit(1);

// })
// }

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log('DB connection successful...'))
        .catch((error) => {
            console.log('Issue with DB connection');
            console.error(error.message);
            process.exit(1);
        });
}

module.exports = dbConnect;