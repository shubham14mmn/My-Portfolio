// Animated typing effect - cycles through phrases
import { useEffect, useState } from "react";

interface TypingProps {
  phrases: string[];
  speed?: number;
  pause?: number;
}

export function Typing({ phrases, speed = 80, pause = 1500 }: TypingProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const tick = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDeleting(true), pause);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setIndex((i) => i + 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(tick);
  }, [text, deleting, index, phrases, speed, pause]);

  return (
    <span>
      {text}
      <span className="animate-blink text-primary">|</span>
    </span>
  );
}
