import NavBar from "@/components/NavBar"
import { Space_Mono } from "next/font/google"

const space = Space_Mono({ subsets: ['latin'], weight: ['400'] })

export default function Page() {
    return (
        <main className={space.className}>
            <div className="bg-Void text-White">
                <nav><NavBar /></nav>
            </div>
        </main>
    )
}