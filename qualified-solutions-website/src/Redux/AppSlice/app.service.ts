import Axios from "axios";
export const postFormData = async (formData: any) => {

    
    const api_uri = process.env.REACT_APP_API_URI;
    try {
        const response = await Axios.post(api_uri!, formData);
        return response;
    } catch (error) {
        console.log(error);
    }
}; 