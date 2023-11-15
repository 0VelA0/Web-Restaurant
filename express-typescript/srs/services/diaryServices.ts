import { UsuarioEntry } from '../types'
import diaryData from './usuarios.json'

const usuarios: UsuarioEntry[] = diaryData as UsuarioEntry[]

export const getEntries = (): UsuarioEntry[] => usuarios
export const addEntry = (): undefined => undefined