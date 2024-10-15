import React from 'react'
import Layout from '../components/layout/Layout'
const About = () => {
  return (
    <Layout title="About the Creator - TOP SHELF">
       <div className='font-sans flex flex-row justify-center items-center md:pl-32'>
        <div className=' w-80 mx-auto lg:w-96 transition-all duration-150 mt-32  bg-white shadow-xl hover:shadow rounded-md'>
            <img className='w-32 mx-auto rounded-full -mt-20 border-8 border-white  ' 
            src="https://github.com/sadiyacodes.png"
            alt="Sadiya Parveen profile"></img>
             <div className="text-center mt-2 text-3xl font-medium">
              Sadiya Parveen
            </div>
            <div className="text-center mt-2 font-light text-sm">
              @sadiya__24
            </div>
            <div className="text-center font-normal text-lg">Bengaluru</div>
            <div className="px-6 text-center mt-2 font-light text-sm">
              <p className="text-xs font-josefin">
                Full stack Developer, avid learner & a creative at heart. Love watching movies. Currently building scalable and responsive web
                applications using MERN stack. Diving deep into Javascript in my free time.
              </p>
            </div>

            <div className="flex p-4 w-full">
            <a href="https://twitter.com/sadiya__24" target="_blank">
                  <i className="fa-brands fa-twitter text-2xl cursor-pointer"></i>
                </a>
                <a
                  href="https://github.com/sadiyacodes"
                  target="_blank"
                >
                  <i className="fa-brands fa-github text-2xl cursor-pointer"></i>
                </a>
                <a
                  href="https://in.linkedin.com/in/sadiya-parveen-1181521ab?original_referer=https%3A%2F%2Fwww.google.com%2F"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin text-2xl cursor-pointer"></i>
                </a>
                </div>
        </div>
       </div>
    </Layout>
  )
}

export default About