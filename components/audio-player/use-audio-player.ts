import { create } from "zustand";
// import { songs } from "@/public/songs-map.json";

const useAudioPlayer = create((set) => ({
  currentSrc: "",
  isPlaying: false,
  currentSongId: "",
}));
