"use client";

import { connectToDatabase } from "@/lib/mongodb";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  const {toast} = useToast()

  const onSubmit = async (data) => {
    const { name, email, password } = data;

    const isVerified = false
    
    await connectToDatabase();
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
        toast({title: "Dreamer already exists"})
        return;
      }

      const res = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name.toLowerCase(), email: email.toLowerCase(), password ,isVerified }),
      });

      if (res.ok) {
        toast({title: "Dreamer registered successfully"})
        reset();
        router.push("/mydreams");
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
        <div className="mb-10 font-semibold text-3xl  ">REGISTER</div>
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="text" placeholder="Fullname" {...register("name")} />
          <input type="email" placeholder="Email" {...register("email")} />
          <input type="password" placeholder="Password" {...register("password")} />
          <input
            type="submit"
            className="bg-[#FA7484] px-8 py-2 rounded-md flex justify-center cursor-pointer font-medium w-[300px]"
          />
        </form>
      </div>

      <div className="text-sm mt-3 ">
        Already have account
        <Link href={"/login"}>
          <span className="ml-1 underline">login here</span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Register;
