import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import "../styles/style.css";
const CategoryIconBox = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:1337/api/categoreys?populate=*');
                const data = await response.json();
                setCategories(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='p-60'>
            <div className="categoryList flex col gap-60">
                <div className="flex space-between">
                    {categories.slice(0,10).map((item) => (
                        <div key={item.id}>
                            <Link href="" className='item center flex col gap-10'>
                                {item.attributes.logo.data.map((image) => (
                                    <div key={image.id} className='item-img center-m'>
                                        <img className='center-m' src={`http://localhost:1337${image.attributes.url}`} alt="Category Logo" />
                                    </div>
                                ))}
                                <h3>{item.attributes.category}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex space-between">
                    {categories.slice(10,20).map((item) => (
                        <div key={item.id}>
                            <Link href="" className='item center flex col gap-10'>
                                {item.attributes.logo.data.map((image) => (
                                    <div key={image.id} className='item-img center-m'>
                                        <img className='center-m' src={`http://localhost:1337${image.attributes.url}`} alt="Category Logo" />
                                    </div>
                                ))}
                                <h3>{item.attributes.category}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryIconBox;
