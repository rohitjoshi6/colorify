import axios from "axios";

const convertImage = async (file) => {
    console.log('in convert img')
    const url="https://865a-103-182-146-150.in.ngrok.io/upload";
    const formData = new FormData();
    formData.append('image', file);

    const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    return response.data;
}

export default convertImage;