import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <h1 class="logo">로고</h1>
      <button class="Category">만화</button>
      <button class="Category" style={{top: 200+'px'}}>소설</button>
      <p class="Category" style={{top: 294+'px',background: 'none',align: 'center'}}>검색</p>
      <button class="Category" style={{top: 753+'px'}}>로그인/회원가입</button>
      <button class="Category" style={{top: 832+'px'}}>내정보</button>

      <div class="main-Div">
        
      </div>

      <div class="side-Web-name">
            <span style={{color: 'rgb(45, 218, 195)'}}>로고</span> Web Site
        </div>
    </React.Fragment>
  );
}

export default App;
