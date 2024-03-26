import React, { useState, useEffect } from 'react';
const URL = 'http://localhost:3000/api/movies'

export function NewMovie() {
    const [FormData, setFormData] = useState({
        Title: '',
        Director: '',
        Year: '',
        Rating: '',
        ImgURL: ''
    });
    const [showForm, setShowForm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.prevenDefault();
        try {
            const responce = await fetch(URL, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(FormData)
            });
            console.log('Pelicula enviada con exito.');
        } catch (error) {
            console.error('Error al enviar la pelicula:', error);
        }
    };

    return (
        
            <div className="popup-inner">
            <button className='drop-btn' onClick={() => setShowForm(prevState => !prevState)}>
                {showForm ? 'Close' : 'New Movie?'}
            </button>
            {showForm && (
                <div className='popup'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='Title' placeholder='Titulo' value={FormData.Title} onChange={handleChange} /><br />
                    <input type="text" name='Director' placeholder='Director' value={FormData.Director} onChange={handleChange} /><br />
                    <input type="text" name='Year' placeholder='Year' value={FormData.Year} onChange={handleChange} /><br />
                    <input type="text" name='Rating' placeholder='Rating' value={FormData.Rating} onChange={handleChange} /><br />
                    <input type="text" name='ImgURL' placeholder='Image URL' value={FormData.ImgURL} onChange={handleChange} /><br />
                    <button type="submit">Add Movie</button>
                </form>
                 </div>
            )}
            </div>
       
    );

}
export default NewMovie;