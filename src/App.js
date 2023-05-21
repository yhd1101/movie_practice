import React, {useState} from 'react';

const App = () => {
  //함수, 상수, 상태 등을 선언하는곳 return은 화면에 보여주는곳
    const [keyword, setKeyword] = useState("")

    // 키워드를 변경하는 함수
    const changeKeyword = () => {
        console.log("키워드임")
        setKeyword("키워드")
    }
    const moiveData = {
            "adult": false,
            "backdrop_path": "/fI5RsaM0NSU6TqztRhA2pal5ezv.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 385687,
            "original_language": "en",
            "original_title": "Fast X",
            "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
            "popularity": 5227.39,
            "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
            "release_date": "2023-05-17",
            "title": "Fast X",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 190
    }

    return (
        <div>
            <h1>
                {moiveData.id}
            </h1>
            <h1>
                title: {moiveData.title}
            </h1>
            <h2>
                설명 : {moiveData.overview}
            </h2>
            <h1>
                비디오 : {moiveData.video ? "비디오있음" : "비디오없음"}
            </h1>
            <h2>
                vote_count: {moiveData.vote_count}
            </h2>
            <h1>
                {moiveData.popularity}
            </h1>
        </div>
    );
};

export default App;