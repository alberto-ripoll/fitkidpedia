import axiosClient from "../../../../lib/axios-client";

export class ElementsService {
  async getElement(id: string): Promise<any> {

    let elemento = await axiosClient.get("/ejercicios/elemento/" + id);
    return elemento.data.data;
  }

  async getElementsByCategory(category: string): Promise<any> {
    let elementos = await axiosClient.get(`/ejercicios/${category}`);
    return elementos.data.data;
  }

  async getRelatedElements(id: string): Promise<any> {
    let elementos = await axiosClient.get(`/ejercicios/relacionados/${id}`);
    return elementos.data.data;
  }

}