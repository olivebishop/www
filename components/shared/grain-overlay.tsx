'use client';

const GrainOverlay = () => {
  return (
    <>
      {/* SVG Noise Layer */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 mix-blend-soft-light opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' seed='1'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0.05 0.1 0.15 0.2'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity: 0.6,
          mixBlendMode: 'screen',
        }}
      />

      {/* Radial Gradient Layer - Adapted for black background */}
      <div 
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.02) 0%, transparent 50%),
                       radial-gradient(circle at 70% 70%, rgba(255,255,255,0.015) 0%, transparent 50%)`,
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
};

export default GrainOverlay;