import Register from "@/components/Registration";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from '../api/auth/[...nextauth]/route';

export default function Registeration(){

    const session = getServerSession(authOptions)
         if(session) redirect('/')
    return <Register/>
}