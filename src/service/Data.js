import axios from "axios";

//esta url e de mocp api
const URL = `${process.env.REACT_APP_API}Productos`;

const LaData = async () => {
  try {
    const { data } = await axios.get(URL);
   
    return data
  } catch (error) {
    throw error;
  }
};
export default LaData