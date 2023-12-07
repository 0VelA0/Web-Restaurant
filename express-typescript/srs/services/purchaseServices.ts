import { NewPurchaseEntry, PurchaseEntry } from '../types'
import PurchaseData from './purchase.json'
import fs from 'fs'

const compra: PurchaseEntry[] = PurchaseData as PurchaseEntry[]
export const getEntries = (): PurchaseEntry[] => compra

export const addProduct = (newuserEntry: NewPurchaseEntry): PurchaseEntry => {
    const newpurchase = {
      id: Math.max(...compra.map(d => d.id)) + 1,
      ...newuserEntry
    }
    compra.push(newpurchase)
    return newpurchase
}

export const findbyid = (id: number): PurchaseEntry | undefined => {
    const entry = compra.find(d => d.id === id)
    return entry
}

export const deletebyid = (id: number): boolean => {
    const compraIndex = compra.findIndex(u => u.id === id)
  
    if (compraIndex !== -1) {
      compra.splice(compraIndex, 1)
      return true // Se eliminó la compra correctamente
    }
  
    return false // La compra no fue encontrada
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

export const updatebyid = async (id: number, updatedData: Partial<PurchaseEntry>): Promise<PurchaseEntry | undefined> => {
    const purchase = findbyid(id);
  
    if (purchase) {
      // Actualizar los campos proporcionados en updatedData
      Object.assign(purchase, updatedData);
  
      try {
        // Guardar el array actualizado de compras en el archivo JSON
        await writeFileAsync('purchase.json', JSON.stringify(compra, null, 2));
      } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error);
        // Puedes manejar el error según tus necesidades
      }
  
      return purchase;
    }
  
    return undefined; // La compra no fue encontrada
};
  