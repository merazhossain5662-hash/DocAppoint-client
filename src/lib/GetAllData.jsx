

const GetAllData = async() => {

    const res = await fetch("http://localhost:5000/allDoctors");
    const datas = await res.json();
   return datas
    
};

export default GetAllData; 