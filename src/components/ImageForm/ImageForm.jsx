import { useState } from "react"
import convertImage from "../../api_calls/api_calls";
import "./ImageForm.css"

const ImageForm = (props) => {

    const {setBwImg, setCImg} = props.state; 
    const [file, setFile] = useState();

    const handleChange = (e) => {
        const imageFile = e.target.files[0];
        const uploadedImage = URL.createObjectURL(imageFile);
        setFile(imageFile);
        setBwImg(uploadedImage);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const jpeg_image = await convertImage(file);
        setCImg(jpeg_image)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Upload Image</h3>
            <input type="file" accept="image/*" onChange={handleChange} />
            <button type="submit">Colorify</button>
        </form>
    );
}

export default ImageForm;