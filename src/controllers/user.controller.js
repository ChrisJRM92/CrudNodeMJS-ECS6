const catchError = require('../utils/catchError');
const User = require('../models/user');

const getAll = catchError(async(req, res) => {
  const result = await User.findAll() //select * from user
  return res.json(result)
});

const create = catchError(async(req, res) =>{
  const result = await User.create(req.body)
  // consolelog(req.body)
  return res.status(200).json(result)
})

const getOne = catchError(async(req, res) =>{
  const id = req.params.id
  // const {id} = req.params
  const result = await User.findByPk(id)
  return res.status(200).json(result)
})

const destroy = catchError(async(req, res) =>{
  const id = req.params.id
  // const {id} = req.params
  const result = await User.destroy({ where: {id: id}})
  if (!result) return res.status(404).json("User not found")
  return res.sendStatus(204)
})

// const update = catchError(async(req, res) =>{
//   const id = req.params
//   const user = await User.findByPk(id)
//   if (!user) return res.status(404).json("User not found")
//   const userUpdate = await user.update(req.body)
//   return res.status(200).json(userUpdate)
// })

const update = catchError(async(req, res) =>{
  const {id} = req.params
  const user = await User.update(
    req.body,
    {where: {id : id}, returning: true}
  )
  if (user[0] === 0 ) return res.sendStatus(404)
  return res.status(200).json(user[1][0])
})


module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}