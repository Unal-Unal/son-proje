// Başlangıç Durumu
const initialState = {
  user: {},
  addressList: [],
  cardList: [],
  orderList: [],
  roles: [],
  theme: "light",
  language: "tr",
};

// Reducer
export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_ROLES":
      return { ...state, roles: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "SET_ADDRESS_LIST":
      return { ...state, addressList: action.payload };
    case "SET_CARD_LIST":
      return { ...state, cardList: action.payload };
    case "SET_ORDER_LIST":
      return { ...state, orderList: action.payload };
    default:
      return state;
  }
};