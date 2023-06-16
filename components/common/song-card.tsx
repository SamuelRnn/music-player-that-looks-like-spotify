import Image from "next/image";

interface Props {}

export default function SongCard({}: Props) {
  return (
    <div className='bg-black-charcoal p-4 transition-hover-intense aspect-[11/16] shadow-lg rounded-md hover:bg-gray-slate'>
      <Image
        src={"https://picsum.photos/200"}
        alt='image'
        width={200}
        height={200}
        className='shadow-lg shadow-black-full/30 rounded-md w-full aspect-square'
      />
      <p className='overflow-hidden text-ellipsis whitespace-nowrap font-bold mt-4'>
        título de canción genérico
      </p>
      <p className='overflow-hidden text-ellipsis whitespace-nowrap mt-2 text-gray-mist'>
        artista genérico
      </p>
    </div>
  );
}
