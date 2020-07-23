import { api } from "./ConfigApi";
import Axios from "axios";

export const CallApi = (uri, method = "GET", body, headers) => {
  return Axios({
    method,
    url: `${api}/${uri}`,
    data: body,
    headers,
  });
};
