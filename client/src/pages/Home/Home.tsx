import React from "react";
import './styles.css';
import cardBg1 from './cardBg1.jpg'
import admin from './images.png'
import facul from './Teachers-icon.png'
export default function Home() {

  return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textShadow: '3px 3px 3px gray', fontSize: '40px' }}>
            <b>GuruVista</b>
          </div>
        </div>
        <div>
          <p className="wave-text">
            <span style={{ textShadow: '2px 2px 2px red',margin:'10px'}}>An Automated System for Career Advancements of the Faculties</span>
          </p>
        </div>
        <div className="info" style={{ display: 'flex' }}>
          <div style={{ width: '100%' }}>
            <p style={{ textAlign: 'center', fontWeight: 'bolder', textShadow: '1px 1px 1px red' }}>DIVERSITY DRIVES INNOVATION</p>
            <p style={{ marginLeft: '20%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor, veniam neque quas error numquam fugiat laudantium optio odio omnis incidunt dolorum vel consectetur itaque? Est minus voluptas, unde quasi modi nulla illo rerum? Atque quasi nihil dolore porro, doloribus necessitatibus minus omnis. Odit doloribus accusamus labore magni repellat iusto tempore qui corrupti reprehenderit accusantium, sint illo dolorum earum incidunt deleniti itaque vitae? Tempora inventore eius corporis eligendi cumque.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', height: '80%' }}>
              {/* Top Quadrant */}
              <div style={{ flex: 1, border: '1px solid #ccc', padding: '10px', margin: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <p style={{ fontFamily: 'cursive', fontSize: '20px' }}><u>Publications</u></p>
                <p>Tracking the publications made by faculty members and their contribution towards innovation beyond the classroom.</p>
              </div>

              {/* Right Quadrant */}
              <div style={{ flex: 1, border: '1px solid #ccc', padding: '10px', margin: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <p style={{ fontFamily: 'cursive', fontSize: '20px' }}><u>Event Participation</u></p>
                <p>Tracking the events where the faculties have participated and the upcoming events in which they can participate as per their expertise.</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', height: '80%' }}>
              {/* Left Quadrant */}
              <div style={{ flex: 1, border: '1px solid #ccc', padding: '10px', margin: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <p style={{ fontFamily: 'cursive', fontSize: '20px' }}><u>Projects & Lectures</u></p>
                <p>Tracking the projects made by faculty members and lectures given.</p>
              </div>

              {/* Bottom Quadrant */}
              <div style={{ flex: 1, border: '1px solid #ccc', padding: '10px', margin: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <p style={{ fontFamily: 'cursive', fontSize: '20px' }}><u>Performance</u></p>
                <p>Visualizing the performance of faculty members using pie charts and graphs.</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '40px', marginTop: '100px' }}>
          <div style={{ width: '22%', backgroundColor: 'white', margin: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '3px solid red', position: 'relative' }}>
            <img src={cardBg1} alt="Image not Found" style={{ width: '100%' }} />
            <div style={{ position: 'absolute', left: '50%', top: '-25%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'center' }}>
              <img src={admin} alt="Image not Found" style={{ border: '2px solid red', borderRadius: '50%', width: '100%', backgroundColor: 'white' }} />
            </div>
            <p style={{ fontWeight: 'bolder', color: 'black', textAlign: 'center', fontSize: '25px' }}>Administrator</p>
            <button style={{ width: '100%', backgroundColor: 'red', margin: '10px 0 0', padding: '12px', borderRadius: '15px' }}>
              <a href="/adminLogin" style={{ textDecoration: 'none', color: 'white' }}>Login</a>
            </button>
          </div>

          <div style={{ width: '22%', backgroundColor: 'white', margin: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '3px solid red', position: 'relative' }}>
            <img src={cardBg1} alt="Image not Found" style={{ width: '100%' }} />
            <div style={{ position: 'absolute', left: '50%', top: '-25%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'center' }}>
              <img src={facul} alt="Image not Found" style={{ border: '2px solid red', borderRadius: '50%', width: '100%', backgroundColor: 'white' }} />
            </div>
            <p style={{ fontWeight: 'bolder', color: 'black', textAlign: 'center', fontSize: '25px' }}>Faculty</p>
            <button style={{ width: '100%', backgroundColor: 'red', margin: '10px 0 0', padding: '12px', borderRadius: '15px' }}>
              <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Login</a>
            </button>
          </div>
        </div>
      </div>
  );
}
