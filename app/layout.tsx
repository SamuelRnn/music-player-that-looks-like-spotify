import Sidebar from "@/components/sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";
import AudioPlayer from "@/components/audio-player";
import Box from "@/components/common/box";

const inter = Figtree({ weight: ["400", "600"], subsets: ["latin"] });

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
            <Box className='w-full'>
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
