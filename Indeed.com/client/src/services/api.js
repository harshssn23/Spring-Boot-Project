import axios from 'axios';

const API_URl = "http://localhost:8080";
export const savePost = async(payload) => {
    try{
        return await axios.post(`${API_URl}/post`,payload);
    }catch(error){
        console.log("Error: ",error.message);
        return error.response.data;
    }
}

export const getAllPosts = async ()=>{
    try{
        return await axios.get(`${API_URl}/posts`);
    }catch(error){
        console.log("Error: ",error.message);
        return error.response.data;
    }
}