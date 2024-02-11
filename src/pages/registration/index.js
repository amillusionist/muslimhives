import { useEffect, useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
// import "../../styles/";

const MultiPageForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});
  
  const handleNext = (data) => {
    setCurrentPage(currentPage + 1);
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleBack = (data) => {
    setCurrentPage(currentPage - 1);
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  }

  useEffect(() => {

    //will act as a submit button
    if(currentPage === 4){
        console.log(formData);
    }   
  },[formData]);

  return (
    <>
    <div className='reg-container'>
      <div className='reg-container-left'>  
        {currentPage === 1 && <Page1 onNext={handleNext} />}
        {currentPage === 2 && <Page2 onNext={handleNext} onBack={handleBack}/>}
        {currentPage === 3 && <Page3 onNext={handleNext} onBack={handleBack}/>}
      </div>
      <div className='reg-container-right'>
      </div>
    </div>
    </>
  );
};

export default MultiPageForm;
