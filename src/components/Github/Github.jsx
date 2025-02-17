import React, { useEffect, useState } from "react";

const Github = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const username = "abdulrahmans0414";

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch GitHub profile");
                }
                const data = await response.json();
                setProfile(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [username]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-lg text-gray-600">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg text-center">

                {/* Profile Image */}
                <img
                    src={profile.avatar_url}
                    alt={profile.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                />

                {/* Name and Username */}
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile.name}</h1>
                <p className="text-lg text-gray-600 mb-6">@{profile.login}</p>

                {/* Bio */}
                {profile.bio && (
                    <p className="text-lg text-gray-600 mb-6">{profile.bio}</p>
                )}

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-xl font-bold text-gray-900">{profile.public_repos}</p>
                        <p className="text-sm text-gray-600">Repositories</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-xl font-bold text-gray-900">{profile.followers}</p>
                        <p className="text-sm text-gray-600">Followers</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-xl font-bold text-gray-900">{profile.following}</p>
                        <p className="text-sm text-gray-600">Following</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-xl font-bold text-gray-900">{profile.public_gists}</p>
                        <p className="text-sm text-gray-600">Gists</p>
                    </div>
                </div>

                {/* Location and Blog */}
                <div className="space-y-2 mb-6">
                    {profile.location && (
                        <p className="text-gray-600">
                            <span className="font-semibold">Location:</span> {profile.location}
                        </p>
                    )}
                    {profile.blog && (
                        <p className="text-gray-600">
                            <span className="font-semibold">Website:</span>{" "}
                            <a
                                href={profile.blog.startsWith("http") ? profile.blog : `http://${profile.blog}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:underline"
                            >
                                {profile.blog}
                            </a>
                        </p>
                    )}
                </div>

                {/* GitHub Link */}
                <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all duration-300"
                >
                    View on GitHub
                </a>
            </div>
        </div>


    )
}
export default Github
