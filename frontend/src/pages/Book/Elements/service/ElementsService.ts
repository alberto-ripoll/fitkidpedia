import axiosClient from "../../../../lib/axios-client";

export class ElementsService {
  async getElement(id: string): Promise<any> {

    let elemento = await axiosClient.get("/elemento/" + id);
    return elemento.data.data;
  }

  async getElementsByCategory(category: string): Promise<any> {
    let elementos = await axiosClient.get(`/elementos/${category}`);
    return elementos.data.data;
  }

  async getRelatedElements(id: string): Promise<any> {
    let elementos = await axiosClient.get(`/elementos-relacionados/${id}`);
    return elementos.data.data;
  }

}