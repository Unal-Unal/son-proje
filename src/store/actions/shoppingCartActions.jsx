import { axiosInstance } from "../../api/axiosInstance";
import { toast } from "react-toastify";

export const setCart = (cart) => ({ type: "SET_CART", payload: cart });
export const setPayment = (payment) => ({ type: "SET_PAYMENT", payload: payment });
export const setAddress = (address) => ({ type: "SET_ADDRESS", payload: address });
export const resetCart = () => ({ type: "RESET_CART" });

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

export const createOrder = (orderData) => (dispatch) => {
  return axiosInstance
    .post("/order", orderData)
    .then((res) => {
      // 1. Başarılı ise sepeti sıfırla
      dispatch(resetCart());
      // 2. Kullanıcıyı tebrik et (Toast mesajı)
      toast.success("Siparişiniz başarıyla alındı! 🎉");
      return res.data;
    })
    .catch((err) => {
      console.error("Sipariş oluşturulamadı", err);
      toast.error(err.response?.data?.message || "Sipariş oluşturulurken bir hata oluştu.");
      throw err;
    });
};