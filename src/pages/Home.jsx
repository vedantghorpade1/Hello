// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/video_new.mp4"
// Component Imports
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {

  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>BECOME A TRAINER</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          EMPOWER YOUR FUTURE WITH
          <HighlightText text={"FITNESS"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
        Home to big hitters, heavy leafters, first timers,movers and rule breakers of every kind, where goals are crushed daily, seasoned sadies 
                    a haven for power movers, dedicated beginners, seasoned pros
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
    <CTAButton 
  active={true}
  linkto={"https://vercel-frontend-chatbot.vercel.app/"}
>
  CHAT WITH CHATBOT
</CTAButton>
          <CTAButton active={false} linkto="https://saurabhperane1.github.io/PoseCorrectionFinal/" isExternal={true}>
  TRY OUT AI
</CTAButton>

        </div>

        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                UNLOCK
                <HighlightText text={"BODY STRENGTH"} /> WITH OUR
                BEST COURSES.
              </div>
            }
            subheading={
              "All our sessions are led by certified gym trainers to ensure proper technique, safety, and maximum results.Every set is guided by pro trainers who push you to hit harder, and level up every time."
            }
            ctabtn1={{
              btnText: "TRY YOUR SELF",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "EXPLORE MORE",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`Strength isn't just built in reps — it's built in mindset.\n True gains start when excuses end.\nIt’s not just about lifting weights, it’s about lifting yourself to a higher standard.\nThis isn’t just a gym. It’s a proving ground.\nYour grind, your rules. We’re just here to make sure you level up.\nHere, sweat speaks louder than words.\nModern strength demands more than reps — it demands consistency.\nYour journey. Your energy. Your transformation.\n`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                START
                <HighlightText text={"FITNESS IN SECONDS"} />
              </div>
            }
            subheading={
              "The new era of fitness isn’t about fitting in — it’s about standing out. Strength, mindset, and hustle lead the way."
            }
            ctabtn1={{
              btnText: "CONTINUE LESSION",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "LEARN MORE",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`Today’s athlete trains with purpose🧠. It's not just muscle — it's motivation, consistency, and fire.\n Modern strength is built on more than reps. It’s built on discipline, resilience, and relentless energy🎯.\nThe strongest lifters don't just train — they evolve. With every set, they redefine limits.\nIn today’s gym, power is just the start🧱 . True dominance takes vision, grind, and heart.\n\nThe future of fitness is personal. You don’t just follow a plan — you lead your path💥`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  EXPLORE FULL CATALOG
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                LEARN MORE
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
            Earn the fitness your future self will {" "}
              <HighlightText text={"thank you for.."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
              The modern athlete trains on their own terms. Today, being truly competitive takes more than just strength — it demands discipline, mindset, and consistency.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">EXPLORE MORE</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other Members
        </h1>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
