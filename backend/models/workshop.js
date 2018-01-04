const db = require('mongoose');
const Schema = db.Schema

const schema = new Schema({
  title: { type: String, required: true },
  author: {    
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true } 
  },
  date: { type: Date, required: true },
  duration: { type: Number, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true, enum: ['front', 'back', 'qa'] },
  attendants: [{
    firstName: String,
    lastName: String,
    email: String
  }]
}, { collection: 'workshop' })

const Workshop = db.model('workshop', schema)

module.exports = {
  get (params) {
    return Workshop.find(params, (err, data) => {
      if (err) throw err
      else console.log("Retrieved data", data)
    })
  },
  add (obj, callback) {
    const newWorkshop = Workshop(obj)
    newWorkshop.save(err => {
      if (err) throw err
      else { 
        console.log("Workshop created", obj)
        callback ? callback() : null
      }
    })
  }
}