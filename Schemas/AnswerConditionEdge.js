var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

export default new Schema({  
  answer: {
      id: String
  },
  condition: {
      id: String
  }
});