
import './aboutMe.scss';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faSmileBeam, faHeadphones, faLaptopCode, faBook, faPlane, faCode, faGamepad,faDumbbell,faWineGlass} from '@fortawesome/free-solid-svg-icons'

function AboutMe() {
  return (
    <div className="slide slideAboutMe ">
      <div className='main-container max-w-5xl mx-auto mt-16'>
        <div class="text-left">
          <div class="bg-cyan-500 h-1.5 rounded-full w-20 mb-3 mt-2"></div>
          <h2 class="text-2xl font-bold">About Me</h2>
        </div>
      
        <div class="mt-0 md:mt-10 flex  flex-col md:flex-row">
        <article class="w-full md:w-8/12 items-start justify-between p-2">

          <div class="min-h-[220px] block w-full p-6 border border-gray-200 rounded-lg shadow-2xl hover:bg-cyan-200 my-4">
            <div class="flex title-icon">
              <div class="w-8/12">
                <div class="bg-cyan-500 h-1.5 rounded-full w-20 mb-3 mt-2"></div>
                <h5 class="mb-2 text-2xl text-gray-900 text-left mb-3">As a profesional</h5>
              </div>
              <div class="w-4/12 text-right icon">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
            </div>
            <p class="font-normal text-gray-700 text-justify text-sm">I excel in employing project management tools to optimize workflows and boost project efficiency. 
            With outstanding interpersonal and communication skills, I cultivate positive collaborations with team members and stakeholders, 
            ensuring effective and seamless project execution.</p>
          </div>
          
          <div class="min-h-[220px] block w-full p-6 border border-gray-200 rounded-lg shadow-2xl hover:bg-cyan-200 my-4">
            <div class="flex title-icon">
              <div class="w-8/12">
                <div class="bg-cyan-500 h-1.5 rounded-full w-20 mb-3 mt-2"></div>
                <h5 class="mb-2 text-2xl text-gray-900 text-left mb-3">As a person</h5>
              </div>
              <div class="w-4/12 text-right icon">
                <FontAwesomeIcon icon={faSmileBeam} />
              </div>
            </div>
            <p class="font-normal text-gray-700 text-justify text-sm">
            I maintain a harmonious equilibrium between my personal and professional life.
             I am dedicated to continuous personal and professional development, actively seeking feedback and pursuing opportunities for growth. 
             I exhibit empathy and compassion, demonstrating an ability to understand and relate to others' perspectives. 
            </p>
          </div>
          
        </article>
        <article class="w-full md:w-4/12 items-start justify-between p-2">
          <div class="min-h-[220px] block w-full p-6 border border-gray-200 rounded-lg shadow-2xl hover:bg-cyan-200 my-4">
            <div class="bg-cyan-500 h-1.5 rounded-full w-20 mb-3 mt-2"></div>
            <h3 className='mb-2 text-2xl text-gray-900 text-left mb-3'>Hobbies</h3>
            <div class='icon-list'>
              <div class="content-item">
                <div class="item border-cyan-500 border-2">
                  <FontAwesomeIcon icon={faHeadphones} />
                </div>
                <label>Music</label>
              </div>
              <div class="content-item">
                <div class="item border-cyan-500 border-2">
                  <FontAwesomeIcon icon={faGamepad} />
                </div>
                <label>Game</label>
              </div>
              <div class="content-item">
                <div class="item  border-cyan-500 border-2">
                  <FontAwesomeIcon icon={faBook} />
                </div>
                <label>Read</label>
              </div>
              <div class="content-item">
                <div class="item  border-cyan-500 border-2">
                  <FontAwesomeIcon icon={faDumbbell} />
                </div>
                <label>Gym</label>
              </div>

            </div>
          </div>
          <div class="min-h-[220px] block w-full p-6 border border-gray-200 rounded-lg shadow-2xl hover:bg-cyan-200 my-4">
            <div class="bg-cyan-500 h-1.5 rounded-full w-20 mb-3 mt-2"></div>
            <h3 className='mb-2 text-2xl text-gray-900 text-left mb-3'>Interests</h3>      
            <div class='icon-list'>
              <div class="content-item">
                <div class="item border-cyan-500 border-2">  
                  <FontAwesomeIcon icon={faCoffee} />
                </div>
                <label>Coffe</label>
              </div>
              <div class="content-item">
                <div class="item border-cyan-500 border-2">
                  <FontAwesomeIcon icon={faPlane} />
                </div>
                <label>Travel</label>
              </div>
              <div class="content-item">
                <div class="item border-cyan-500 border-2">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <label>Code</label>
              </div>
              <div class="content-item">
                <div class="item border-cyan-500 border-2">
                  <FontAwesomeIcon icon={faWineGlass} />
                </div>
                <label>Drink</label>
              </div>
            </div>
          </div>
        </article>

        </div>
      </div>
    </div>
  );
}

export default AboutMe;
