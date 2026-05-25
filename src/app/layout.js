import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DocAppoint - Home",
  description: "Welcome to our doctor appointment platform where you can easily find and book appointments with trusted healthcare professionals. Our system is designed to save your time by providing a smooth and secure booking experience. Whether you need a general checkup or specialist consultation, we help you connect with the right doctor quickly and efficiently.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme = "light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
       <main> {children}</main>
       <Footer></Footer>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
        </body>
    </html>
  );
}
