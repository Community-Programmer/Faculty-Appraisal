import React, { useEffect, useState } from "react";
import './styles.css';
import cardBg1 from './cardBg1.jpg'
import admin from './admin.png'
import facul from './Teachers-icon.png'
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 325) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div>
        <div className="flex justify-between">
  <div className="text-black text-shadow-lg text-4xl">
    <b>GuruVista</b>
  </div>
</div>
<div>
  <p className="wave-text">
    <span className="head text-black m-3">An Automated System for Career Advancements of the Faculties</span>
  </p>
</div>
<div className="info bg-black text-white flex">
  <div className="w-full">
    <p className=" head2 text-center font-bold m-2">DIVERSITY DRIVES INNOVATION</p>
    <p className="ml-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor, veniam neque quas error numquam fugiat laudantium optio odio omnis incidunt dolorum vel consectetur itaque? Est minus voluptas, unde quasi modi nulla illo rerum? Atque quasi nihil dolore porro, doloribus necessitatibus minus omnis. Odit doloribus accusamus labore magni repellat iusto tempore qui corrupti reprehenderit accusantium, sint illo dolorum earum incidunt deleniti itaque vitae? Tempora inventore eius corporis eligendi cumque.</p>
  </div>
  <div className="flex flex-col items-center justify-center h-screen">
    <div className="flex justify-between w-4/5 h-4/5">
      {/* Top Quadrant */}
      <div className="flex-1 border border-gray-300 p-2 m-1 flex flex-col justify-center items-center">
        <p className="font-cursive text-xl"><u>Publications</u></p>
        <p>Tracking the publications made by faculty members and their contribution towards innovation beyond the classroom.</p>
      </div>

      {/* Right Quadrant */}
      <div className="flex-1 border border-gray-300 p-2 m-1 flex flex-col justify-center items-center">
        <p className="font-cursive text-xl"><u>Event Participation</u></p>
        <p>Tracking the events where the faculties have participated and the upcoming events in which they can participate as per their expertise.</p>
      </div>
    </div>

    <div className="flex justify-between w-4/5 h-4/5">
      {/* Left Quadrant */}
      <div className="flex-1 border border-gray-300 p-2 m-1 flex flex-col justify-center items-center">
        <p className="font-cursive text-xl"><u>Projects & Lectures</u></p>
        <p>Tracking the projects made by faculty members and lectures given by them.</p>
      </div>

      {/* Bottom Quadrant */}
      <div className="flex-1 border border-gray-300 p-2 m-1 flex flex-col justify-center items-center">
        <p className="font-cursive text-xl"><u>Performance</u></p>
        <p>Visualizing the performance of faculty members using pie charts and graphs.</p>
      </div>
    </div>
  </div>
</div>
<div className={`flex justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} text-center my-6`}>
    <p className="text-2xl font-bold bg-red-500 w-1/4"><u>Account Login Here</u></p>
</div>
<div className="flex justify-center my-6 mt-24">
  <div className="w-1/5 bg-white m-1 mr-4 flex flex-col justify-between border-2 border-red-500 relative">
    <img src={cardBg1} alt="Image not Found" className="w-full" />
    <div className="absolute left-1/2 top-[-25%] transform -translate-x-1/2 flex justify-center">
      <img src={admin} alt="Image not Found" className="border-2 border-red-500 rounded-full w-full bg-white" />
    </div>
    <p className="font-bold text-black text-center text-2xl">Administrator</p>
    <Button variant="outline">Login</Button>
  </div>

  <div className="w-1/5 bg-white m-1 ml-4 flex flex-col justify-between border-2 border-red-500 relative">
    <img src={cardBg1} alt="Image not Found" className="w-full" />
    <div className="absolute left-1/2 top-[-25%] transform -translate-x-1/2 flex justify-center">
      <img src={facul} alt="Image not Found" className="border-2 border-red-500 rounded-full w-full bg-white" />
    </div>
    <p className="font-bold text-black text-center text-2xl">Faculty</p>
    <Button variant="outline">Login</Button>
  </div>
</div>

      </div>
  );
}
