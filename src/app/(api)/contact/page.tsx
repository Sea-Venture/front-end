import NavBar from '@/app/components/organism/landingPage/navBar';
import React from 'react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const teamMembers = [
    {
        name: "Nethsara Prabash Dissanayake",
        role: "Project Manager / Backend Developer",
        image: "/profile/nethsara.jpg",
        linkedin: "https://www.linkedin.com/in/nethsara-prabash",
        github: "https://github.com/nethsaraPrabash"
    },
    {
        name: "Senalee Visal",
        role: "Software Architect / DevOps Engineer",
        image: "/profile/senalee.jpg",
        linkedin: "https://www.linkedin.com/in/senalee-visal",
        github: "https://github.com/senaleevisal"
    },
    {
        name: "Chithmi DIlakshika",
        role: "UI/UX Designer / Frontend Developer",
        image: "https://media.licdn.com/dms/image/v2/D5603AQESp47kWAo5cw/profile-displayphoto-shrink_800_800/B56ZTpeA8IHQAc-/0/1739083747940?e=1754524800&v=beta&t=nhvr5cKEoBAV7sqLtATOf7PRKFbK3Z9cq-jV_Jn9fuw",
        linkedin: "https://www.linkedin.com/in/chithmi-dilaksha-9396a7344",
        github: "https://github.com/ChithmiDilaksha"
    },
    {
        name: "Safra Siyam",
        role: "Frontend Developer",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFdg4S3BidrnQ/profile-displayphoto-shrink_800_800/B56ZbX80_fGgAg-/0/1747379778784?e=1754524800&v=beta&t=SuM-52BJMZ2gIvvFUnkMTXUk1vMPFkDvmdC1OOcHbRU",
        linkedin: "https://www.linkedin.com/in/safra-siyam",
        github: "https://github.com/safra-siyam"
    },
];

const Team = () => {
    return (
        <>
            <NavBar />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100">
                <section className="w-full max-w-6xl text-center p-8 bg-white/80 backdrop-blur rounded-2xl shadow-2xl mx-4 my-8 flex flex-col items-center justify-center">
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-2 text-blue-800 drop-shadow">Team SeaVentures</h3>
                    <p className="mb-8 text-blue-700 font-medium">Passionate developers behind SeaVentures</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg flex flex-col items-center p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-300 shadow"
                                />
                                <h4 className="text-lg font-semibold text-blue-700">{member.name}</h4>
                                <p className="text-blue-600">{member.role}</p>
                                <div className="flex space-x-4 mt-4">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
                                        <FaLinkedin size={28} />
                                    </a>
                                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700 transition">
                                        <FaGithubSquare size={28} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Team;