"use client";

import { connectToDatabase } from "@/lib/mongodb";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const { name, email, password } = data;
    await connectToDatabase();

    fetch("/api/user/exists");
    try {
      const userExists = await fetch("/api/user/exists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await userExists.json();

      if (user) {
        console.log("user already exists");
        return;
      }

      const res = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        reset();
        router.push("/login");
      } else {
        console.log("user registartion failed");
      }
    } catch (e) {
      console.log("error while user registration");
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-login-bg ">
      <div className="flex flex-col items-center">
        <div className="mb-10 font-semibold text-3xl  ">LOGIN</div>
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="text" placeholder="Email" {...register("email")} />
          <input type="text" placeholder="Password" {...register("password")} />
          <input
            type="submit"
            className="bg-[#FA7484] px-8 py-2 rounded-md flex justify-center cursor-pointer font-medium w-[300px]"
          />
        </form>
      </div>

      <div className="text-sm mt-3 ">
        Don&apos;t have account
        <Link href={"/register"}>
          <span className="ml-1 underline">register here</span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Login;
