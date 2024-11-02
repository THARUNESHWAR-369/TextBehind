import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../lib/ThemeProvider";
import { NextUIProvider } from "@nextui-org/react";
import { AuthContextProvider } from "@/lib/firebase/context/AuthContext";
import { NEXT_PUBLIC_URL } from "@/constants/constants";

const meta = {
  title: "TextBehind",
  description: "TextBehind is a platform where you can create images with text behind on them. You can use these images as wallpapers, social media posts, or any other purpose. You can also download the images you create. TextBehind is a free platform and you can use it without any registration. You can select the Object on the image and place the text behind the object. You can also change the color of the text and the background of the image. You can also download the images you create. TextBehind is a free platform and you can use it without any registration. You can select the Object on the image and place the text behind the object. You can also change the color of the text and the background of the image. You can also download the images you create.",
  image: `${NEXT_PUBLIC_URL}/og-preview.png`,
}

export const metadata: Metadata = {
  title: {
    template: "%s | TextBehind",
    default: "TextBehind",
  },
  keywords: "TextBehind, FastSAM, AI SAAS, SaaS, Tharuneshwar S, tharuneshwar s, tharuneshwars, tharuneshwar, Text behind Image, text behind image",
  description: meta.description,
  alternates: {
    canonical: NEXT_PUBLIC_URL,
    languages: {
      "en-US": NEXT_PUBLIC_URL,
    },
  },
  openGraph: {
    title: "TextBehind",
    description: "TextBehind is a platform where you can create images with text behind on them. You can use these images as wallpapers, social media posts, or any other purpose. You can also download the images you create. TextBehind is a free platform and you can use it without any registration. You can select the Object on the image and place the text behind the object. You can also change the color of the text and the background of the image. You can also download the images you create. TextBehind is a free platform and you can use it without any registration. You can select the Object on the image and place the text behind the object. You can also change the color of the text and the background of the image. You can also download the images you create.",
    url: NEXT_PUBLIC_URL,
    siteName: meta.title,
    type: "website",
    locale: "en-US",
    images: [
      {
        url: meta.image,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`relative`}
      >
        <NextUIProvider>
          <ThemeProvider
            defaultTheme="dark"
          >
            <AuthContextProvider>
              {children}
            </AuthContextProvider>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>

  );
}
