var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });


var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})

var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
    name:"Mrs. Norris",
    age: 7,
    temperament:"Evil"
})

george.save(function(err, cat){
    if(err){
        console.log("Something went wrong");
    }else{
        console.log("We just saved a cat to the DB: ");
        console.log(cat);
    }
});