import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="pb-12 my-12 md:pt-16 md:pb-48">
        <h1 className="text-4xl font-bold text-center">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="mb-6 text-2xl font-bold text-center md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Aarsh and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Web Developer based
              in Rajkot-Gujarat, India.
            </p>
            <br />
            <p>
              I have successfully completed my diploma in Computer Science at
              AVPTI , Rajkot and I am currently pursuing my Bachelor's degree in
              Information Technology at Marwadi University, Rajkot.
            </p>
            <br />
            <p>
              One of my hobbies is streaming Valorant on YouTube. It brings me
              joy to share my gameplay and connect with viewers who share a
              similar interest in the game. Although I engage in this activity
              occasionally, I find great satisfaction in creating content and
              interacting with the community when I do stream.
            </p>
            <br />
            <p>
              I firmly believe that continuous growth is the key to unlocking
              limitless potential. With an unwavering passion for technology, I
              am driven to explore uncharted territories and redefine what is
              achievable. Embracing every opportunity that comes my way, I
              eagerly anticipate the journey ahead, eager to shape a future
              filled with endless possibilities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="mb-6 text-2xl font-bold">My Skills</h1>
            <div className="z-10 flex flex-row flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="px-4 py-2 mt-2 mr-2 font-semibold text-black bg-gray-200 rounded"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={200}
              height={200}
              className="hidden pt-20 md:block md:relative md:bottom-4 md:left-20 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
