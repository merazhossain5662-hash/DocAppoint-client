import AllAppointment from "@/components/AllAppoinmentsPage"


export async function generateMetadata() {
  return {
    title: "DocAppoint - All Appoinments",
    description: "View and manage all your doctor appointments in one place. This page allows you to track upcoming visits, review past consultations, and stay organized with your healthcare schedule. Easily access appointment details and make updates whenever needed.",
  }
}

export default function page(){
  return <AllAppointment></AllAppointment>
}