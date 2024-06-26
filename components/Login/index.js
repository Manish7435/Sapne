"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
import {setCookie} from "@/utils/cookies";

const Login = () => {

  const {data} = useSession();

  const { register, handleSubmit } = useForm();

  const router = useRouter()

  const [error, setError]= useState("")

  if(data){
    setCookie('user_id',data?.token.sub)
    setCookie('user_name',data?.token.name)
  }

  const onSubmit = async (data) => {
    const {email, password} = data
   
   try{
    const res =  await signIn('credentials',{
        email: email.toLowerCase(),
        password,
        redirect: false
      })
      if(res.error){
        setError('wrong credentials')
      }
      if(res.ok){
      router.replace('mydreams')
    }
     
   }catch(e){
      console.log('error while login',e)
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
          {error && <div className="bg-red">
            {error}
            </div>}
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
