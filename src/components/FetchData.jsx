import axios from "axios";

export default async function FetchData(section) {
  return await axios.get(
    `https://akshat-surolia-portfolio.herokuapp.com/${section}`
  );
}
