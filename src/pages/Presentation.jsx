import React, { useState, useEffect, useCallback } from "react";
import { BookOpen } from "lucide-react";
import SlideContainer from "@/components/presentation/SlideContainer";
import SlideNav from "@/components/presentation/SlideNav";
import GlossaryModal from "@/components/presentation/GlossaryModal";
import BackgroundAnimation from "@/components/presentation/BackgroundAnimation";
import FomentoContextoSlide from "@/components/presentation/slides/FomentoContextoSlide";
import FinepFndctSlide from "@/components/presentation/slides/FinepFndctSlide";
import InovacredSlide from "@/components/presentation/slides/InovacredSlide";
import HeroSlide from "@/components/presentation/slides/HeroSlide";
import ProblemSlide from "@/components/presentation/slides/ProblemSlide";
import SolutionSlide from "@/components/presentation/slides/SolutionSlide";
import SimulatorSlide from "@/components/presentation/slides/SimulatorSlide";
import OnePageSlide from "@/components/presentation/slides/OnePageSlide";
import DashboardSlide from "@/components/presentation/slides/DashboardSlide";
import RoadmapSlide from "@/components/presentation/slides/RoadmapSlide";
import CaseSlide from "@/components/presentation/slides/CaseSlide";
import SurePlusAboutSlide from "@/components/presentation/slides/SurePlusAboutSlide";
import SurePlusCreditSlide from "@/components/presentation/slides/SurePlusCreditSlide";
import SurePlusGrantsSlide from "@/components/presentation/slides/SurePlusGrantsSlide";
import CTASlide from "@/components/presentation/slides/CTASlide";

const TOTAL_SLIDES = 15;

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);

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
    <FomentoContextoSlide key={1} />,
    <FinepFndctSlide key={2} />,
    <InovacredSlide key={3} />,
    <ProblemSlide key={4} />,
    <SolutionSlide key={5} />,
    <SimulatorSlide key={6} />,
    <OnePageSlide key={7} />,
    <DashboardSlide key={8} />,
    <RoadmapSlide key={9} />,
    <CaseSlide key={10} />,
    <SurePlusAboutSlide key={11} />,
    <SurePlusCreditSlide key={12} />,
    <SurePlusGrantsSlide key={13} />,
    <CTASlide key={14} />,
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#193A62" }}>
      <BackgroundAnimation />
      <SlideContainer slideIndex={currentSlide}>
        {slides[currentSlide]}
      </SlideContainer>
      <SlideNav
        current={currentSlide}
        total={TOTAL_SLIDES}
        onPrev={goPrev}
        onNext={goNext}
      />
      <button
        onClick={() => setIsGlossaryOpen(true)}
        className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 font-semibold text-white"
        style={{ backgroundColor: "#31C0DA" }}
        aria-label="Abrir Glossário"
        title="Glossário de termos"
      >
        <BookOpen className="w-5 h-5" />
        Glossário
      </button>
      <GlossaryModal isOpen={isGlossaryOpen} onClose={() => setIsGlossaryOpen(false)} />
    </div>
  );
}