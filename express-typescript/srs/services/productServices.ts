import { NewProductEntry, ProductEntry } from '../types'
import ProductData from './product.json'
import fs from 'fs'

const productos: ProductEntry[] = ProductData as ProductEntry[]
export const getEntries = (): ProductEntry[] => productos

export const addProduct = (newuserEntry: NewProductEntry): ProductEntry => {
    const newproduct = {
      id: Math.max(...productos.map(d => d.id)) + 1,
      ...newuserEntry
    }
    productos.push(newproduct)
    return newproduct
}

export const findbyid = (id: number): ProductEntry | undefined => {
    const entry = productos.find(d => d.id === id)
    return entry
}

export const deletebyid = (id: number): boolean => {
    const productoIndex = productos.findIndex(u => u.id === id)
  
    if (productoIndex !== -1) {
      productos.splice(productoIndex, 1)
      return true // Se eliminó el producto correctamente
    }
  
    return false // El producto no fue encontrado
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

export const updatebyid = async (id: number, updatedData: Partial<ProductEntry>): Promise<ProductEntry | undefined> => {
    const product = findbyid(id);
  
    if (product) {
      // Actualizar los campos proporcionados en updatedData
      Object.assign(product, updatedData);
  
      try {
        // Guardar el array actualizado de productos en el archivo JSON
        await writeFileAsync('product.json', JSON.stringify(productos, null, 2));
      } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error);
        // Puedes manejar el error según tus necesidades
      }
  
      return product;
    }
  
    return undefined; // El producto no fue encontrado
};
  