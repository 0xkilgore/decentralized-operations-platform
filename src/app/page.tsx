export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 space-y-8">
      <h1 className="text-4xl font-bold mb-6 neon-glow">Color Test Page</h1>
      
      {/* Primary Button */}
      <button className="btn-primary">
        Primary Button
      </button>

      {/* Secondary Button */}
      <button className="btn-secondary">
        Secondary Button
      </button>

      {/* Card with neon border */}
      <div className="card neon-border p-6 max-w-md">
        <h3 className="text-xl font-semibold mb-4">Card with Neon Border</h3>
        <p className="text-gray-300">
          This card should have a subtle glow effect with our new color (#22ffb4)
        </p>
      </div>

      {/* Text with glow */}
      <span className="text-neon-green text-2xl neon-glow">
        Glowing Text Effect
      </span>
    </div>
  );
}
