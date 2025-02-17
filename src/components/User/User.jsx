import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Mock user data (replace with API call in a real app)
const users = [
    { id: "1", name: "Abdul Rahman", role: "Developer", bio: "Passionate web developer and open-source enthusiast.", image: "https://avatars.githubusercontent.com/u/143753150?v=4" },
    { id: "2", name: "Abdul Salam", role: "Physiotherapist", bio: "Physiotherapist with a passion for health and wellness.", image: "https://media.licdn.com/dms/image/v2/D5635AQHUDW2cJ7q9bA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1656564701134?e=1740430800&v=beta&t=7REcnI33s7SWfnbJ75rUhNACUCfqUwSj263OGSlWoWw" },

];

function User() {
    const { userid } = useParams();
    const navigate = useNavigate();

    // Find the user by ID
    const user = users.find((u) => u.id === userid);

    // Handle back button click
    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">

                {/* Back Button */}
                <button
                    onClick={handleBack}
                    className="mb-6 text-gray-600 hover:text-orange-600 transition-all duration-300"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        ></path>
                    </svg>
                    <span className="sr-only">Back</span>
                </button>

                {/* User Profile Card */}
                {user ? (
                    <div>
                        <img
                            src={user.image}
                            alt={user.name}
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
                        <p className="text-lg text-gray-600 mb-6">{user.bio}</p>

                        {/* Additional Info (Optional) */}
                        <div className="space-y-2">
                            <p className="text-gray-600">
                                <span className="font-semibold">ID:</span> {user.id}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">Role:</span> {user.role}
                            </p>
                        </div>
                    </div>
                ) : (
                    <p className="text-lg text-gray-600">User not found.</p>
                )}
            </div>
        </div>
    );
}

export default User;