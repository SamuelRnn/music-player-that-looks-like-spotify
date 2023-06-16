import Image from "next/image";
import PlayButton from "./play-button";
import { Song } from "@/models/song.model";

interface Props {
  songData: Song;
}

const DEFAULT: Song = {
  id: "genérico-5n5vk34b",
  title: "título de canción genérica",
  artists: ["Gerardo Caminos", "artistas genéricos pero felices"],
  coverRoute: "https://picsum.photos/200",
};

export default function SongCard({ songData = DEFAULT }: Props) {
  return (
    <div className='bg-black-charcoal p-4 transition-hover-intense aspect-[11/16] shadow-lg shadow-black-full/30 rounded-md hover:bg-gray-slate song-card'>
      <div className='relative'>
        <Image
          src={songData.coverRoute}
          alt='image'
          width={200}
          height={200}
          className='shadow-lg object-cover shadow-black-full/30 rounded-md w-full aspect-square bg-gray-slate'
        />

        <div className='aspect-square absolute bottom-2 right-2 translate-y-3 opacity-0 cursor-pointer transition-hover-intense play-button '>
          <PlayButton className='hover:bg-green-lime-light' />
        </div>
      </div>

      {/* song information */}
      <p className='overflow-hidden text-ellipsis whitespace-nowrap font-bold mt-4'>
        {songData.title}
      </p>
      <p className='overflow-hidden text-ellipsis whitespace-nowrap mt-2 text-gray-mist'>
        {songData.artists.join(", ")}
      </p>
    </div>
  );
}
