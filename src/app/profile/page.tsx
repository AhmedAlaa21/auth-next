"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      console.log("Logged out");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/me");
    console.log(response.data);
    setData(response.data.data._id);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2"
      suppressHydrationWarning
    >
      <h1>Profile</h1>
      <p>Profile page</p>
      <h2>
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>My Account</Link>
        )}
      </h2>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 rounded py-2 px-4 font-bold"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="bg-purple-500 mt-4 hover:bg-purple-700 rounded py-2 px-4 font-bold"
      >
        get details
      </button>
    </div>
  );
};

export default Profile;
