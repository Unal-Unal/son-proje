// src/store/reducers/shoppingCartReducer.js

const initialState = {
  cart: [], 
  payment: {},
  address: {},
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.payload };
    case "SET_PAYMENT":
      return { ...state, payment: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };

    case "ADD_TO_CART":
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        const newCart = [...state.cart];
        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          count: newCart[existingItemIndex].count + 1,
        };
        return { ...state, cart: newCart };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { count: 1, checked: true, product: action.payload },
          ],
        };
      }

    // 👇 YENİ: Miktar Güncelleme (Artır/Azalt)
    case "UPDATE_ITEM_COUNT":
        return {
            ...state,
            cart: state.cart.map(item => 
                item.product.id === action.payload.productId
                ? { ...item, count: action.payload.count }
                : item
            )
        };

    // 👇 YENİ: Sepetten Silme
    case "REMOVE_FROM_CART":
        return {
            ...state,
            cart: state.cart.filter(item => item.product.id !== action.payload)
        };

    // 👇 YENİ: Checkbox (Seç/Bırak)
    case "TOGGLE_ITEM_CHECK":
        return {
            ...state,
            cart: state.cart.map(item => 
                item.product.id === action.payload
                ? { ...item, checked: !item.checked }
                : item
            )
        };

    case "RESET_CART":
        return initialState; // State'i ilk haline döndür (Boş sepet)

    default:
      return state;
  }
};