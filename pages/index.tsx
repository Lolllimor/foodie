import {
  AboutUs,
  CTA,
  Community,
  Footer,
  Header,
  RecipeSection,
} from "@/src/components";
import { MantineProvider } from "@mantine/core";

export default function Home() {
  return (
    <MantineProvider>
      {" "}
      <main className="h-screen  min-w-[1440px] justify-center  flex  ">
        <div className="max-w-[1440px] flex  flex-col ">
          <Header />
          <RecipeSection />
          <AboutUs />
          <Community />
          <CTA />
          <Footer />
        </div>
      </main>
    </MantineProvider>
  );
}
