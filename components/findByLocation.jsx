import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import SearchImage from '/public/Search.svg';
import Link from 'next/link';

export default function FindByLocation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const resultsContainerRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (resultsContainerRef.current && !resultsContainerRef.current.contains(e.target)) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/businesses?businessName_contains=${searchQuery}`);
        const data = await response.json();
        setSearchResults(data.data || []);
        setShowResults(data.data.length > 0); // Show results only if data is not empty
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchQuery.trim() !== '') {
      fetchData();
      setShowResults(true); // Show results when there is a search query
    } else {
      setSearchResults([]);
      setShowResults(false); // Hide results when search query is empty
    }
  }, [searchQuery]);

  useEffect(() => {
    // Add event listener for clicks outside the results container
    document.addEventListener('click', handleOutsideClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex col gap-20">
      <h1>
        Find the Best Businesses
        <br />
        in Your Area
      </h1>
      <div className="flex gap-24">
        <div className="width-40">
          <div className='flex space-between input-border pad-10 '>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search by Location"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Image src={SearchImage} alt="Search" />
          </div>
        </div>
        <div className="width-60">
          <div className='flex space-between  input-border pad-10'>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search for businesses"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Image src={SearchImage} alt="Search" />
          </div>
          {showResults && (
            <div ref={resultsContainerRef} className='search-result-list input-border mT5'>
              {/* Display search results here */}
              {searchResults.map((result) => (
                <div key={result.id} className='result-list-item pad-10'>
                  <Link href="/dashboard" className='flex gap-10'>
                    <div>
                      <Image src={SearchImage} alt="Search" />
                    </div>
                    <div>
                      <h3>{result.attributes.BusinessName}</h3>
                      {/* Render business details */}
                      <p>{result.attributes.BusinessName}</p>
                      {/* Add more details as needed */}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
