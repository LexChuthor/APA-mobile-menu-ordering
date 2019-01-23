const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/restaurantExample"
);


const productSeed = [
    // {
    //     name: "rice",
    //     img: "https://static01.nyt.com/images/2018/02/21/dining/00RICEGUIDE8/00RICEGUIDE8-threeByTwoMediumAt2X.jpg",
    //     description: "white rice",
    //     price: 1
    // },
    {
        name: "beans",
        img: "https://www.kitchentreaty.com/wp-content/uploads/2015/09/supremely-delicious-black-beans-from-scratchsq-660x430.jpg",
        description: "black beans",
        price: 2
    }
]

const categorySeed = {
    name: "basics",
    img: "basics.com"
}

// db.Product
//     .remove({})
//     .then(() => db.Product.collection.insertMany(productSeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });

db.Product.create(productSeed)
    .then(function(dbProduct){
        console.log(dbProduct);
        return db.Category.findOneAndUpdate({}, {$push: {product: dbProduct[0]._id}}, {new: true});
    }).then(function(){
        console.log( "updated!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(0);
    });

// db.Category
//     .remove({})
//     .then(() => db.Category.collection.insertOne(categorySeed))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });
