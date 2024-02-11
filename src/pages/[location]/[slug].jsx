import { useRouter } from 'next/router';
import React from 'react';
const DynamicPage = () =>{
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>
          <h1>This is a dynamic page with slug: {slug}</h1>
        </div>
      );
};
export default DynamicPage;