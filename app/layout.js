import { Teachers, Raleway } from "next/font/google";
import "./globals.css";

const teachers = Teachers({
  subsets: ["latin"],
  weight: ["400",'600',"700"],
  variable: "--teachers",
});


const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--raleway",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${teachers.variable} ${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
