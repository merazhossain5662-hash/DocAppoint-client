import React from 'react';

const DetailsPage = async({params}) => {
  const {id} = await params; 
  
  const res = await fetch(`http://localhost:5000/allDoctors/${id}`)
  const data = await res.json();
        console.log(data);
        
    return (
        <div className=''>
          
        </div>
    );
};

export default DetailsPage;