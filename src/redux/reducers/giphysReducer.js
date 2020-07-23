import * as actionTypes from "../constants/actionTypes";

let initialState = {
  listGiphys: [],
};

const giphysReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_lIST_GIPHY:
      state.listGiphys = action.listGiphys;
      return { ...state };
    default:
      return { ...state };
  }
};
export default giphysReducer;
