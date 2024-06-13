
import './home.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

function Home() {
  return (
    <div className="slide slideHome ">
      <div className='main-container '>
        <h1 class="sm:text-5xl text-4xl">Hi, <span>I'm Randy</span>, a Staff Software Engineer
        <br></br><button className="btn-primary">About Me</button></h1>
      </div>
    </div>
  );
}

export default Home;
