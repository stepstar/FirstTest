const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name: String,
    age: Number,
    health: String,
    hobby: String
}
const Cat = mongoose.model('Cat', schema);

/** 
const kitty = new Cat({ name1: 'testCat' });
kitty.save().then(() => console.log('testmeow'));
const kitty1 = new Cat({name:"cat2",age:2,health:"so-so"});
kitty1.save().then(() => console.log('new schema write'));
*/
Cat.find({name:"cat2"},(error,data)=>{console.log(data)});
console.log(666);