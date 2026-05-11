function App() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #fffbf0 100%)' }}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl font-bold tracking-wide"
            style={{
              fontFamily: "'Permanent Marker', cursive",
              color: '#1a1a2e',
              textShadow: '4px 4px 0 #06d6a0',
              transform: 'rotate(-1.5deg)',
              display: 'inline-block',
            }}
          >
            IGCSE Computer Science
          </h1>
          <p
            className="mt-4 text-xl"
            style={{ fontFamily: "'Caveat', cursive", color: '#118ab2' }}
          >
            Edexcel 4CP01 — Data Topic 3: Binary
          </p>
          <p
            className="mt-3 text-base max-w-xl mx-auto"
            style={{ fontFamily: "'Kalam', cursive", color: '#555' }}
          >
            Interactive study resources with mind maps, topic notes, exam-style
            questions, activities, and quizzes.
          </p>
        </div>

        {/* Topic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {/* Homepage Card */}
          <a
            href="binary-home.html"
            className="block rounded-2xl border-4 p-6 transition-all duration-200 hover:-translate-y-1"
            style={{
              borderColor: '#1a1a2e',
              background: 'white',
              boxShadow: '5px 5px 0 #1a1a2e',
            }}
          >
            <div
              className="text-3xl mb-3"
            >
              💾
            </div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "'Permanent Marker', cursive", color: '#1a1a2e' }}
            >
              Binary Home
            </h2>
            <p
              className="text-sm mb-3"
              style={{ fontFamily: "'Kalam', cursive", color: '#555' }}
            >
              Start here — overview, learning path, and links to all four
              subtopics (3.1–3.4).
            </p>
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-bold"
              style={{
                fontFamily: "'Caveat', cursive",
                background: '#e3f2fd',
                color: '#118ab2',
                border: '2px solid #118ab2',
              }}
            >
              Start Learning →
            </span>
          </a>

          {/* 3.1 */}
          <a
            href="binary-3.1.html"
            className="block rounded-2xl border-4 p-6 transition-all duration-200 hover:-translate-y-1"
            style={{
              borderColor: '#118ab2',
              background: 'white',
              boxShadow: '5px 5px 0 #118ab2',
            }}
          >
            <div className="text-3xl mb-3">💻</div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "'Permanent Marker', cursive", color: '#118ab2' }}
            >
              Topic 3.1
            </h2>
            <p
              className="text-sm mb-3"
              style={{ fontFamily: "'Kalam', cursive", color: '#555' }}
            >
              Binary basics — why computers use binary, converting between
              binary and denary (0–255).
            </p>
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-bold"
              style={{
                fontFamily: "'Caveat', cursive",
                background: '#e3f2fd',
                color: '#118ab2',
                border: '2px solid #118ab2',
              }}
            >
              3.1 Binary →
            </span>
          </a>

          {/* 3.2 */}
          <a
            href="binary-3.2.html"
            className="block rounded-2xl border-4 p-6 transition-all duration-200 hover:-translate-y-1"
            style={{
              borderColor: '#059669',
              background: 'white',
              boxShadow: '5px 5px 0 #059669',
            }}
          >
            <div className="text-3xl mb-3">±</div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "'Permanent Marker', cursive", color: '#059669' }}
            >
              Topic 3.2
            </h2>
            <p
              className="text-sm mb-3"
              style={{ fontFamily: "'Kalam', cursive", color: '#555' }}
            >
              Signed & unsigned integers — sign and magnitude, two's complement.
            </p>
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-bold"
              style={{
                fontFamily: "'Caveat', cursive",
                background: '#e0f7f2',
                color: '#059669',
                border: '2px solid #059669',
              }}
            >
              3.2 Signed →
            </span>
          </a>

          {/* 3.3 */}
          <a
            href="binary-3.3.html"
            className="block rounded-2xl border-4 p-6 transition-all duration-200 hover:-translate-y-1"
            style={{
              borderColor: '#f77f00',
              background: 'white',
              boxShadow: '5px 5px 0 #f77f00',
            }}
          >
            <div className="text-3xl mb-3">➕</div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "'Permanent Marker', cursive", color: '#f77f00' }}
            >
              Topic 3.3
            </h2>
            <p
              className="text-sm mb-3"
              style={{ fontFamily: "'Kalam', cursive", color: '#555' }}
            >
              Binary arithmetic — addition, logical & arithmetic shifts, overflow.
            </p>
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-bold"
              style={{
                fontFamily: "'Caveat', cursive",
                background: '#fff3e0',
                color: '#f77f00',
                border: '2px solid #f77f00',
              }}
            >
              3.3 Arithmetic →
            </span>
          </a>

          {/* 3.4 */}
          <a
            href="binary-3.4.html"
            className="block rounded-2xl border-4 p-6 transition-all duration-200 hover:-translate-y-1"
            style={{
              borderColor: '#7b2d8b',
              background: 'white',
              boxShadow: '5px 5px 0 #7b2d8b',
            }}
          >
            <div className="text-3xl mb-3">🔤</div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "'Permanent Marker', cursive", color: '#7b2d8b' }}
            >
              Topic 3.4
            </h2>
            <p
              className="text-sm mb-3"
              style={{ fontFamily: "'Kalam', cursive", color: '#555' }}
            >
              Hexadecimal notation — why hex is used, converting between
              hexadecimal, binary, and denary.
            </p>
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-bold"
              style={{
                fontFamily: "'Caveat', cursive",
                background: '#f3e5f5',
                color: '#7b2d8b',
                border: '2px solid #7b2d8b',
              }}
            >
              3.4 Hexadecimal →
            </span>
          </a>

          {/* Data 3.2 */}
          <a
            href="data-3.2.html"
            className="block rounded-2xl border-4 p-6 transition-all duration-200 hover:-translate-y-1 sm:col-span-2"
            style={{
              borderColor: '#e74c3c',
              background: 'white',
              boxShadow: '5px 5px 0 #e74c3c',
            }}
          >
            <div className="text-3xl mb-3">🔤</div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "'Permanent Marker', cursive", color: '#e74c3c' }}
            >
              Data 3.2: Data Representation
            </h2>
            <p
              className="text-sm mb-3"
              style={{ fontFamily: "'Kalam', cursive", color: '#555' }}
            >
              How computers encode characters (ASCII & Unicode), represent
              bitmap images (pixels, resolution, colour depth), and digitise
              sound (sampling, bit depth, aliasing).
            </p>
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-bold"
              style={{
                fontFamily: "'Caveat', cursive",
                background: '#fce4ec',
                color: '#e74c3c',
                border: '2px solid #e74c3c',
              }}
            >
              Data 3.2 Representation →
            </span>
          </a>

          {/* Data 3.3 */}
          <a
            href="data-3.3.html"
            className="block rounded-2xl border-4 p-6 transition-all duration-200 hover:-translate-y-1 sm:col-span-2"
            style={{
              borderColor: '#f77f00',
              background: 'white',
              boxShadow: '5px 5px 0 #f77f00',
            }}
          >
            <div className="text-3xl mb-3">💾</div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "'Permanent Marker', cursive", color: '#f77f00' }}
            >
              Data 3.3: Storage & Compression
            </h2>
            <p
              className="text-sm mb-3"
              style={{ fontFamily: "'Kalam', cursive", color: '#555' }}
            >
              Storage units (bit, byte, KiB, MiB, GiB, TiB), lossless vs
              lossy compression (JPEG, MP3), run-length encoding (RLE),
              and calculating file sizes.
            </p>
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-bold"
              style={{
                fontFamily: "'Caveat', cursive",
                background: '#fff3e0',
                color: '#f77f00',
                border: '2px solid #f77f00',
              }}
            >
              Data 3.3 Storage →
            </span>
          </a>

          {/* Data 3.4 */}
          <a
            href="data-3.4.html"
            className="block rounded-2xl border-4 p-6 transition-all duration-200 hover:-translate-y-1 sm:col-span-2"
            style={{
              borderColor: '#7b2d8b',
              background: 'white',
              boxShadow: '5px 5px 0 #7b2d8b',
            }}
          >
            <div className="text-3xl mb-3">🔐</div>
            <h2
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "'Permanent Marker', cursive", color: '#7b2d8b' }}
            >
              Data 3.4: Encryption
            </h2>
            <p
              className="text-sm mb-3"
              style={{ fontFamily: "'Kalam', cursive", color: '#555' }}
            >
              Why data needs encryption, and how four historical ciphers
              work: Pigpen, Caesar, Vigenere, and Rail Fence.
            </p>
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-bold"
              style={{
                fontFamily: "'Caveat', cursive",
                background: '#f3e5f5',
                color: '#7b2d8b',
                border: '2px solid #7b2d8b',
              }}
            >
              Data 3.4 Encryption →
            </span>
          </a>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t-2 border-dashed border-gray-300">
          <p
            className="text-sm"
            style={{ fontFamily: "'Kalam', cursive", color: '#777' }}
          >
            IGCSE Computer Science Edexcel 4CP01 — Data Topic 3: Binary
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
