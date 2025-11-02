import { useEffect, useRef, useState } from "react";
import HoverImg1 from "@/assets/HeroSection/img1.png";
import HoverImg2 from "@/assets/HeroSection/img2.png";
import HoverImg3 from "@/assets/HeroSection/img3.png";
import HoverImg4 from "@/assets/HeroSection/img4.png";
import HoverImg5 from "@/assets/HeroSection/img5.png";
import HoverImg6 from "@/assets/HeroSection/img6.png";
import HoverImg7 from "@/assets/HeroSection/img7.png";
import HoverImg8 from "@/assets/HeroSection/img8.png";
import HoverImg9 from "@/assets/HeroSection/img9.png";

/** ---------- Typewriter with Shadow (responsive + auto-hide when done) ---------- */
type Segment = { text: string; className?: string };
type Line = Segment[];

const Typewriter = ({
                      lines,
                      typingSpeed = 28,
                      linePause = 700,
                      showShadow = true,
                      shadowClass = "opacity-30",
                      shadowOffset = { x: 0, y: 0 },
                    }: {
  lines: Line[];
  typingSpeed?: number;
  linePause?: number;
  showShadow?: boolean;
  shadowClass?: string;
  shadowOffset?: { x: number; y: number };
}) => {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const timer = useRef<number | null>(null);

  // Responsive: disable shadow on small screens (<768px)
  useEffect(() => {
    const check = () => setIsSmallScreen(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const currentLine = lines[lineIdx] || [];
  const lineText = currentLine.map((s) => s.text).join("");
  const isLineDone = charIdx >= lineText.length;
  const isAllDone = lineIdx >= lines.length;

  // Typing loop
  useEffect(() => {
    if (isAllDone) return;
    if (!isLineDone) {
      timer.current = window.setTimeout(() => setCharIdx((i) => i + 1), typingSpeed);
    } else {
      timer.current = window.setTimeout(() => {
        setLineIdx((i) => i + 1);
        setCharIdx(0);
      }, linePause);
    }
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [charIdx, isLineDone, isAllDone, typingSpeed, linePause]);

  const sliceSegments = (line: Line, revealChars: number) => {
    let remaining = revealChars;
    return line.map((seg) => {
      if (remaining <= 0) return { ...seg, text: "" };
      const take = Math.min(remaining, seg.text.length);
      remaining -= take;
      return { ...seg, text: seg.text.slice(0, take) };
    });
  };

  const renderSegments = (segs: Line, extraClass = "") => (
      <span>
      {segs.map((seg, i) => (
          <span key={i} className={`${seg.className ?? ""} ${extraClass}`}>
          {seg.text}
        </span>
      ))}
    </span>
  );

  const doneLines = lines.slice(0, Math.min(lineIdx, lines.length));
  const activeLine = currentLine;
  const activeShown = sliceSegments(activeLine, charIdx);

  return (
      <div className="space-y-2 relative">
        {/* SHADOW LAYER (visible only while typing AND not small screen) */}
        {showShadow && !isAllDone && !isSmallScreen && (
            <div
                className="absolute inset-0 pointer-events-none select-none transition-opacity"
                aria-hidden
                style={{
                  transform: `translate(${shadowOffset.x}px, ${shadowOffset.y}px)`,
                  textShadow: "0.06em 0.06em 0.35em rgba(0,0,0,0.35)",
                  filter: "blur(0.1px)",
                }}
            >
              <div className="space-y-2">
                {doneLines.map((line, i) => (
                    <div key={`shadow-done-${i}`} className={shadowClass}>
                      {renderSegments(line)}
                    </div>
                ))}
                <div key="shadow-active" className={shadowClass}>
                  {renderSegments(activeLine)}
                </div>
              </div>
            </div>
        )}

        {/* FOREGROUND: finished lines at 100% */}
        {doneLines.map((line, i) => (
            <div key={`done-${i}`} className="opacity-100">
              {renderSegments(line)}
            </div>
        ))}

        {/* FOREGROUND: active line at 100% */}
        {!isAllDone && (
            <div key={`active-${lineIdx}`} className="opacity-100">
              {renderSegments(activeShown)}
              <span className="inline-block w-[0.6ch] -mb-0.5 animate-pulse">|</span>
            </div>
        )}
      </div>
  );
};
/** ---------- /Typewriter with Shadow ---------- */

const ImageScatterSection = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const [imagesPerRow, setImagesPerRow] = useState(9);
  const hoverImages = [
    HoverImg1,
    HoverImg2,
    HoverImg3,
    HoverImg4,
    HoverImg5,
    HoverImg6,
    HoverImg7,
    HoverImg8,
    HoverImg9,
  ];

  const [randomTransforms, setRandomTransforms] = useState<{ rotate: string; translate: string }[]>([]);

  const updateImagesPerRow = () => {
    const width = window.innerWidth;
    if (width < 766) setImagesPerRow(0);
    else if (width < 1024) setImagesPerRow(6);
    else setImagesPerRow(9);
  };

  useEffect(() => {
    updateImagesPerRow();
    window.addEventListener("resize", updateImagesPerRow);
    return () => window.removeEventListener("resize", updateImagesPerRow);
  }, []);

  useEffect(() => {
    const randoms = Array.from({ length: 18 }).map(() => ({
      rotate: `${Math.random() * 40 - 20}deg`,
      translate: `${Math.random() * 80 - 40}px ${Math.random() * 40 - 20}px`,
    }));
    setRandomTransforms(randoms);
  }, []);

  const handleHover = (index: number) => {
    setVisibleImages((prev) => [...prev, index]);
    setTimeout(() => {
      setVisibleImages((prev) => prev.filter((i) => i !== index));
    }, 2000);
  };

  const renderRow = (rowKey: string) =>
      Array.from({ length: imagesPerRow }).map((_, i) => {
        const index = rowKey === "row1" ? i : i + imagesPerRow;
        const isVisible = visibleImages.includes(index);
        const imgSrc = hoverImages[index % hoverImages.length];
        const transform = randomTransforms[index] || { rotate: "0deg", translate: "0 0" };

        return (
            <img
                key={`${rowKey}-${i}`}
                src={imgSrc}
                alt="Scatter visual"
                onMouseEnter={() => handleHover(index)}
                onTouchStart={() => handleHover(index)}
                className={`w-20 sm:w-24 md:w-28 lg:w-40 transform transition-all duration-700 ease-out
          ${isVisible ? "opacity-80 scale-110" : "opacity-60 sm:opacity-0 scale-100"}
          pointer-events-auto cursor-pointer relative z-10`}
                style={{ rotate: transform.rotate, translate: transform.translate }}
            />
        );
      });

  const typedLines: Line[] = [
    [
      { text: "At " },
      { text: "Cypheron Web Solutions, ", className: "text-accent font-bold" },
    ],
    [{ text: "we ignite creativity through intelligent design." }],
    [{ text: "Powered by technology and driven by vision," }],
    [{ text: "we move beyond boundaries," }],
    [
      { text: "crafting digital experiences that " },
      { text: "inspire, engage", className: "text-accent" },
      { text: ", and " },
      { text: "elevate", className: "text-accent" },
      { text: "." },
    ],
  ];

  return (
      <section className="relative py-32 overflow-hidden flex flex-col items-center justify-center min-h-screen bg-gray-200">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
          {imagesPerRow > 0 && (
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 pointer-events-auto">
                {renderRow("row1")}
              </div>
          )}

          <div className="relative z-10 pointer-events-none w-full max-w-4xl px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-relaxed text-left">
              <Typewriter
                  lines={typedLines}
                  typingSpeed={28}
                  linePause={700}
                  showShadow
                  shadowClass="opacity-30"
                  shadowOffset={{ x: 0, y: 0 }}
              />
            </h2>
          </div>

          {imagesPerRow > 0 && (
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 translate-x-4 pointer-events-auto">
                {renderRow("row2")}
              </div>
          )}
        </div>
      </section>
  );
};

export default ImageScatterSection;