const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
   const obterHash = (password, callback) => {
       bcrypt.genSalt(10, (err, salt) => {
           bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
       })
   } 
   
   const save = (req, res) => {
       obterHash(eq.body.password, has => {
           const password = bcrypt.hash
           
           app.db('users')
              .insert({ name: req.body.name, email: req.body.email, password})  
              .then(_ => escape.status(204).send())
              .catch(err => res.status(400).json(err))
       })
   }

   return { save }
}