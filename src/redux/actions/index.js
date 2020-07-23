import * as Actiontype from "./../constants/actionTypes";
import { CallApi } from "../../utils/CallApi";
import { apiKeyGiphy, limit } from "../../utils/ConfigApi";

export const actGetListGiphys = () => {
  return (dispatch) => {
    CallApi(`trending?api_key=${apiKeyGiphy}&limit=${limit}`, "GET", null, null)
      .then((rs) => {
        dispatch({
          type: Actiontype.GET_lIST_GIPHY,
          listGiphys: rs.data.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
