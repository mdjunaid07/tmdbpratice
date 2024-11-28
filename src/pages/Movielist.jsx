import React from 'react';
import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Card from '../components/Card';
import { useState } from 'react';

// const Movielist = ({apipath,title}) => {
//   const {data:movies} = useFetch(apipath);

// useEffect(() => {
//   document.title = `${title} / Cinebite`
// }, [title]);


// return (
//   <main className='min-h-screen'>
//     <section className='max-w-7xl py-7 m-auto'>
//       <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
//         {movies?.map((movie) => (
//            <Card key={movie.id} movie={movie}/>
//         ))}
//       </div>
//     </section>
//   </main>
// );
// }
// export default Movielist
























// getting api path as a parameter to use this in api url
const Movielist = ({ apiPath }) => {


  // usestate() is a hook that allows u to add state (data that can change)to your components.
  //  it helps u to track and update values, like a variable that changes when the user interacts with the app 
  // first value is our current state , 2nd value is func used to update our state  
  const [isMovieList, setIsMovieList] = useState();
  console.log(apiPath)



  // below lines took from tmdb for api call (it also contains my own api token of tmdb) 
  const url = `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjU3YzVjMjRkMjcxYzExZTBlNThjN2JlMWRkZTczYyIsIm5iZiI6MTcyODcyODI0My4xMjcwNTUsInN1YiI6IjY3MGE0YWZmMzdkODZkNTIwYmIwNjcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FznN9rO37DXLjTEkILAulFma8NWWDhIXkGcHPM3e_QM'
    }
  };

  const getMovies = async () => {
    // fetch returns promise
    const response = await fetch(url, options);
    // await waits untill the async func fetch data
    const data = await response.json();
    // now the json returns the actual data
    console.log(data)  
    // calling func of usestate to update our state
    setIsMovieList(data.results);
  }

  getMovies();


  return (
    <main className='min-h-screen'>
      <section className='max-w-7xl py-7 m-auto'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
          {isMovieList.map((movie) => (
             <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  );
  }
  export default Movielist
  
  
  
  //change 2


  // return (

    // <div>
    //   <h1>Movie List</h1>
    //   <div>
    //     {/* this map makes the data visible in UI ,ismovielist took from current state of usestate(),
    //      movie is parameter of map func */}
    //     {isMovieList.map((movie) => (
    //       <div key={movie.id}>
    //         <h2>{movie.title}</h2>
    //       </div>
    //     ))}
    //   </div>
   // </div>
//     <main className='min-h-screen'>
//       <section className='max-w-7xl py-7 m-auto'>
//         <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
//           { {isMovieList.map((movie) => (
//                <div key={movie.id}>
//              <h2>{movie.title}</h2>
//           ))} }
//         </div>
//       </section>
//     </main>
//   );
// };
