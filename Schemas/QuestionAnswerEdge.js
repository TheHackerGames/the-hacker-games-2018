var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

export default new Schema({  
  id: String,
  question: {
      id: String
  },
  answer: {
      id: String
  }
});
