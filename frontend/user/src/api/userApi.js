import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9000",
});

// 요청 인터셉터 - 토큰 자동으로 헤더에 추가
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// 응답 에러 인터셉터
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("roles");
    }
    return Promise.reject(error);
  }
);


// 로그인
export const loginUser = async (userId, password) => {
  const response = await API.post("/user/login", { userId, password });
  return response.data;
};

// 회원가입
export const signupUser = async (userId, password, name, phone) => {
  const response = await API.post("/user/create", {
    "userId" : userId,
    "password" : password,
    "userName" : name,
    "tel" : phone,
    "role" : "USER",
  });
  return response.data;
};

// 토큰 저장
export const saveToken = (token, userId, roles) => {
  localStorage.setItem("accessToken", token);
  localStorage.setItem("userId", userId);
  localStorage.setItem("roles", roles);
};

// 토큰 가져오기
export const getToken = () => {
  return localStorage.getItem("accessToken");
};
