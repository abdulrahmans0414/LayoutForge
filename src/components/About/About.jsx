import React from "react";

function About() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Image Section (Left Side) */}
                <div className="flex justify-center md:justify-start">
                    <img
                        src="https://avatars.githubusercontent.com/u/101999767?v=4"
                        alt="Abdul Rahman"
                        className="rounded-lg shadow-lg w-full max-w-md"
                    />
                </div>

                {/* About Me Section (Right Side) */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        About <span className="text-orange-600">Me</span>
                    </h1>

                    {/* Professional Perspective */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Professional Perspective</h2>
                        <p className="text-lg text-gray-600">
                            I am a passionate web developer with expertise in building modern, responsive, and user-friendly web applications. I specialize in React, Tailwind CSS, and Node.js, and I love turning ideas into reality using the latest technologies.
                        </p>
                    </div>

                    {/* Personal Perspective */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Personal Perspective</h2>
                        <p className="text-lg text-gray-600">
                            Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers. I believe in continuous learning and sharing knowledge with the community.
                        </p>
                    </div>

                    {/* Skills Perspective */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills & Expertise</h2>
                        <ul className="text-lg text-gray-600 list-disc list-inside">
                            <li>React.js & Next.js</li>
                            <li>Tailwind CSS & Bootstrap</li>
                            <li>Node.js & Express.js</li>
                            <li>REST APIs & GraphQL</li>
                            <li>Git & GitHub</li>
                        </ul>
                    </div>

                    {/* Call-to-Action Buttons */}
                    <div className="space-x-4">
                        <a
                            href="https://github.com/abdulrahmans0414"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abdulrahmans0414/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
