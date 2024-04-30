import { Inter } from "next/font/google";
import { Navebar } from "@/components/Navbar";
import "./globals.css";
import { AuthProvider } from "./Providers";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import StoreProvider from "@/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sapne",
  description: "See your dream anytime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <StoreProvider> */}
            <AuthProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                  <Navebar/>
                  {children}
                  <Toaster/>
            </ThemeProvider>
            </AuthProvider>
        {/* </StoreProvider> */}
       </body>
    </html>
  );
}
