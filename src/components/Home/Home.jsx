import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* About Me Section (Left Side) */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Hi, I'm <span className="text-orange-600">Abdul Rahman</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        A passionate web developer with expertise in building modern, responsive, and user-friendly web applications. I love turning ideas into reality using the latest technologies.
                    </p>
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

                {/* Image Section (Right Side) */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="https://avatars.githubusercontent.com/u/143753150?v=4"
                        alt="Abdul Rahman"
                        className="rounded-lg shadow-lg w-full max-w-md"
                    />
                </div>
            </div>
        </div>
    )
};

export default Home;
