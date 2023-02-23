/*eslint-disable*/
//eslint는 문법 채크사항을 알려줌, 터미널에 노란색으로 알림이 뜨는데 없애려면 위와 같이 설정함.

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["Samsung", "LG전자", "Sk하이닉스"]);

  let [따봉, 따봉변경] = useState(0);
  let [따봉1, 따봉변경1] = useState(0);
  let [따봉2, 따봉변경2] = useState(0);

  // state는 변수 대신 쓰는 데이터 저장공간(생성시 [변수값,변수변경]이라는 배열이 생긴다.)| 자주 바뀌고, 중요한 데이터는 변수 말고 state로 저장하면 새로고침 없이 html랜더링 가능.

  // state값 변경을 위해서는 따봉변경(대체할데이터) 이 함수를 써준다.

  // function 제목바꾸기(){
  //   글제목변경(["Cjenm", "kakaopay", "KRAFTON"])
  // }

  function 제목바꾸기() {
    let newArray = [...글제목]; //그냥 글제목 만 쓰면 newArray와 값을 공유하는 것, [...]으로 하면 완전 상관없는 복사본을 뜨는것
    newArray[0] = "Cjenm";
    newArray[1] = "kakaopay";
    newArray[2] = "KRAFTON";
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>KOSPI 순위</div>
      </div>

      <button onClick={제목바꾸기}>KOSDAK</button>

      <div className="list">
        <h3>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p>2월 23일 시총 1위</p>
        <hr />
      </div>

      <div className="list">
        <h3>
          {글제목[1]}{" "}
          <span
            onClick={() => {
              따봉변경1(따봉1 + 1);
            }}
          >
            👍
          </span>
          {따봉1}
        </h3>
        <p>2월 23일 시총 2위</p>
        <hr />
      </div>

      <div className="list">
        <h3>
          {글제목[2]}{" "}
          <span
            onClick={() => {
              따봉변경2(따봉2 + 1);
            }}
          >
            👍
          </span>
          {따봉2}
        </h3>
        <p>2월 23일 시총 3위</p>
        <hr />
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
