var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var quoteSchema = new Schema({
        name : String,
        quote : String
});

module.exports = mongoose.model('Quotes', quoteSchema);
