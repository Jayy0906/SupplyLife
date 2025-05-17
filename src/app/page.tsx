"use client";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FeaturesBar from "../../components/FeaturesBar";
import Footer from "../../components/Footer";
import TestPlans from "../../components/TestPlans";
import ReportSection from "../../components/ReportSection";
import LabTechnologySection from "../../components/LabTechnologySection";
import StatsAndInfoSection from "../../components/StatsAndInfoSection";
import IngredientsSection from "../../components/IngredientsSection";
import SymptomsSection from "../../components/SymptomsSection";
import TestimonialSection from "../../components/TestimonialSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturesBar />
      <TestPlans />
      <ReportSection />
      <LabTechnologySection />
      <StatsAndInfoSection />
      <IngredientsSection />
      <SymptomsSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
