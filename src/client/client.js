import instance from "./Config/ConfigFile";
import { forEach } from "lodash";

let access_token;
let TokenPayload;

const token = localStorage.getItem("token");
const logged = localStorage.getItem("isLogged");
let userId = localStorage.getItem("userId");

export const getTokenPayload = (token) => {
 if (isEmpty(TokenPayload)) {
  try {
   TokenPayload = jwt.Decode(token)
  }
  catch (error) {
   console.log(error)
  }
 }
 return TokenPayload;
};

export const fetchAccessToken = async () => {
 try {
  access_token = await instance.post("/");
  const { AccessToken } = access_token.data;
  localStorage.setItem("token", AccessToken);
  return access_token;
 }
 catch (error) {
  console.log(error);
 }
};

export const isLogged = () => {
 if (!logged) {
  console.log("not logged", logged);
  return false;
 }

 if (!token) {
  console.log("no token");
  return false;
 }

 return logged;
};

export const login = async (payload) => {

 try {
  const authRes = await instance.post("/login", { ...payload });
  const { token: accessToken } = authRes;
  if (accessToken) {
   const payload = getTokenPayload(accessToken);
   const { id } = payload;
   localStorage.setItem("token", accessToken);
   localStorage.setItem("isLogged", true);
   localStorage.setItem("userId", id);

   return 'success';
  }
 }
 catch (error) {
  console.log("error in login", error);
 }

 return false;
};

export const registerUser = async (payload) => {
 try {
  const regresponse = await instance.post("/register", { ...payload });
 }
 catch (error) {
  console.log("error in registration", error);
 }

 return false;
};

export const registerGroup = async (payload) => {
 try {
  const regGroup = await instance.post("/registerGroup", { ...payload });
 }
 catch (error) {
  console.log("error in register a group", error);
 }

 return false;
};

export const getCode = async (payload) => {
 try {

  const phone = payload.phoneNo;
  //const {phoneNo} = payload;

  const code = await instance.post("/forgotpass", { phone });
  return code;
 }
 catch (error) {
  console.log("error in getcode", error);
  return {}
 }
};

export const postCode = async (payload) => {
 try {
  const { phoneNo, code, password } = payload;

  const isReset = await instance.post("/resetpass", { phoneNo, code, password });

  if (isReset) {
   return { isReset: true }
  }
  return { isReset: false }
 }
 catch (error) {
  console.log("error in reset password", error);
 }

}