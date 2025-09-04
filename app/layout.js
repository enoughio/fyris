import { Teachers, Raleway, Bruno_Ace } from "next/font/google";
import "./globals.css";

const teachers = Teachers({
  subsets: ["latin"],
  weight: ["400",'600',"700"],
  variable: "--teachers",
});

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"], // Bruno Ace only has 400
  variable: "--brunoace",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--raleway",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${teachers.variable} ${raleway.variable} ${brunoAce.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
