var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

export default new Schema({  
  user: {
      id: String
  },
  answer: {
      id: String
  }
});