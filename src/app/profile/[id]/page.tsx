import React from "react";

const UserProfile = ({ params }: any) => {
  console.log({ params });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <p className="text-4xl">
        Profile page
        <span className="inline-block ms-1 p-2 rounded bg-orange-500 text-black">
          {params.id}
        </span>
      </p>
    </div>
  );
};

export default UserProfile;
