import React from 'react'
import { useEffect,useState } from 'react';
import { options } from "../utils/Options";

 const useFetch = (apiPath) => {
    const [data , setData] = useState([]);
    useEffect(()=>{
        async function getMovies() {
             const response = await fetch (`https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1`,options);
             const data = await response.json();
             setData(data.results);git add .
            
        }
        getMovies()

    } ,[apiPath])
    

  return 
    { data };
  
}
export default useFetch;



// import { useState, useEffect} from "react";
// import { options } from "../utils/Options";

// const useFetch = (apiPath, queryTerm) => {
    
//     const [data, setData] = useState([]);

//     useEffect(() => {
        
//         async function fetchMovies() {
            
//             const response = await fetch (`https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`, options);

//             const data = await response.json();

//             setData(data.results);

//         }

//         fetchMovies();

//     }, [apiPath, queryTerm]);

//     return { data };

// }


// export default useFetch;