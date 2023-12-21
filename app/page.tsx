import NavBar from "@/components/NavBar"
import Intro from "@/components/Intro"

export default function Page() {
  return (
    <div
      style={{ backgroundImage: `url(${'/images/bgimage.jpg'})` }}
      className="h-screen bg-cover bg-center text-white border-b-8 border-b-solid border-b-slate-400"
    >
      <NavBar />
      <Intro />
    </div>
  )
}