// src/store/actions/productActions.js

import { axiosInstance } from "../../api/axiosInstance";

// --- ACTION CREATORS ---
export const setSort = (sort) => ({ type: "SET_SORT", payload: sort });
export const setCategories = (categories) => ({ type: "SET_CATEGORIES", payload: categories });
export const setProductList = (productList) => ({ type: "SET_PRODUCT_LIST", payload: productList });
export const setTotal = (total) => ({ type: "SET_TOTAL", payload: total });
export const setFetchState = (fetchState) => ({ type: "SET_FETCH_STATE", payload: fetchState });
export const setLimit = (limit) => ({ type: "SET_LIMIT", payload: limit });
export const setOffset = (offset) => ({ type: "SET_OFFSET", payload: offset });
export const setFilter = (filter) => ({ type: "SET_FILTER", payload: filter });

// --- THUNK ACTIONS ---

// Kategorileri API'den çekip Store'a kaydeden Thunk
export const fetchCategories = () => (dispatch) => {
  // Global fetch state yönetimi için opsiyonel: dispatch(setFetchState("FETCHING"));
  
  axiosInstance.get("/categories")
    .then((res) => {
      // Gelen veri bir dizi (Array) olmalı
      dispatch(setCategories(res.data));
      // dispatch(setFetchState("FETCHED"));
    })
    .catch((err) => {
      console.error("Kategoriler yüklenirken hata oluştu:", err);
      // dispatch(setFetchState("FAILED"));
    });
};


// --- THUNK: FETCH PRODUCTS ---
export const fetchProducts = (queryParams = {}) => (dispatch) => {
  // 1. Yükleniyor durumunu başlat
  dispatch(setFetchState("FETCHING"));

  // 2. API İsteği
  // queryParams sayesinde ilerde sayfalama ve filtreleme yapabileceğiz
  axiosInstance.get("/products", { params: queryParams })
    .then((res) => {
      // 3. Veriyi Store'a Yaz
      dispatch(setProductList(res.data.products));
      dispatch(setTotal(res.data.total));
      
      // 4. İşlem Başarılı
      dispatch(setFetchState("FETCHED"));
    })
    .catch((err) => {
      console.error("Ürünler yüklenirken hata:", err);
      dispatch(setFetchState("FAILED"));
    });
};

// 👇 YENİ ACTION CREATOR
export const setActiveProduct = (product) => ({ type: "SET_ACTIVE_PRODUCT", payload: product });

// 👇 YENİ THUNK: FETCH SINGLE PRODUCT
export const fetchProduct = (productId) => (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  
  // Endpoint: /products/:productId
  axiosInstance.get(`/products/${productId}`)
    .then((res) => {
      // Set product to Product Reducer
      dispatch(setActiveProduct(res.data));
      dispatch(setFetchState("FETCHED"));
    })
    .catch((err) => {
      console.error("Ürün detayı yüklenirken hata:", err);
      dispatch(setFetchState("FAILED"));
    });
};