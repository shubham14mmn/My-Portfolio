// Initial loading splash - shown briefly on first paint
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="relative">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
        <p className="mt-4 text-center font-display text-sm font-semibold text-gradient">
          Loading...
        </p>
      </div>
    </div>
  );
}
