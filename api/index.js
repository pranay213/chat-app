import axios from "axios";

const APIURL = "https://chat-api.cyclic.app/api";

export const sendOTP = async (number) => {
  // console.log(number);
  let response = await axios.post(
    `${APIURL}/users`,
    { number },
    { headers: { "Content-Type": "application/json" } }
  );
  console.log("Response---------", response.data.response);
  return response.data.response;
};

export const Otpverify = async (number, otp) => {
  console.log("OTP---VERIFY", number, otp);
  let response = await axios.post(
    `${APIURL}/users/verify-otp`,
    { number, otp },
    { headers: { "Content-Type": "application/json" } }
  );
  console.log("Response---------", response.data);
  return response.data;
};

export const TokenVerify = async (token) => {
  console.log("Token ---verify", token);
  let response = await axios.post(
    `${APIURL}/users/verify-otp`,
    { token },
    { headers: { "Content-Type": "application/json" } }
  );
  console.log("Response---------", response.data);
  return response.data;
};
