import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating() {
    const [rating, setRating ] = useState(null);
    return (
        [...Array(5)].map((star, index) => {
            const currentrating = index + 1;
            return(
                <label htmlFor="">
                    <imput
                    type="radio"
                    name="rating"
                    value={currentrating}
                    onClick={ () => setRating(currentrating)}
                    />
                <FaStar size={20} />
                
                </label>
                
            );
        })
    );
}