import React, {useState} from 'react';
import hero_image from '../../images/AbrahamLincoln-Before-and-After.webp';
import './hero.css';

const hero = () => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [file, setFile] = useState()

    const handleChange = (e) => {
        setFile(e.target.files[0])
        console.log(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const url="https://image-colorization2.p.rapidapi.com/image_colorize";
        const formData = new FormData();
        formData.append('image', file);
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'c77ae5aa1cmsh80a541dad6d81abp15daf2jsnb8eee1757e40',
                'x-rapidapi-host': 'image-colorization2.p.rapidapi.com'
            },
            body: formData
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <>
        <div className='main-section'>
            <div className='title'>
                <h1>Colorify</h1>
                <p>Automatic, no sign-up & FREE !</p>
                <img src={hero_image} alt="grayscale to color"/>
            </div>

            <form onSubmit={handleSubmit}>
                <h3>Upload an image</h3>
                <input type="file" onChange={handleChange} />
                <button type="submit">Colorify</button>
            </form>
        </div>
        </>
    )
}

export default hero