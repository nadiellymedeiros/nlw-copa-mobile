import axios from "axios";

/*copia o endereço IP qdo da npx expo dev aparece:3333*/
export const api = axios.create({
  baseURL: "http://192.168.0.9:3333",
});
