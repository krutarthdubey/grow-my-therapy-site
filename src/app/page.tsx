import {
  Approach,
  Contact,
  Expertise,
  FAQs,
  FeaturedSpecialties,
  Footer,
  Header,
  Hero,
  Introduction,
  Office,
  WhoWeHelp,
} from "@/components/site";

const practiceSchema = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Dr. Maya Reynolds, PsyD",
  description:
    "Licensed clinical psychologist offering therapy for adults in Santa Monica and telehealth for clients located in California.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123th Street 45 W",
    addressLocality: "Santa Monica",
    addressRegion: "CA",
    postalCode: "90401",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Santa Monica" },
    { "@type": "State", name: "California" },
  ],
  medicalSpecialty: ["Anxiety and panic", "Trauma", "Burnout and perfectionism"],
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceSchema) }}
        />
        <Hero />
        <Introduction />
        <WhoWeHelp />
        <Expertise />
        <Approach />
        <FeaturedSpecialties />
        <Office />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

