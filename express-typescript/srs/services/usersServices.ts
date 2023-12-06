import { UsuarioEntry, NewUserEntry } from '../types'
import diaryData from './usuarios.json'

const usuarios: UsuarioEntry[] = diaryData as UsuarioEntry[]

export const getEntries = (): UsuarioEntry[] => usuarios
export const addUser = (newuserEntry: NewUserEntry): UsuarioEntry => {
  const newuser = {
    id: Math.max(...usuarios.map(d => d.id)) + 1,
    ...newuserEntry
  }
  usuarios.push(newuser)
  return newuser
}
export const findbyid = (id: number): UsuarioEntry | undefined => {
  const entry = usuarios.find(d => d.id === id)
  return entry
}

export const deletebyid = (id: number): boolean => {
  const usuarioIndex = usuarios.findIndex(u => u.id === id)

  if (usuarioIndex !== -1) {
    usuarios.splice(usuarioIndex, 1)
    return true // Se eliminó el usuario correctamente
  }

  return false // El usuario no fue encontrado
}

export const updatebyid = (id: number, updatedData: Partial<UsuarioEntry>): UsuarioEntry | undefined => {
  const user = findbyid(id)

  if (user != null) {
    Object.assign(user, updatedData)

    return user
  }

  return undefined // El usuario no fue encontrado
}
