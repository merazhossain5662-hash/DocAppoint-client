import Corporet from "@/components/Corporet";
import Featurs from "@/components/featurs";
import Hero from "@/components/Hero";
import TopDocs from "@/components/TopDocs";
import Image from "next/image";

export default function Home() {
  return (
   <div>
   <Hero></Hero>
   <TopDocs></TopDocs>
   <Featurs></Featurs>
   <Corporet></Corporet>
   </div>
  );
}
