import type { Metadata } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import "./globals.css";
const archivo=Archivo({variable:"--font-archivo",subsets:["latin"]});
const spaceMono=Space_Mono({variable:"--font-mono",subsets:["latin"],weight:["400","700"]});
export const metadata:Metadata={
  metadataBase:new URL("https://islam-elsaeed-b2b-portfolio.islam-elsaid.chatgpt.site"),
  title:"Islam Elsaeed — Senior B2B Marketing Portfolio",
  description:"Senior B2B marketing work across GTM, partner ecosystems, demand generation, data and AI-enabled workflows.",
  icons:{icon:"/favicon.svg"},
  openGraph:{title:"Islam Elsaeed — Senior B2B Marketing Portfolio",description:"GTM, partner ecosystems and measurable demand for complex B2B markets.",images:[{url:"/og.png",width:1672,height:941,alt:"Islam Elsaeed — Senior B2B Marketing Portfolio"}],type:"website"},
  twitter:{card:"summary_large_image",title:"Islam Elsaeed — Senior B2B Marketing Portfolio",description:"GTM, partner ecosystems and measurable demand for complex B2B markets.",images:["/og.png"]}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${archivo.variable} ${spaceMono.variable}`}>{children}</body></html>}
