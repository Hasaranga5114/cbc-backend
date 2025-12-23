import mongoose from 'mongoose';
const studentschema = mongoose.Schema({
    name: String,
    age: Number,
    gender: String
  })

  const Student = mongoose.model('Students', studentschema)

export default Student;

