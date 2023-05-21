import React, {useState} from 'react';

const App = () => {
  //함수, 상수, 상태 등을 선언하는곳 return은 화면에 보여주는곳
    const [keyword, setKeyword] = useState("")

    // 키워드를 변경하는 함수
    const changeKeyword = () => {
        console.log("키워드임")
        setKeyword("키워드")
    }

    return (
        <div>
          <h1>{keyword}</h1>
            <button onClick={changeKeyword}>키워드 변경</button>
        </div>
    );
};

export default App;