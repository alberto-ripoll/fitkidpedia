import axiosClient from "../../lib/axios-client";

export class ChatBotApi {

  async preguntar(pregunta: string): Promise<any> {
    let respuesta = await axiosClient.post("/chatbot/ask/", { pregunta: pregunta });
    console.log("Respuesta del chatbot:", respuesta.data.data);
    return respuesta.data.data;
  }
}

export default ChatBotApi;