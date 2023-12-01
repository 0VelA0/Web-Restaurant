import express from 'express'
import * as usersServices from '../services/usersServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(usersServices.getEntries())
})

router.get('/:id', (req, res) => {
  const user = usersServices.findbyid(+req.params.id)

  return (user != null)
    ? res.send(user)
    : res.send(404)
})

router.post('/', (req, res) => {
  const { nombre, genero, edad, correoelectronico, contraseña, fechadecreacion, usuariodecreacion, fechadeactualizacion, usuariodeactualizacion, activo } = req.body

  const newuserEntry = usersServices.addUser({
    nombre,
    genero,
    edad,
    correoelectronico,
    contraseña,
    fechadecreacion,
    usuariodecreacion,
    fechadeactualizacion,
    usuariodeactualizacion,
    activo
  })

  res.json(newuserEntry)
})

export default router
