import { Figtree } from "next/font/google";

import "./globals.css";
import "./transitions.css";

import AudioPlayer from "@/components/audio-player";
import Sidebar from "@/components/sidebar";
import Box from "@/components/common/box";

const inter = Figtree({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Not an spotify clone",
  description: "A pretty music player that just happens to look like Spotify",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col h-screen'>
          <div className='p-2 flex flex-grow gap-2 w-full'>
            <Sidebar />
            <Box className='w-full overflow-y-scroll'>
              <header>header</header>
              <main>{children}</main>
            </Box>
          </div>
          <AudioPlayer />
        </div>
      </body>
    </html>
  );
}
