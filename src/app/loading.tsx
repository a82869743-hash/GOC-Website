export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-goc-dark">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-2 border-white/10 rounded-full"></div>
          <div className="absolute inset-0 border-2 border-transparent border-t-goc-red rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-bold">Loading</p>
      </div>
    </main>
  );
}
