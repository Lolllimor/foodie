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
    <MantineProvider>  <main className="h-screen w-screen min-w-[1440px]">
      <Header />
      <RecipeSection />
      <AboutUs />
      <Community />
      <CTA />
      <Footer />
    </main>
  </MantineProvider>
  )
}
