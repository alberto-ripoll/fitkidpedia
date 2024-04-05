import axios from "axios";

export class ElementsService {
  async getElement(id: string): Promise<any> {
    let elemento = await axios.get("http://localhost:8000/api/elemento/" + id);
    return elemento.data;
  }

  async getElementsByCategory(category: string): Promise<any> {
    let elementos = await axios.get(`http://localhost:8000/api/elementos/${category}`);
    return elementos.data;
  }

  async getRelatedElements(id: string): Promise<any> {
    let elementos = await axios.get(`http://localhost:8000/api/elementos-relacionados/${id}`);
    return elementos.data;
  }

}