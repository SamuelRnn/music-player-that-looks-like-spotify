import Image from "next/image";

interface Props {}

export default function SongCard({}: Props) {
  return (
    <div className='bg-black-charcoal p-4 transition-hover-intense aspect-[6/8] min-w-[150px] shadow-lg rounded-md hover:bg-gray-slate'>
      <Image
        src={"https://picsum.photos/200"}
        alt='image'
        width={200}
        height={200}
        className='shadow-md rounded-md'
      />
    </div>
  );
}
