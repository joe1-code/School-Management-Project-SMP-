import instance from "../Config/configFile";
import { forEach } from "lodash";
import * as jwt from 'jsonwebtoken';
import isEmpty from "lodash/isEmpty";
import crypto from 'crypto';


let access_token;
let TokenPayload;

const token = localStorage.getItem("token");
const logged = localStorage.getItem("isLogged");
let userId = localStorage.getItem("userId");

export const getTokenPayload = (token) => {
 if (isEmpty(TokenPayload)) {
  try {
   TokenPayload = jwt.decode(token)
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

};

export const registerNewwindow = async (payload) => {
 try {
  const windowRes = await instance.post("/newwindow", { ...payload });
 }
 catch (error) {
  console.log("error in registering new window", error);
 }

};


//-----------get api-------------------------------

export const getUsers = async (data) => {
 try {
  if (data) {
   const users = await instance.get("/getUsers", { params: data });
   if (users) {
    return users;
   }
   else {
    const users = await instance.get("/getUsers");
    if (users) {
     return users;
    }
   }
  }

 }
 catch (error) {
  console.log("error in fetching users", error);
 }
};


