import React from "react"

import FoundingStory from "../assets/Images/instructors.jpg"
import BannerImage1 from "../assets/Images/logindd.jpeg"
import BannerImage2 from "../assets/Images/citygym.jpg"
import BannerImage3 from "../assets/Images/sighn5.jpg"
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
          Empowering Lives Through Smart Training at City Gym  
            <HighlightText text={"Where Strength Meets the Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
            City Gym is at the forefront of revolutionizing urban fitness.
We're passionate about building a stronger, healthier future by
offering cutting-edge training programs, integrating smart fitness technologies,
and fostering a dynamic and empowering fitness community.


            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              In the heart of a bustling city where people often struggled to find time for their health, City Gym was born out of a simple vision — to make fitness accessible, smart, and empowering. Founded by a group of passionate fitness enthusiasts and tech-savvy innovators, City Gym started as a small local space with a big dream: to break the traditional gym mold and create a place where modern technology meets personalized training. From AI-powered fitness tracking to community-driven challenges, the goal was clear — help people become the strongest version of themselves, both physically and mentally.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              What began as a neighborhood gym quickly evolved into a movement. As more people joined, City Gym grew into a vibrant fitness hub where strength meets support, and progress is celebrated at every level. We embraced innovation, introduced smart training programs, virtual guidance, and real-time progress analytics — all while keeping the heart of our mission alive: building a fitness community where everyone feels welcome. Today, City Gym stands as a symbol of dedication, transformation, and the belief that with the right environment, anyone can change their life.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              At City Gym, our vision is to redefine urban fitness by creating a space where technology, training, and community come together to inspire healthier lives.
We aim to empower every individual — from beginners to athletes — to reach their full potential through innovative workouts, personalized guidance, and a supportive fitness environment.
We envision a future where fitness is not just a routine, but a lifestyle fueled by purpose, progress, and passion.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              At City Gym, our mission is to empower individuals to lead stronger, healthier lives by providing access to innovative training programs, expert guidance, and a motivating community atmosphere.
We are committed to merging fitness with technology, delivering personalized experiences that track progress, boost performance, and keep our members inspired every step of the way.
Through dedication, inclusivity, and continuous improvement, we strive to make fitness not just achievable — but enjoyable for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other Members
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default About
