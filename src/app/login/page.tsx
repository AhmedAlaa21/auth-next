"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast/headless";

const LoginPage = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login successful", response);
      toast.success("Login successful");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login Failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2 gap-y-5">
      <h1 className="mb-2 text-4xl ">{loading ? "Processing" : "Login"}</h1>
      <label className="" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter your email address"
        className="p-2 focus:outline-sky-200 rounded text-black"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Enter your password"
        className="p-2 focus:outline-sky-200 rounded text-black"
      />
      <button
        className="p-2 border border-gray-300 rounded-lg mb-4 
      focus:outline-none focus:border-gray-600"
        onClick={onLogin}
      >
        {buttonDisabled ? "Fill Data" : "Login"}
      </button>
      <Link href="/signup">No account? go to Signup page</Link>
    </div>
  );
};

export default LoginPage;
