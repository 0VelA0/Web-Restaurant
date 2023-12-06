export enum generos {
  Hombre = 'Hombre',
  Mujer = 'Mujer'
}
// export type edades = `${number}${number}`
// export type fechatiempoexacto = Date()

export interface UsuarioEntry {
  id: number
  nombre: string
  genero: generos
  edad: number
  correoelectronico: string
  contraseña: string
  fechadecreacion: string
  usuariodecreacion: string
  fechadeactualizacion: string
  usuariodeactualizacion: string
  activo: boolean
}

export type NewUserEntry = Omit<UsuarioEntry, 'id'>
