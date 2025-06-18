import React from 'react';

function ProfileHover() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-white rounded-md shadow-lg border border-gray-200 p-4 w-56 text-sm space-y-2">
      <div className="text-gray-800 font-semibold">
        {user?.email || "Unknown User"}
      </div>
      <hr className="my-2" />
      <button className="w-full text-left hover:text-purple-600">Change Password</button>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          window.location.href = '/';
        }}
        className="w-full text-left text-red-600 hover:text-red-800"
      >
        Logout
      </button>
    </div>
  );
}

export default ProfileHover;
