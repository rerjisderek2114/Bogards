/**
 * Fixed, fullscreen looping background video for the hero — mirrors the
 * cinematic treatment from the Aura reference. Bogards doesn't have a brand
 * video yet, so this points at /public/video/hero-bg.mp4: drop a file there
 * and it plays automatically. Until then, the radial/gradient glow already
 * painted behind it in Hero.tsx shows through untouched — nothing breaks.
 */
export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-30 mix-blend-screen"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-base/60" />
    </div>
  );
}
