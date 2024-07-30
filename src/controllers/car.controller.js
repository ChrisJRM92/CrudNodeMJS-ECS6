const catchError = require('../utils/catchError');
const Car = require('../models/car');

const getAll = catchError(async(req, res) => {
  const result = await Car.findAll() //select * from user
  return res.json(result)
});

const create = catchError(async(req, res) =>{
  const result = await Car.create(req.body)
  // consolelog(req.body)
  return res.status(200).json(result)
})


const getOne = catchError(async(req, res) =>{
  const id = req.params.id
  // const {id} = req.params
  const result = await Car.findByPk(id)
  return res.status(200).json(result)
})

const destroy = catchError(async(req, res) =>{
  const id = req.params.id
  // const {id} = req.params
  const result = await Car.destroy({ where: {id: id}})
  if (!result) return res.status(404).json("User not found")
  return res.sendStatus(204)
})

const update = catchError(async(req, res) =>{
  const {id} = req.params
  const car = await Car.update(
    req.body,
    {where: {id : id}, returning: true}
  )
  if (car[0] === 0 ) return res.sendStatus(404)
  return res.status(200).json(car[1][0])
})

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}