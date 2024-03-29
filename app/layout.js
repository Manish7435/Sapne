import { Inter } from "next/font/google";
import { Navebar } from "@/components/Navbar";
import "./globals.css";
import { AuthProvider } from "./Providers";
// import StoreProvider from "@/components/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sapne",
  description: "see your dream anytime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* <StoreProvider> */}
              <Navebar/>
              {children}
          {/* </StoreProvider> */}
        </AuthProvider>
       </body>
    </html>
  );
}
