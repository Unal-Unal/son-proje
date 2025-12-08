// Action Creators
import { axiosInstance } from "../../api/axiosInstance";
import md5 from "md5";

export const setUser = (user) => ({ type: "SET_USER", payload: user });
export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles });
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme });
export const setLanguage = (language) => ({ type: "SET_LANGUAGE", payload: language });

// THUNK ACTION: Rolleri sadece ihtiyaç varsa çek
// Not: API isteği kısmı için axios kullandığını varsayıyorum, import etmen gerekebilir.
// Şimdilik fetch ile örnekliyorum.
export const fetchRolesIfNeeded = () => (dispatch, getState) => {
  const { client } = getState();

  // Eğer roller zaten yüklü ise işlem yapma (Need check)
  if (client.roles && client.roles.length > 0) {
    console.log("Roller zaten yüklü, tekrar istek atılmıyor.");
    return;
  }

  // API İsteği (Burayı kendi API endpointine göre düzenle)
  // dispatch(setFetchState("FETCHING")); // İstersen global loading durumu ekleyebilirsin
  
  fetch("https://workintech-fe-ecommerce.onrender.com/roles") // Örnek endpoint
    .then((res) => res.json())
    .then((data) => {
      dispatch(setRoles(data)); // Gelen veriyi store'a yaz
    })
    .catch((err) => console.error("Roller yüklenemedi:", err));
};

export const loginUser = (credentials, rememberMe) => (dispatch) => {
  // Thunk, promise döndürmeli ki bileşen içinde .then()/.catch() kullanabilelim
  return axiosInstance.post("/login", credentials)
    .then((res) => {
      // 1. Gravatar URL oluşturma (Extra Challenge)
      // E-posta adresini trim yapıp küçültüyoruz, sonra hashliyoruz.
      const emailHash = md5(credentials.email.trim().toLowerCase());
      const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;

      // 2. User objesini oluştur (API'den gelen veri + gravatar)
      const userWithAvatar = {
        ...res.data, // API'den gelen name, email, token, role_id
        avatar: gravatarUrl // Bizim eklediğimiz resim
      };

      // 3. Redux Store'a kaydet
      dispatch(setUser(userWithAvatar));

      // 4. Beni Hatırla (Remember Me) Kontrolü
      if (rememberMe) {
        localStorage.setItem("token", res.data.token);
      } else {
        // İşaretli değilse token'ı storage'dan temizle (Güvenlik)
        localStorage.removeItem("token");
      }

      return res.data; // Başarılı sonucu döndür
    })
    .catch((err) => {
      // Hatayı fırlat ki bileşen yakalayabilsin
      throw err;
    });
};

// ... (Mevcut setUser, fetchRolesIfNeeded, loginUser kodları yukarıda kalsın) ...

// --- YENİ EKLENEN: AUTO LOGIN (VERIFY TOKEN) ---
export const autoLogin = () => (dispatch) => {
  // 1. App start: check if there is token in localStorage
  const token = localStorage.getItem("token");

  // Eğer token varsa işlemlere başla
  if (token) {
    // 2. Put token to axios authorization header
    // **NOT: Do not add Bearer prefix to token** -> Sadece token
    axiosInstance.defaults.headers.common["Authorization"] = token;

    // 3. Make a GET request to /verify endpoint
    axiosInstance.get("/verify")
      .then((res) => {
        // --- IF TOKEN AUTHORIZED ---
        
        // A) Gravatar İşlemi (Login'dekiyle aynı mantık)
        // User objesini reducer'a koymadan önce avatarı eklemeliyiz
        const emailHash = md5(res.data.email.trim().toLowerCase());
        const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;

        const userWithAvatar = {
          ...res.data,
          avatar: gravatarUrl
        };

        // B) Put User object to reducer
        dispatch(setUser(userWithAvatar));

        // C) Renew token in localStorage
        // Backend verify cevabında yeni bir token dönüyorsa onu kaydederiz
        if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            // D) Renew token in axios header
            axiosInstance.defaults.headers.common["Authorization"] = res.data.token;
        }
      })
      .catch((err) => {
        // --- IF TOKEN IS NOT AUTHORIZED ---
        console.error("Auto Login Failed:", err);

        // A) Delete token from localStorage
        localStorage.removeItem("token");

        // B) Delete token from axios header
        delete axiosInstance.defaults.headers.common["Authorization"];
      });
  }
};