export const ADD_TEXT = 'ADD_TEXT';
export const ADD_PIC = 'ADD_PIC';
export const LOADING = 'LOADING';

export const addText = (text) => ({
  type: ADD_TEXT,
  payload: text,
});

export const addPic = (data) => ({
  type: ADD_PIC,
  payload: data,
});

export const loading = () => ({
  type: LOADING,
});

export const loadPic = () => {
  return async (dispatch) => {
    dispatch(loading())
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const json = await response.json();
    dispatch(addPic(json))
  }
}
