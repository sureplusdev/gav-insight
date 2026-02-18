import React, { useState, useEffect, useCallback } from "react";
import SlideContainer from "@/components/presentation/SlideContainer";
import SlideNav from "@/components/presentation/SlideNav";
import HeroSlide from "@/components/presentation/slides/HeroSlide";
import ProblemSlide from "@/components/presentation/slides/ProblemSlide";
import SolutionSlide from "@/components/presentation/slides/SolutionSlide";
import ArchitectureSlide from "@/components/presentation/slides/ArchitectureSlide";
import ScoringSlide from "@/components/presentation/slides/ScoringSlide";
import EVMotorSlide from "@/components/presentation/slides/EVMotorSlide";
import DeliverablesSlide from "@/components/presentation/slides/DeliverablesSlide";
import CaseSlide from "@/components/presentation/slides/CaseSlide";
import CTASlide from "@/components/presentation/slides/CTASlide";

const TOTAL_SLIDES = 9;

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  // Touch swipe support
  useEffect(() => {
    let touchStartX = 0;
    const handleTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
      const delta = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(delta) > 50) {
        if (delta > 0) goNext();
        else goPrev();
      }
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  const slides = [
    <HeroSlide key={0} onNext={goNext} />,
    <ProblemSlide key={1} />,
    <SolutionSlide key={2} />,
    <ArchitectureSlide key={3} />,
    <ScoringSlide key={4} />,
    <EVMotorSlide key={5} />,
    <DeliverablesSlide key={6} />,
    <CaseSlide key={7} />,
    <CTASlide key={8} />,
  ];

  return (
    <div className="bg-slate-950 min-h-screen overflow-x-hidden">
      <SlideContainer slideIndex={currentSlide}>
        {slides[currentSlide]}
      </SlideContainer>
      <SlideNav
        current={currentSlide}
        total={TOTAL_SLIDES}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
}