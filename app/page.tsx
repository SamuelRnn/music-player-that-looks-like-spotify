import SongCard from "@/components/common/song-card";

export default function Home() {
  return (
    <main className='p-6'>
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
    </main>
  );
}
