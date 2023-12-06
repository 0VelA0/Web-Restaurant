import {NewUserEntry, generos} from  './types'

const parsenombre = (name: any): string => {
    if(!isString(name)){
        throw new Error('Incorrect or missing name')
    }

    return name
}

const parsegenero = (genero: any): generos => {
    if (!isString(genero) || !isGenero(genero)){
        throw new Error('Incorrect or mising gender')
    }

    return genero
}

const parseedad = (edad: any): number =>{
    if (!isNumber(edad)){
        throw new Error('Incorrect or missing age')
    }

    return edad
}

const parsecorreo = (correo: any): string => {
    if(!isString(correo)){
        throw new Error('Incorrect or missing mail')
    }

    return correo
}  

const parsecontraseña = (contraseñareq: any): string => {
    if(!isString(contraseñareq)){
        throw new Error('Incorrect or missing password')
    }

    return contraseñareq
}

const parsefdc = (fdc: any): string => {
    if(!isDate(fdc) || !isString(fdc)){
        throw new Error('Incorrect or missing date')
    }

    return fdc
} 

const parseuc = (uc: any): string => {
    if(!isString(uc)){
        throw new Error('Incorrect or missing User')
    }

    return uc
}

const parsefda = (fda: any): string => {
    if(!isString(fda) || !isDate(fda)){
        throw new Error('Incorrect or missing Date')
    }

    return fda
}

const parseuda = (uda: any): string => {
    if(!isString(uda)){
        throw new Error('Incorrect or missing user')
    }

    return uda
}

const parseactivo = (active: boolean): boolean => {
    
}

const isGenero = (gen: any): boolean => {
    return Object.values(generos).includes(gen)
} 

const isNumber = (number: number): boolean => {
    return typeof number === 'number'
}

const isString = (string: string): boolean => {
    return typeof string === 'string'
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const toNewUserEntry = (object: any): NewUserEntry => {
    const newEntry: NewUserEntry = {
        nombre: parsenombre(object.nombre),
        genero: parsegenero(object.genero),
        edad: parseedad(object.edad),
        correoelectronico: parsecorreo(object.correoelectronico),
        contraseña: parsecontraseña(object.contraseña),
        fechadecreacion: parsefdc(object.fechadecreacion),
        usuariodecreacion: parseuc(object.usuariodecreacion),
        fechadeactualizacion: parsefda(object.fechadeactualizacion),
        usuariodeactualizacion: parseuda(object.usuariodeactualizacion),
        activo: parseactivo(object.activo)
    }

    return newEntry
}

export default toNewUserEntry