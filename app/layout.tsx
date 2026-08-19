import type { Metadata } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import "./globals.css";
const archivo=Archivo({variable:"--font-archivo",subsets:["latin"]});
const spaceMono=Space_Mono({variable:"--font-mono",subsets:["latin"],weight:["400","700"]});
export const metadata:Metadata={title:"Islam Elsaeed — Senior B2B Marketing Portfolio",description:"Selected work across B2B content, demand generation and AI-enabled marketing workflows.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${archivo.variable} ${spaceMono.variable}`}>{children}</body></html>}
