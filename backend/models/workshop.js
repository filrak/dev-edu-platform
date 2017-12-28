const db = require('mongoose');
const Schema = db.Schema

const schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
  duration: { type: Number, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true, enum: ['front', 'back', 'qa'] }
})

const Workshop = db.model('Workshop', schema)

module.exports = {
  get (params) {
    return Workshop.find(params, (err, data) => {
      if (err) throw err
      else console.log("Retrieved data", data)
    })
  },
  add (obj) {
    const newWorkshop = Workshop(obj)
    newWorkshop.save(err => {
      if (err) throw err
      else console.log("Workshop created", obj)
    })
  }
}