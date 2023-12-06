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
