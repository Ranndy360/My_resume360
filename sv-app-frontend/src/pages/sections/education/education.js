
import './education.scss';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faArrowUpRightFromSquare, faGraduationCap} from '@fortawesome/free-solid-svg-icons'

function Education() {
  return (
    <div className="slide slideAboutMe ">
      <div className='main-container max-w-5xl mx-auto '>
        <div class="text-left">
          <div class="bg-cyan-500 h-1.5 rounded-full w-20 mb-3 mt-2"></div>
          <h2 class="text-2xl font-bold">Education</h2>
        </div>
      
        <div class="mt-10 flex  flex-col md:flex-row">
        <article class="w-full md:w-6/12 items-start justify-between p-2">

          <div class=" block w-full p-6 border border-gray-200 rounded-lg shadow-2xl hover:bg-cyan-200 my-4 max-w-[600px] overflow-auto">
            <div class="flex title-icon mb-3">
              <div class="w-8/12">
                <div class="bg-cyan-500 h-1.5 rounded-full w-20 mb-3 mt-2"></div>
                <h5 class="mb-2 text-2xl text-gray-900 text-left mb-3">Courses</h5>
              </div>
              <div class="w-4/12 text-right icon">
              <a target='_blank' href='https://platzi.com/p/ranndy360'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
              </div>
            </div>
            
            <ol class="relative border-s-2 border-white ml-1.5 text-left">                  
               
                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Java Unit Testing</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on July 26th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>

                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Java SpringBoot Fundamentals</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on August 6th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>

                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">WordPress</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on October 19th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>

                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Fintech For Startups</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on October 4th, 2020</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>

                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Express JS</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on July 18th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>


                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Ecmascript 6+</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on June 27th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>


                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Express JS</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on July 18th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>


                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Technology For Gerentes y Directores</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on October 28th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>

                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Negociacion Techniques</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on November 4th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>

                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Scrum Master</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on October 28th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>
                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Personal Branding</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on Jenuary 6th, 2022</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>
                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Agil Teamm Managment</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on October 28th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>
                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Personal Branding</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on Jenuary 6th, 2022</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>
                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Engineering Managment</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on October 22th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>
                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Design Thinking</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on October 29th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>
                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Design Sprint</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on October 29th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>
                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                        <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Creating Bussiness</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on October 29th, 2021</time>
                    {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                </li>
            </ol>
          </div>
          
        </article>
        <article class="w-full md:w-6/12 items-start justify-between p-2">
          
          
        <div class=" block w-full p-6 border border-gray-200 rounded-lg shadow-2xl hover:bg-cyan-200 my-4">
          <div class="flex title-icon mb-3">
            <div class="w-8/12">
              <div class="bg-cyan-500 h-1.5 rounded-full w-20 mb-3 mt-2"></div>
              <h5 class="mb-2 text-2xl text-gray-900 text-left mb-3">Education</h5>
            </div>
            <div class="w-4/12 text-right icon">
            <FontAwesomeIcon icon={faGraduationCap} />
            </div>
          </div>
          
          <ol class="relative border-s-2 border-white ml-1.5 text-left">                  
              
              <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                      <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Engineer Tec on Computer</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">From 2014 to 2016</time>
                  {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
              </li>
              <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                      <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">English B2</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">Released on 2017</time>
                  {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
              </li>
              <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
                      <svg class="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </span>
                  <h3 class="mb-1 text-lg font-semibold text-gray-900 ml-1">Software Engineer</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ml-1">From 2019 to 2023</time>
                  {/* <p class="text-base font-normal text-gray-500 ml-1">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
              </li>
          </ol>
        </div>


        <div class=" block w-full p-6 border border-gray-200 rounded-lg shadow-2xl hover:bg-cyan-200 my-4">
          <div class="flex title-icon">
            <div class="w-8/12">
              <div class="bg-cyan-500 h-1.5 rounded-full w-20 mb-3 mt-2"></div>
              <h5 class="mb-2 text-2xl text-gray-900 text-left mb-3">Languages</h5>
            </div>
            <div class="w-4/12 text-right icon">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
          </div>
          <div class="gap-8 grid">
            <div>
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Spanish</dt>
                <dd class="flex items-center mb-3">
                  <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 100%"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500 dark:text-gray-400">100%</span>
                </dd>
              </dl>
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">English</dt>
                <dd class="flex items-center mb-3">
                  <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 85%"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500 dark:text-gray-400">85%</span>
                </dd>
              </dl>
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Italian</dt>
                <dd class="flex items-center mb-3">
                  <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: 30%"></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500 dark:text-gray-400">30%</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </article>

        </div>
      </div>
    </div>
  );
}

export default Education;
