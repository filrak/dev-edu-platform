const db = require('mongoose')
const Schema = db.Schema

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastname: { type: String, required: true },
  role: { type: String, enum: ['user', 'leader', 'admin'], default: 'user'}
}, { collection: 'user' } )
