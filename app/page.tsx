import SongCard from "@/components/common/song-card";

export default function Home() {
  return (
    <>
      <div className='bg-gradient h-64 w-full absolute top-0' />

      <div className='absolute w-full px-6 py-4'>
        <h1>Newest Songs</h1>
        <div className='grid grid-cols-card-flow gap-6'>
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
        </div>
      </div>
    </>
  );
}
