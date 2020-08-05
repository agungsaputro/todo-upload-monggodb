const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true });

const uploadSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  photo: String,
  description: String,
});

const UploadModel = mongoose.model("Upload", uploadSchema);

module.exports = UploadModel;
