import Icon from '@mdi/react';
import { mdiMicrosoftEdge } from '@mdi/js';
import { SiGooglechrome, SiFirefoxbrowser } from "react-icons/si";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-zinc-800">
  <div className="flex items-center space-x-2 mb-2 sm:mb-0">
    <img
      src="/icon.png"
      alt="BibleVerse Gate logo"
      className="w-10 h-10 object-contain"
    />
    <h1 className="text-lg sm:text-xl font-bold whitespace-nowrap">BibleVerse Gate</h1>
  </div>

  <div className="flex flex-wrap justify-center sm:justify-end w-full sm:w-auto space-x-4 text-sm text-gray-300">
    <a href="#" className="hover:text-yellow-400 transition">Home</a>
    <a href="#how-it-works" className="hover:text-yellow-400 transition">How It Works</a>
    <a href="#why-it-works" className="hover:text-yellow-400 transition">Why It Works</a>
    <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
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

        {/* Browser Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Chrome */}
          <a
            href="https://chromewebstore.google.com/detail/hjfkkmicachgbmpndhelcdhjmapkpkpm?utm_source=item-share-cb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition transform hover:scale-105 shadow-md hover:shadow-yellow-500/30"
          >
            <SiGooglechrome className="w-6 h-6 mr-2 text-black" />
            Add to Chrome
          </a>

          {/* Firefox */}
          <a
            href="https://addons.mozilla.org/en-CA/firefox/addon/bibleverse-gate/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition transform hover:scale-105 shadow-md hover:shadow-orange-500/30"
          >
            <SiFirefoxbrowser className="w-6 h-6 mr-2" />
            Add to Firefox
          </a>

          {/* Edge */}
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/bibleverse-gate/dfloamcjahcaiegccioihfoongjddljg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition transform hover:scale-105 shadow-md hover:shadow-blue-500/30"
          >
            <Icon path={mdiMicrosoftEdge} size={1} className="mr-2 text-white" />
            Add to Edge
          </a>
        </div>
      </main>

      {/* HOW IT WORKS SECTION */}
      <section
        id="how-it-works"
        className="px-6 py-24 border-t border-zinc-800 bg-zinc-950 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-400 mb-16 text-lg max-w-3xl mx-auto">
          BibleVerse Gate transforms your browsing into a mindful experience —
          from setup to reflection. Here’s how it flows:
        </p>

        <div className="flex flex-col items-center justify-center space-y-24">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-full">
            <div className="w-full lg:w-[60%] bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.03] transition-transform duration-300">
              <img
                src="/add_site2.gif"
                alt="Add sites to guard"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-3">
                Step 1 — Add Sites to Guard
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                From the popup or dashboard, add websites that tend to distract you.
                BibleVerse Gate will gently intercept them next time.
              </p>
            </div>
          </div>

          <div className="text-yellow-500 text-8xl animate-pulse">↓</div>

          {/* Step 2 */}
          <div className="flex flex-col items-center w-full">
            <div className="w-full lg:w-[60%] bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.03] transition-transform duration-300">
              <img
                src="/unlock_site2.gif"
                alt="Type verse to unlock"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-3">
                Step 2 — Pause and Type a Verse
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                When you open a guarded site, a calming Bible verse appears.
                Type it to unlock access — a mindful pause before you continue.
              </p>
            </div>
            <p className="text-sm text-gray-500 italic mt-4 max-w-xl mx-auto leading-relaxed">
              Note: In this demo, the background behind YouTube is blurred and the video
              speed is increased for presentation purposes. The actual extension simply
              pauses access until the verse is typed, then returns the site to normal.
            </p>
          </div>

          <div className="text-yellow-500 text-8xl animate-pulse">↓</div>

          {/* Step 3 */}
          <div className="flex flex-col items-center w-full">
            <div className="w-full lg:w-[60%] bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.03] transition-transform duration-300">
              <img
                src="/dashboard2.gif"
                alt="Dashboard management"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-3">
                Step 3 — Manage Your Guarded Sites
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Use the dashboard anytime to view, add, or remove your guarded websites —
                keeping your experience simple and under control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT WORKS SECTION */}
      <section
        id="why-it-works"
        className="px-6 py-24 border-t border-zinc-800 bg-zinc-950 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Why It Works</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-16">
          BibleVerse Gate isn’t just a blocker — it’s a moment of mindfulness.
          Instead of relying on willpower alone, it helps you pause, reflect,
          and realign your intentions before diving online.
        </p>

        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-lg hover:scale-[1.03] transition-transform duration-300">
            <div className="text-yellow-400 text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-3">Break the Habit Loop</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Distraction is often automatic. The verse prompt interrupts that
              reflex and gives your brain time to make a conscious choice.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-lg hover:scale-[1.03] transition-transform duration-300">
            <div className="text-yellow-400 text-4xl mb-4">🙏</div>
            <h3 className="text-xl font-semibold mb-3">Refocus on Scripture</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every verse gently redirects your attention from impulse toward
              peace, faith, and intentional living.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-lg hover:scale-[1.03] transition-transform duration-300">
            <div className="text-yellow-400 text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-semibold mb-3">Practice Mindful Browsing</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              With each pause, you’re training awareness — turning browsing from
              a habit into a mindful, intentional act.
            </p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section
        id="newsletter"
        className="min-h-[60vh] flex flex-col items-center justify-center text-center bg-zinc-950 px-6 py-16 border-t border-zinc-800"
      >
        <h3 className="text-3xl font-semibold mb-4">Stay Connected</h3>
        <p className="text-gray-400 mb-8 max-w-md">
          Get updates on new versions, verse packs, and mindful tech insights.
        </p>

        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg w-full max-w-md">
          <form
            action="https://formspree.io/f/mblpkder"
            method="POST"
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-full bg-zinc-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition shadow-md hover:shadow-yellow-500/30"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            You’ll receive occasional updates from BibleVerse Gate.
          </p>
        </div>
      </section>

      {/* CONTACT / FEEDBACK SECTION */}
      <section
        id="contact"
        className="relative px-6 py-24 border-t border-zinc-800 bg-zinc-950 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Feedback & Support</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          This is version 1.0 — your feedback helps improve BibleVerse Gate.
          Share your thoughts, issues, or ideas below.
        </p>

        <form
          action="https://formspree.io/f/mblpkajp"
          method="POST"
          className="max-w-xl mx-auto bg-zinc-900/60 backdrop-blur-xl border border-zinc-700 rounded-2xl p-8 shadow-2xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full mb-5 px-4 py-3 rounded-lg bg-transparent border border-zinc-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full mb-5 px-4 py-3 rounded-lg bg-transparent border border-zinc-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message..."
            required
            className="w-full mb-6 px-4 py-3 rounded-lg bg-transparent border border-zinc-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-6">
          You can also reach us directly at{" "}
          <span className="text-indigo-400">support@bibleversegate.com</span>
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 text-gray-500 text-sm text-center py-6">
        <p>© {new Date().getFullYear()} BibleVerse Gate. All rights reserved.</p>
      </footer>
    </div>
  );
}
