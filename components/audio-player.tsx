interface Props {}

export default function AudioPlayer({}: Props) {
  return (
    <section className='h-20 px-4 pb-2'>
      <div className='py-2 flex w-full h-full'>
        <div className='aspect-square rounded-md bg-zinc-800'></div>
      </div>
    </section>
  );
}
