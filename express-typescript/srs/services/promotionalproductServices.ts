import { NewPromotionalProductEntry, PromotionalProductEntry } from '../types'
import PromotionalProductData from './promotionalproduct.json'
import fs from 'fs'

const promociones: PromotionalProductEntry[] = PromotionalProductData as PromotionalProductEntry[]
export const getEntries = (): PromotionalProductEntry[] => promociones

export const addProduct = (newuserEntry: NewPromotionalProductEntry): PromotionalProductEntry => {
    const newpromotion = {
      id: Math.max(...promociones.map(d => d.id)) + 1,
      ...newuserEntry
    }
    promociones.push(newpromotion)
    return newpromotion
}

export const findbyid = (id: number): PromotionalProductEntry | undefined => {
    const entry = promociones.find(d => d.id === id)
    return entry
}

export const deletebyid = (id: number): boolean => {
    const promotionIndex = promociones.findIndex(u => u.id === id)
  
    if (promotionIndex !== -1) {
      promociones.splice(promotionIndex, 1)
      return true // Se eliminó el producto en promocion correctamente
    }
  
    return false // El producto en promocion no fue encontrado
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

export const updatebyid = async (id: number, updatedData: Partial<PromotionalProductEntry>): Promise<PromotionalProductEntry | undefined> => {
    const promotion = findbyid(id);
  
    if (promotion) {
      // Actualizar los campos proporcionados en updatedData
      Object.assign(promotion, updatedData);
  
      try {
        // Guardar el array actualizado de productos en promocion en el archivo JSON
        await writeFileAsync('promotionalproduct.json', JSON.stringify(promociones, null, 2));
      } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error);
        // Puedes manejar el error según tus necesidades
      }
  
      return promotion;
    }
  
    return undefined; // El producto en promocion no fue encontrado
};
  