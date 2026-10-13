import Image from "next/image";

const specialties = [
  {
    number: "01",
    title: "Anxiety & panic",
    text: "When worry, tension, or panic starts taking up too much room, therapy can help you understand what is happening and find steadier ways through it.",
  },
  {
    number: "02",
    title: "Trauma",
    text: "Careful, paced work can help you make sense of earlier experiences, build a greater sense of safety, and feel more regulated in everyday life.",
  },
  {
    number: "03",
    title: "Burnout & perfectionism",
    text: "For people used to pushing through, therapy offers room to slow down, reconnect with yourself, and find more sustainable ways to live and work.",
  },
];

const faqs = [
  {
    q: "Who does Dr. Reynolds work with?",
    a: "She works with adults who feel overwhelmed by anxiety, stress, panic, trauma, burnout, or perfectionism. Many are high-achieving people who feel exhausted or on edge despite appearing to manage on the outside.",
  },
  {
    q: "What approaches does she use?",
    a: "Her collaborative work may integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, shaped around the person and what they are experiencing.",
  },
  {
    q: "Are sessions available online?",
    a: "Yes. Dr. Reynolds offers in-person therapy in Santa Monica and telehealth sessions for clients located in California.",
  },
  {
    q: "What is the office like?",
    a: "The profile describes a quiet, private office with natural light and a comfortable, uncluttered environment.",
  },
  {
    q: "How can I ask about getting started?",
    a: "Call (310) 555-0147 or email maya.reynolds@example.com to ask about a first appointment or consultation.",
  },
];

const modalities = [
  {
    label: "CBT",
    id: "cbt-tooltip",
    description:
      "Cognitive behavioral therapy. It can help people notice unhelpful thought patterns and understand how thoughts connect with feelings and behavior.",
  },
  {
    label: "EMDR",
    id: "emdr-tooltip",
    description:
      "Eye Movement Desensitization and Reprocessing. A trauma-focused therapy that involves working with memories while attending to a back-and-forth movement or sound.",
  },
  {
    label: "Mindfulness",
    id: "mindfulness-tooltip",
    description:
      "Practices that bring attention to the present moment and increase awareness of what is happening now.",
  },
  {
    label: "Body-oriented techniques",
    id: "body-techniques-tooltip",
    description:
      "Approaches that attend to the body's responses alongside the emotional side of what a person is experiencing.",
  },
];

const peopleWeHelp = [
  {
    title: "Anxiety & panic",
    text: "Racing thoughts, constant worry, tension, or the sense that you’re always waiting for something to go wrong.",
  },
  {
    title: "The weight of past experiences",
    text: "Earlier experiences that still affect your relationships, confidence, or sense of safety.",
  },
  {
    title: "Burnout & high pressure",
    text: "Years of pushing through, perfectionism, or feeling disconnected from yourself at work and in life.",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="ml-2 inline-block transition-transform group-hover:translate-x-1"
    >
      {diagonal ? "↗" : "→"}
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:p-3"
      >
        Skip to content
      </a>
      <div className="container-wide flex min-h-[76px] items-center justify-between gap-3 sm:gap-6">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-3 no-underline"
          aria-label="Dr. Maya Reynolds, home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sage-deep/40 font-serif text-lg text-sage-deep">
            M
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block font-serif text-[1.05rem]">Maya Reynolds</span>
            <span className="hidden text-[.64rem] uppercase tracking-[.15em] text-muted min-[480px]:block">
              PsyD · Clinical Psychologist
            </span>
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm text-ink/80 md:flex"
        >
          <a className="hover:text-sage-deep" href="#about">About</a>
          <a className="hover:text-sage-deep" href="#specialties">Specialties</a>
          <a className="hover:text-sage-deep" href="#approach">Approach</a>
          <a className="hover:text-sage-deep" href="#office">Our Office</a>
          <a className="hover:text-sage-deep" href="#faqs">FAQs</a>
        </nav>

        <a
          href="#contact"
          className="group shrink-0 rounded-full border border-sage-deep px-3 py-2.5 text-xs font-semibold text-sage-deep transition hover:bg-sage-deep hover:text-white sm:px-5 sm:text-sm"
        >
          Get in touch <Arrow />
        </a>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="container-wide flex gap-5 overflow-x-auto pb-3 text-xs text-muted md:hidden"
      >
        <a href="#about">About</a>
        <a href="#specialties">Specialties</a>
        <a href="#approach">Approach</a>
        <a href="#office">Our Office</a>
        <a href="#faqs">FAQs</a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-cream">
      <div className="container-wide grid items-center gap-12 py-14 md:grid-cols-[1.02fr_.98fr] md:py-24 lg:gap-20">
        <div className="fade-in order-2 min-w-0 md:order-1">
          <p className="eyebrow mb-6">
            Therapy for adults · Santa Monica & California
          </p>
          <h1 className="section-title max-w-[650px] break-words text-[2.75rem] sm:text-6xl lg:text-[4.45rem]">
            A little more room to <em className="text-sage-deep">breathe</em>.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
            When your mind is always working and your body never quite settles,
            it can be hard to know where to begin. Therapy can be a place to
            slow things down and make sense of it, together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#specialties"
              className="btn-primary group rounded-full px-6 py-3.5 text-sm font-semibold transition"
            >
              Explore how I can help <Arrow />
            </a>
            <a
              href="#approach"
              className="rounded-full border border-ink/25 px-6 py-3.5 text-sm font-semibold hover:border-ink"
            >
              My approach
            </a>
          </div>
          <p className="mt-7 text-sm text-muted">
            In person in Santa Monica · Telehealth across California
          </p>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[475px] md:order-2 md:ml-auto">
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#e6d8c5] md:-right-8 md:-top-8 md:h-36 md:w-36" />
          <div className="absolute -bottom-5 -left-5 z-10 h-36 w-36 rounded-full border border-sage-deep/35 md:-bottom-7 md:-left-7 md:h-48 md:w-48" />
          <div className="relative z-10 overflow-hidden rounded-t-[48%] rounded-b-[8px] bg-sage">
            <Image
              src="/images/maya-reynolds.png"
              alt="Portrait of Dr. Maya Reynolds"
              width={1024}
              height={1536}
              priority
              className="h-[440px] w-full object-cover object-top sm:h-[540px]"
            />
          </div>
          <div className="absolute bottom-5 left-[-18px] z-20 rounded-full bg-paper px-4 py-3 text-xs shadow-lg sm:left-[-34px]">
            <span className="block font-semibold text-ink">
              A thoughtful place to begin
            </span>
            <span className="mt-1 block text-muted">
              Warm · Collaborative · Grounded
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Introduction() {
  return (
    <section id="about" className="bg-paper py-20 md:py-28">
      <div className="container-wide grid gap-10 md:grid-cols-[.72fr_1.28fr] md:gap-20">
        <div>
          <p className="eyebrow">A place to start</p>
          <h2 className="section-title mt-5 text-4xl md:text-5xl">
            You don’t have to keep carrying it alone.
          </h2>
        </div>
        <div className="max-w-2xl text-[1.02rem] leading-8 text-muted">
          <p>
            Maybe you’re getting through the day, but inside you feel worn out,
            stuck in overthinking, or braced for what might go wrong. Maybe
            experiences from the past still shape how safe, confident, or
            connected you feel.
          </p>
          <p className="mt-5">
            Dr. Maya Reynolds is a licensed clinical psychologist in Santa
            Monica. She works with adults in a warm, collaborative way, making
            room for both practical support and deeper reflection. The work
            moves at a pace that feels manageable and keeps you involved in the
            process.
          </p>
          <a
            href="#approach"
            className="group mt-7 inline-flex items-center font-semibold text-sage-deep"
          >
            More about the approach <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

export function WhoWeHelp() {
  return (
    <section className="bg-sage/60 py-20 md:py-24">
      <div className="container-wide">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">Who I work with</p>
          <h2 className="section-title mt-4 text-4xl md:text-5xl">
            For the capable ones who are tired of holding it all together.
          </h2>
          <p className="mt-5 leading-7 text-muted">
            Many of the adults who come to therapy are thoughtful and
            self-aware, yet feel exhausted or on edge beneath the surface.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {peopleWeHelp.map(({ title, text }, index) => (
            <article
              key={title}
              className="rounded-2xl border border-ink/10 bg-paper/80 p-7 md:p-8"
            >
              <span className="font-serif text-3xl text-terracotta">
                0{index + 1}
              </span>
              <h3 className="mt-5 font-serif text-2xl">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section id="specialties" className="bg-paper py-20 md:py-28">
      <div className="container-wide">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow">Areas of expertise</p>
          <h2 className="section-title mt-4 text-4xl md:text-5xl">
            What’s bringing you here?
          </h2>
          <p className="mt-5 leading-7 text-muted">
            Therapy is shaped around your experience. These are some of the
            concerns Dr. Reynolds often works with.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {specialties.map((item) => (
            <article
              key={item.number}
              className="group rounded-2xl border border-line bg-cream p-7 transition hover:-translate-y-1 hover:shadow-lg md:p-8"
            >
              <span className="text-xs font-bold tracking-[.15em] text-terracotta">
                {item.number} / SUPPORT
              </span>
              <h3 className="section-title mt-8 text-3xl">{item.title}</h3>
              <p className="mt-4 min-h-32 leading-7 text-muted">{item.text}</p>
              <a
                href="#approach"
                className="group mt-5 inline-flex items-center text-sm font-semibold text-sage-deep"
              >
                How we might work <Arrow />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section className="overflow-hidden bg-ink py-20 text-paper md:py-28" id="approach">
      <div className="container-wide grid items-center gap-12 md:grid-cols-[.9fr_1.1fr] md:gap-20">
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-terracotta/30" />
          <Image
            src="/images/therapy-office-1.jpg"
            alt="Comfortable seating and natural light in Dr. Reynolds’ therapy office"
            width={1500}
            height={1125}
            className="relative h-[330px] w-full rounded-[45%_45%_12px_12px] object-cover md:h-[440px]"
          />
        </div>
        <div>
          <p className="eyebrow !text-[#c2d3c4]">How we work</p>
          <h2 className="section-title mt-5 text-4xl md:text-5xl">
            Care that meets you where you are.
          </h2>
          <p className="mt-6 leading-8 text-paper/75">
            Dr. Reynolds takes a warm, collaborative, and grounded approach.
            Sessions have enough structure to feel supportive, while leaving
            room for reflection and depth. You stay an active part of the
            process.
          </p>
          <p className="mt-4 leading-8 text-paper/75">
            Depending on your needs, therapy may draw on CBT, EMDR,
            mindfulness-based practices, and body-oriented techniques. Trauma
            work is paced carefully, with attention to safety, stabilization,
            and what helps you feel more regulated in daily life.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {modalities.map((modality) => (
              <span
                key={modality.label}
                tabIndex={0}
                aria-describedby={modality.id}
                className="group relative inline-flex cursor-help rounded-full border border-paper/25 px-4 py-2 text-xs text-paper/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7a58f]"
              >
                {modality.label}
                <span aria-hidden="true" className="ml-1.5 opacity-65">
                  ⓘ
                </span>
                <span
                  id={modality.id}
                  role="tooltip"
                  className="invisible absolute bottom-full left-1/2 z-30 w-64 -translate-x-1/2 rounded-xl bg-paper p-4 text-left text-xs leading-5 text-ink opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100"
                >
                  {modality.description}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedSpecialties() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-wide">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">A closer look</p>
          <h2 className="section-title mt-4 text-4xl md:text-5xl">
            Support for what feels hard right now.
          </h2>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {specialties.map((specialty) => (
            <article
              key={specialty.number}
              className="grid gap-3 py-7 md:grid-cols-[.45fr_1fr] md:gap-12 md:py-9"
            >
              <h3 className="font-serif text-2xl">{specialty.title}</h3>
              <p className="max-w-3xl leading-7 text-muted">
                {specialty.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Office() {
  return (
    <section id="office" className="bg-paper py-20 md:py-28">
      <div className="container-wide">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_.7fr]">
          <div>
            <p className="eyebrow">Our office</p>
            <h2 className="section-title mt-4 text-4xl md:text-5xl">
              A quiet place to settle in.
            </h2>
          </div>
          <p className="max-w-lg leading-7 text-muted">
            The Santa Monica office is described as private, naturally lit, and
            comfortably uncluttered. Telehealth is also available for clients
            located in California.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl bg-sage">
            <Image
              src="/images/therapy-office-1.jpg"
              alt="Office seating area beside tall windows"
              width={1500}
              height={1125}
              className="h-[280px] w-full object-cover transition duration-700 hover:scale-[1.02] md:h-[390px]"
            />
            <figcaption className="sr-only">
              A seating area with a sofa and armchair beside tall windows.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl bg-sage">
            <Image
              src="/images/therapy-office-2.jpg"
              alt="Second view of the bright therapy office with sofa, bookshelves, and plants"
              width={1500}
              height={1125}
              className="h-[280px] w-full object-cover transition duration-700 hover:scale-[1.02] md:h-[390px]"
            />
            <figcaption className="sr-only">
              A bright office with a sofa, bookshelves, and plants.
            </figcaption>
          </figure>
        </div>
        <p className="mt-5 text-sm text-muted">
          In-person sessions · Santa Monica, California
        </p>
      </div>
    </section>
  );
}

export function FAQs() {
  return (
    <section id="faqs" className="bg-sage/45 py-20 md:py-24">
      <div className="container-wide grid gap-10 md:grid-cols-[.65fr_1.35fr] md:gap-20">
        <div>
          <p className="eyebrow">A few questions</p>
          <h2 className="section-title mt-4 text-4xl md:text-5xl">
            Before we begin.
          </h2>
          <p className="mt-5 leading-7 text-muted">
            A little more about the practice and what to expect.
          </p>
        </div>
        <div className="divide-y divide-ink/15 border-y border-ink/15">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg marker:hidden [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="text-xl text-sage-deep transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-7 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-[#e8e2d6] py-16 md:py-20">
      <div className="container-wide grid gap-9 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="eyebrow">In person & online</p>
          <h2 className="section-title mt-3 max-w-3xl text-4xl md:text-5xl">
            A thoughtful next step can start with a conversation.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">
            Reach out to ask a question or schedule a consultation. Dr. Reynolds
            offers in-person sessions in Santa Monica and telehealth for clients
            located in California.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=maya.reynolds%40example.com&amp;su=Consultation%20request"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 inline-flex rounded-full px-6 py-3 text-sm font-semibold transition"
          >
            Schedule a consultation <Arrow />
          </a>
        </div>
        <div className="rounded-2xl bg-paper p-6 md:min-w-[310px]">
          <p className="text-xs font-bold uppercase tracking-[.14em] text-sage-deep">
            Santa Monica office
          </p>
          <address className="mt-3 not-italic leading-6 text-ink">
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
          </address>
          <a
            className="mt-4 inline-flex items-center text-sm font-semibold text-sage-deep"
            href="https://maps.google.com/?q=123th+Street+45+W+Santa+Monica+CA+90401"
            target="_blank"
            rel="noreferrer"
          >
            View area map <Arrow diagonal />
          </a>
          <div className="mt-5 border-t border-line pt-4 text-sm">
            <a className="block font-semibold text-sage-deep" href="tel:+13105550147">
              (310) 555-0147
            </a>
            <a
              className="mt-2 block text-sage-deep underline decoration-sage-deep/30 underline-offset-4"
              href="mailto:maya.reynolds@example.com?subject=Consultation%20request"
            >
              maya.reynolds@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink py-8 text-paper/70">
      <div className="container-wide flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#specialties">Specialties</a>
          <a className="hover:text-white" href="#office">Our Office</a>
          <a className="hover:text-white" href="#faqs">FAQs</a>
        </nav>
        <p>Santa Monica · California telehealth</p>
      </div>
    </footer>
  );
}

