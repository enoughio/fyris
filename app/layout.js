import { Teachers } from "next/font/google";
import "./globals.css";

const teachers = Teachers({
  subsets: ["latin"],
  weight: ["400",'600',"700"],
  variable: "--teachers",
});




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${teachers.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
