import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prachi Menaria | Aspiring Software Developer & Product Thinker",
  description: "Portfolio of Prachi Menaria, a recent BCA graduate passionate about thoughtful digital experiences, software development, and product design.",
};

import MainStory from "@/components/sections/MainStory";
import Navbar from "@/components/ui/Navbar";
import AmbientBackground from "@/components/ui/AmbientBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AmbientBackground />
      <Navbar />
      <MainStory />
    </main>
  );
}

