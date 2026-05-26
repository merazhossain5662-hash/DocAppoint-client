import AllAppointment from "@/components/AllAppoinmentsPage"
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


export async function generateMetadata() {
  return {
    title: "DocAppoint - All Appoinments",
    description: "View and manage all your doctor appointments in one place. This page allows you to track upcoming visits, review past consultations, and stay organized with your healthcare schedule. Easily access appointment details and make updates whenever needed.",
  }
}

export default async function page(){
          
  return <AllAppointment></AllAppointment>
}