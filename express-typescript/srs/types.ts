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

export interface ProductEntry{
  id: number
  nombre: string
  descripcion: string
  precio: number
  categoria: string
  fabricante: string
  cantidadenexistencia: number
  unidaddemedidad: string
  fechadecreacion: string
  usuariodecreacion: string
  fechadeactualizacion: string
  usuariodeactualizacion: string
  activo: boolean
  ingredientes: string
  vegano: boolean
}

export interface PromotionalProductEntry{
  id: number
  nombre: string
  descripcion: string
  endescuento: boolean
  descuento: number
  precio: number
  precioenpromocion: number
  fechadeiniciodelapromocion: string
  fechadefinalizaciondelapromocion: string
  activo: boolean
}

export interface PurchaseEntry{
  id: number
  descripcion: string
  nombredelcliente: string
  preciototal: number
  totaldeproductos: number
  fechadecreacion: string
  usuariodecreacion: string
  fechadeactualizacion: string
  usuariodeactualizacion: string
  activo: boolean
  detalladodecompra: detalladoCompra[]
}
interface detalladoCompra {
  id: number
  producto: string
  orden: number
  usuariodecreacion: string
  fechadeactualizacion: string
}

export type NewUserEntry = Omit<UsuarioEntry, 'id'>
export type NewProductEntry = Omit<ProductEntry, 'id'>
export type NewPromotionalProductEntry = Omit<PromotionalProductEntry, 'id'>
export type NewPurchaseEntry = Omit<PurchaseEntry, 'id'>


