import axios from "axios";

const url = "http://localhost/child_abuse_management_system_db";
const baseUrl =
  "http://localhost/child_abuse_management_system_db";
export const api = async (page, data) => {
  const request = await fetch(`${url}/${page}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const res = await request.json();
  console.log("response", res);
  return res;
};

export const postData = async (url, data) => {
  let link = `${baseUrl}/${url}`;
  const request = await axios.post(link, data);
  return request;
};
export const getData = async (url) => {
  let res = await axios.get(`${baseUrl}/${url}`);
  return res;
};
export const handleDelete = (url) => {
  const res = axios.delete(`${baseUrl}/${url}`);
  return res;
};
