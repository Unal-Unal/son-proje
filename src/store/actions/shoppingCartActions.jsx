export const setCart = (cart) => ({ type: "SET_CART", payload: cart });
export const setPayment = (payment) => ({ type: "SET_PAYMENT", payload: payment });
export const setAddress = (address) => ({ type: "SET_ADDRESS", payload: address });

// 👇 YENİ EKLENEN: Tek ürün ekleme aksiyonu
export const addToCart = (product) => ({ type: "ADD_TO_CART", payload: product });

// 👇 YENİ EKLENENLER: Sepet Yönetimi İçin
export const updateItemCount = (productId, count) => ({ 
    type: "UPDATE_ITEM_COUNT", 
    payload: { productId, count } 
});

export const removeFromCart = (productId) => ({ 
    type: "REMOVE_FROM_CART", 
    payload: productId 
});

export const toggleItemCheck = (productId) => ({ 
    type: "TOGGLE_ITEM_CHECK", 
    payload: productId 
});