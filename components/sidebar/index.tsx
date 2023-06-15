import Library from "./library";
import Navigation from "./navigation";

interface Props {}

export default function Sidebar({}: Props) {
  return (
    <div className='w-96 space-y-2 flex flex-col'>
      <Navigation />
      <Library />
    </div>
  );
}
