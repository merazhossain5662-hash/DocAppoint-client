import React from 'react';

const DetailsPage = async({params}) => {
  const {id} = await params;
  console.log(id);
  
  
  const res = await fetch(`http://localhost:5000/allDoctors/${id}`)
  const data = await res.json();
        console.log(data);
        
    return (
        <div>
          {data.name}
        </div>
    );
};

export default DetailsPage;