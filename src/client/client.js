import instance from "../Config/axiosconfig";
import { merge, forEach } from "lodash";
import isEmpty from "lodash/isEmpty";
import jwtDecode from "jwt-decode";

let access_token;
let tokenPayload;
const logged = localStorage.getItem("islogged");
const token = localStorage.getItem("token");
let userId = localStorage.getItem("userId");
// const logged = true;
// const token = 'sjbcskclscms;mamcx;aslm;cma;ma;l';

//..................start..................
// ............. auth functions........

/**
 * @function
 * @name getTokenPayload
 * @description Return decoded token payload
 * @param {string} token jwt token base64 url encoded token
 * @returns {object} Jwt token content
 * @version 0.1.0
 * @since 0.1.0
 */
export const getTokenPayload = (token) => {

 if (isEmpty(tokenPayload)) {
  try {
   tokenPayload = jwtDecode(token);
  } catch (error) {
   // eslint-disable-next-line no-console
   console.log(error);
  }
 }

 return tokenPayload;
};

export const fetchAccessToken = async () => {
 try {
  access_token = await instance.post("/refresh_token");
  const { AccessToken } = access_token.data;
  localStorage.setItem("token", AccessToken);
  return access_token;
 } catch (error) {
  console.log(error);
 }
};

export const isLogged = () => {
 if (!logged) {
  console.log("not loged", logged);
  return false;
 }
 if (!token) {
  console.log("no token");
  return false;
 }
 return logged;
 // return true;  ............ uncomment for change only
};

export const login = async (payload) => {
 try {
  const authRes = await instance.post("/login", { ...payload });
  const accessToken = authRes.token
  // const { token:accessToken } = authRes;
  if (accessToken) {
   console.log(accessToken)
   const payload = getTokenPayload(accessToken);
   const { id } = payload;
   localStorage.setItem('token', accessToken);
   localStorage.setItem('islogged', true);
   localStorage.setItem('userId', id);
   return 'success';
  }
 } catch (error) {
  console.log("error in login", error);
 }

 return false;
};

export const registerUser = async (payload) => {
 try {
  const regresponse = await instance.post("/members", { ...payload });
  return true;
 }
 catch (error) {
  console.log("error in registration", error);
 }

 return false;
};


export const registerGroup = async (payload) => {
 try {
  const regGroup = await instance.post("/registerGroup", { ...payload });
  return true;
 }
 catch (error) {
  console.log("error in register a group", error);
 }

 return false;
};


export const getCode = async (payload) => {
 try {

  const phoneNo = payload.phoneNo;
  //const {phoneNo} = payload;

  const code = await instance.post("/forgotpassword", { phoneNo });
  return code;
 }
 catch (error) {
  return {};
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



//-----------get api endpoints-------------------------------

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



export const logout = async () => {
 localStorage.clear();
 window.location.replace(`/`);
 try {
  const authRes = await instance.post('/auth/logout', {
   token: token,
  });
  const { accessToken } = authRes.data;
  if (authRes.status == '200') {
  }
 } catch (error) {
  console.log('error in login', error);
 }

 return false;
};






// /**
//  * @function createHttpActionsFor
//  * @name createHttpActionsFor
//  * @description generate http actions to interact with resource
//  * @param {string} resource valid http resource
//  * @returns {object} http actions to interact with a resource
//  * @since 0.1.0
//  * @version 0.1.0
//  * @example
//  * import { createHttpActionsFor } from './client';
//  *
//  * const { deleteUser } = createHttpActionsFor('user');
//  * deleteUser('5c176624').then(user => { ... }).catch(error => { ... });
//  */
// export const createHttpActionsFor = (resource) => {
//  const getResources = createGetListHttpAction(resource);
//  const getResource = createGetSingleHttpAction(resource);
//  const postResource = createPostHttpAction(resource);
//  const putResource = createPutHttpAction(resource);
//  const patchResource = createPatchHttpAction(resource);
//  const deleteResource = createDeleteHttpAction(resource);

//  return {
//   ...getResources,
//   ...getResource,
//   ...postResource,
//   ...putResource,
//   ...patchResource,
//   ...deleteResource,
//  };
// };

/**
 * @function
 * @name getUserId
 * @description retrieve userId from local storage 
 *
 * @returns {string |undefined} user id
 * @since 0.1.0
 * @version 0.1.0
 */
export const getUserId = () => {
 if (!userId) {
  const payload = getTokenPayload(token);
  const { id } = payload;
  console.log('if is not available on local', userId)
  localStorage.setItem("userId", id);
  return { 'userId': id }
 }
 return userId;
};