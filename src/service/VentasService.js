import axios from "axios";

const URL = `${process.env.REACT_APP_API}ventas`;



const getVenta = async () => {
    try {
       
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        throw error;
    }
};
const eliminarProducto = async (id) => {
    try {
        await axios.delete(`${URL}/${id}`);
        return "producto eliminado";
    } catch (error) {
        throw error;
    }
};

export  { getVenta,eliminarProducto };
