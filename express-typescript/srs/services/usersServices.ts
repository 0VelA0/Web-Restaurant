import { UsuarioEntry, NewUserEntry } from '../types'
import UserData from './usuarios.json'
import fs from 'fs'

const usuarios: UsuarioEntry[] = UserData as UsuarioEntry[]

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

const writeFileAsync = (path: string, data: string, options: fs.WriteFileOptions = {}): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, options, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// ... (otras funciones)

export const updatebyid = async (id: number, updatedData: Partial<UsuarioEntry>): Promise<UsuarioEntry | undefined> => {
  const user = findbyid(id);

  if (user) {
    // Actualizar los campos proporcionados en updatedData
    Object.assign(user, updatedData);

    try {
      // Guardar el array actualizado de usuarios en el archivo JSON
      await writeFileAsync('usuarios.json', JSON.stringify(usuarios, null, 2));
    } catch (error) {
      console.error('Error al escribir en el archivo JSON:', error);
      // Puedes manejar el error según tus necesidades
    }

    return user;
  }

  return undefined; // El usuario no fue encontrado
};
