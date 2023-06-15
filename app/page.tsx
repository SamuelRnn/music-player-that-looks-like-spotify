import SongCard from "@/components/common/song-card";

export default function Home() {
  return (
    <main>
      <h1>Holis</h1>
      <div className='flex gap-6 p-6'>
        <SongCard />
        <SongCard />
      </div>
    </main>
  );
}
