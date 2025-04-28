import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "../pageCSS/team.css"; // Import the CSS

const Team = () => {
  return (
    <div>
      <Navbar />
      <header className="team-header">
        {/* <div className="team-container"></div> */}
      </header>

      <section className="team-members">
        <div className="team-container">
          <h2 className="team-heading">Our Team</h2>
          <div className="team-member-list">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={member.name} className="team-image" />
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const teamMembers = [
  {
    name: "Yasaswi Kopparapu",
    role: "Team Lead, Backend Developer",
    image: "/yasaswi.jpg"
  },
  {
    name: "Alan Munigety",
    role: "Backend Developer",
    image: "/alan.jpg"
  },
  {
    name: "Harshal Kumar",
    role: "Frontend Developer",
    image: "/harshal.jpg"
  },
  {
    name: "Dhanashree Patil",
    role: "Frontend Developer",
    image: "/dhana.jpg"
  },
  {
    name: "Mr Harshit Mittal",
    role: "Co-founder & Chief Executive Officer",
    image: "/harshit.jpg"
  },
  {
    name: "Mr Vivek Yadav",
    role: "Co-founder & Chief of Management and Industrial Relations",
    image: "/vivek.jpg"
  }
];

export default Team;
