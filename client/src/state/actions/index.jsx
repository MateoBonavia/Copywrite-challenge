import axios from "axios";

export function reverseWod(text) {
  try {
    return async function (dispatch) {
      await axios
        .get(`http://localhost:3001/iecho?text=${text}`)
        .then((res) => {
          dispatch({
            type: "REVERSE_WORD",
            payload: res.data,
          });
        });
    };
  } catch (e) {
    console.log(e);
  }
}
