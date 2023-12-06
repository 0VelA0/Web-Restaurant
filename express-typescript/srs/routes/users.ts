import express from 'express'
import * as usersServices from '../services/usersServices'
import toNewUserEntry from '../utils'

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
  try {
    const NewUserEntry = toNewUserEntry(req.body)

    const AddedUserEntry = usersServices.addUser(NewUserEntry)

    res.json(AddedUserEntry)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default router
