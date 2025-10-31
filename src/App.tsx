import Icon from '@mdi/react';
import { mdiMicrosoftEdge } from '@mdi/js';
import { SiGooglechrome, SiFirefoxbrowser } from "react-icons/si";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
        <div className="flex items-center space-x-2">
          <img
            src="/icon.png"
            alt="BibleVerse Gate logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl font-bold">BibleVerse Gate</h1>
        </div>
        <div className="space-x-6 text-sm text-gray-300">
          <a href="#">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#why-it-works">Why It Works</a>
          <a href="#newsletter">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow px-8 py-20 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight max-w-3xl">
          Protect your peace with{" "}
          <span className="text-yellow-400">BibleVerse Gate</span>
        </h2>
        <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-2xl">
          BibleVerse Gate helps you pause and reflect before diving into distractions.
          By typing a short verse first, your brain shifts from impulse to intention —
          creating mindfulness, calm, and self-control before you go online.
        </p>

        {/* Add to Browser Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Chrome */}
          <a
            href="https://chromewebstore.google.com/detail/hjfkkmicachgbmpndhelcdhjmapkpkpm?utm_source=item-share-cb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition shadow-md hover:shadow-yellow-500/30"
          >
            <SiGooglechrome className="w-6 h-6 mr-2 text-black" />
            Add to Chrome
          </a>

          {/* Firefox */}
          <a
            href="https://addons.mozilla.org/en-CA/firefox/addon/bibleverse-gate/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition shadow-md hover:shadow-orange-500/30"
          >
            <SiFirefoxbrowser className="w-6 h-6 mr-2" />
            Add to Firefox
          </a>

          {/* Edge */}
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/bibleverse-gate/dfloamcjahcaiegccioihfoongjddljg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition shadow-md hover:shadow-blue-500/30"
          >
            <Icon path={mdiMicrosoftEdge} size={1} className="mr-2 text-white" />
            Add to Edge
          </a>
        </div>
      </main>
    </div>
  );
}
