import {
  AboutUs,
  CTA,
  Community,
  Footer,
  Header,
  RecipeSection,
} from "@/src/components";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Header />
      <RecipeSection />
      <AboutUs />
      <Community />
      <CTA />
      <Footer />
    </main>
  );
}
