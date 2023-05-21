import React, {useState} from 'react';
import axios from "axios";

const App = () => {
    const [movies, setMovies] = useState([]) //array형태 데이터 가지고옴

    //axios 데이터를 가지고오는 네트워크 라이브러리

    //movie 데이터를 가져오는 함수
    //인터넷을 가져올때 async 해줌
    const getMovies = async () => {
        try{
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzM1NDc3MjQ0M2FlODIyNTUxNDQ4MjMwMzZmNDhlOCIsInN1YiI6IjY0NjlhODE1MDA2YjAxMDE4OTU4ZDlhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RJDHcyvrIfSlqIBCcK95nTmRqfDhBtjpbp7IcepDTFY'
                }
            };
            const result = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options)
            setMovies(result.data.results)
            console.log(result.data.results)
        } catch (err){
            console.log(err)
        }
    }
    //자동으로 실행하는 함수(hook)
    useState(() => {
        getMovies()
    }, [])

    return (
        <div>
            {movies && movies.map(movie => (
                <div>
                    <h1>{movie.title}</h1>
                    <h3>release_date : {movie.release_date}</h3>
                    <h4>overview: {movie.overview}</h4>
                </div>
            ))}
        </div>
    );
};

export default App;