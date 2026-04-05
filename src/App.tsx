import { ArrowRight, ArrowUpRight, Compass, Grid2X2, Layers3 } from 'lucide-react'
import { motion } from 'motion/react'
import studioPreview from '../assets/portfolio/upwork-thumbnail.png'
import { AnimatedGridPattern } from './components/ui/animated-grid-pattern'
import { cn } from './lib/utils'

const proofPoints = [
  {
    title: 'One system across every launch surface',
    body: 'Identity, landing page, and campaign assets are directed together so the brand does not fragment after the homepage.',
  },
  {
    title: 'Creative direction without handoff drift',
    body: 'The person shaping the visual direction stays inside the work, which keeps decisions sharper and feedback cycles shorter.',
  },
  {
    title: 'Built for brands that need stronger presence',
    body: 'Best fit for premium software, hospitality, culture, and modern retail teams preparing a launch, refresh, or repositioning.',
  },
]

const services = [
  {
    icon: Layers3,
    label: 'Identity',
    title: 'Brand systems that look settled early',
    body: 'Typography, layout rules, art direction, and tone refined into a system the whole launch can follow.',
    bullets: ['Visual direction and type system', 'Logo refinements or supporting marks', 'Brand rules for digital rollout'],
  },
  {
    icon: Grid2X2,
    label: 'Landing pages',
    title: 'Pages designed to convert without looking generic',
    body: 'Narrative structure, premium UI, and clearer hierarchy built for launches that need trust on first glance.',
    bullets: ['Hero and section strategy', 'Responsive page design', 'Production-ready design direction'],
  },
  {
    icon: Compass,
    label: 'Campaign assets',
    title: 'Launch materials that still feel like the same brand',
    body: 'Decks, social crops, motion direction, and supporting assets built from one visual logic instead of scattered one-offs.',
    bullets: ['Campaign key visuals', 'Deck and social asset direction', 'Launch-ready handoff kit'],
  },
]

const process = [
  {
    index: '01',
    title: 'Define the visual center',
    body: 'We start with positioning, references, and visual tension so the work knows what should feel sharp, calm, or bold.',
  },
  {
    index: '02',
    title: 'Build the launch system',
    body: 'Identity, page layouts, and supporting assets are developed together so each deliverable reinforces the same impression.',
  },
  {
    index: '03',
    title: 'Ship with a cleaner handoff',
    body: 'The final package is organized for launch, with hierarchy, assets, and implementation direction ready for the next team.',
  },
]

const engagementFacts = [
  {
    label: 'Typical scope',
    value: 'Identity, landing page, campaign kit',
  },
  {
    label: 'Working model',
    value: 'Selective projects with direct collaboration',
  },
  {
    label: 'Best moment to bring us in',
    value: 'Before the launch story starts to fragment',
  },
]

const faqs = [
  {
    question: 'What kind of teams is this for?',
    answer:
      'The strongest fit is a team with a serious product or brand move ahead: a launch, rebrand, new market push, or premium positioning reset.',
  },
  {
    question: 'Do you only design the page?',
    answer:
      'No. The value is in directing the identity, landing page, and supporting launch assets as one system when the scope needs it.',
  },
  {
    question: 'Can you work with an existing brand?',
    answer:
      'Yes. We can refine an existing system, tighten the digital expression, and extend it into a more convincing launch presence.',
  },
  {
    question: 'What should a first inquiry include?',
    answer:
      'Share the project stage, launch timing, scope, and any reference points. We can then reply with fit, next steps, and a suggested engagement shape.',
  },
]

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body: string
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.34em] text-[var(--color-muted)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-[2.8rem] leading-[0.94] tracking-[-0.05em] text-[var(--color-paper)] sm:text-5xl lg:text-[3.7rem]">
        {title}
      </h2>
      <p className="max-w-xl text-base leading-7 text-[color:rgba(244,239,233,0.74)] sm:text-lg">
        {body}
      </p>
    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(188,146,95,0.12),transparent_24%),radial-gradient(circle_at_85%_10%,rgba(89,70,87,0.16),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_20%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-position:center_center] [background-size:96px_96px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <header className="sticky top-0 z-30 border-b border-white/8 bg-[color:rgba(10,10,12,0.74)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] font-display text-lg italic">
              V
            </span>
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Velour Creative
              </p>
              <p className="text-sm text-[color:rgba(244,239,233,0.74)]">
                Identity, landing pages, campaign direction
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[color:rgba(244,239,233,0.68)] md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-card)] px-4 py-2 text-sm text-[color:rgba(244,239,233,0.92)] transition hover:border-white/30 hover:bg-white/10"
          >
            Request the brief
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-white/8">
          <div className="pointer-events-none absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(177,136,87,0.18),transparent_68%)] blur-3xl" />

          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 pt-14 sm:px-8 md:pb-20 md:pt-20 lg:px-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1.1fr)] xl:items-center">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:rgba(244,239,233,0.82)] shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                <span className="font-mono uppercase tracking-[0.22em] text-[color:rgba(244,239,233,0.72)]">
                  Selective launch direction
                </span>
              </div>

              <h1 className="mt-8 max-w-4xl font-display text-[4rem] leading-[0.9] tracking-[-0.06em] text-[var(--color-paper)] sm:text-[5.2rem] lg:text-[6rem]">
                Digital design for brands that need a sharper presence.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[color:rgba(244,239,233,0.74)] sm:text-xl">
                Velour Creative builds identity systems, launch pages, and campaign assets that make premium brands look clear, calm, and hard to ignore.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f4efe7] px-6 py-3.5 text-sm font-semibold text-[#09090c] shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition hover:translate-y-[-1px] hover:bg-white"
                  style={{ color: '#09090c' }}
                >
                  Request the brief
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="text-sm leading-6 text-[color:rgba(244,239,233,0.58)]">
                  Best fit for launch phases, repositioning, and premium digital refreshes.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-[color:rgba(244,239,233,0.68)]">
                {['Premium software', 'Hospitality', 'Culture', 'Modern retail'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative isolate overflow-hidden rounded-[2.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 shadow-[0_30px_140px_rgba(0,0,0,0.34)] sm:p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,239,233,0.08),transparent_28%),radial-gradient(circle_at_35%_18%,rgba(188,146,95,0.18),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(11,11,14,0.44))]" />
              <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.08}
                duration={7}
                repeatDelay={1.6}
                className={cn(
                  'mask-[radial-gradient(540px_circle_at_center,white,transparent)]',
                  'inset-x-[-10%] inset-y-[-10%] h-[120%] text-[color:rgba(188,146,95,0.22)]',
                )}
              />

              <div className="relative rounded-[2rem] border border-white/10 bg-[rgba(9,9,12,0.3)] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-md">
                <div className="mb-3 flex items-center justify-between rounded-full border border-white/10 bg-[rgba(8,8,10,0.46)] px-4 py-3 text-[0.68rem] uppercase tracking-[0.28em] text-[color:rgba(244,239,233,0.58)]">
                  <span>Launch page direction</span>
                  <span>Studio preview</span>
                </div>

                <img
                  src={studioPreview}
                  alt="Preview of a premium digital design studio landing page concept."
                  className="h-auto w-full rounded-[1.45rem] border border-white/8 object-cover shadow-[0_24px_80px_rgba(0,0,0,0.34)]"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="absolute bottom-8 left-8 max-w-[16rem] rounded-[1.65rem] border border-white/10 bg-[rgba(8,8,10,0.56)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-md"
              >
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-[color:rgba(244,239,233,0.52)]">
                  Deliverables
                </p>
                <p className="mt-3 font-display text-[1.65rem] leading-[0.96] tracking-[-0.04em]">
                  Identity, page, and campaign assets aligned from the start.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 md:py-10 lg:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {proofPoints.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.8rem] border border-white/8 bg-[rgba(255,255,255,0.045)] px-5 py-5 shadow-[0_20px_70px_rgba(0,0,0,0.16)]"
              >
                <h2 className="font-display text-[1.85rem] leading-[0.96] tracking-[-0.04em] text-[var(--color-paper)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[color:rgba(244,239,233,0.68)] sm:text-base">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="services"
          className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 md:py-28 lg:px-10"
        >
          <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr]">
            <SectionHeading
              eyebrow="Services"
              title="The offer is simple: make the launch look more certain."
              body="We design the brand system, landing page, and supporting assets that shape first impressions before the audience starts reading closely."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {services.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="rounded-[2.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
                    <item.icon className="h-5 w-5 text-[var(--color-accent)]" />
                  </div>
                  <p className="mt-7 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    {item.label}
                  </p>
                  <h3 className="mt-3 font-display text-[2rem] leading-[0.95] tracking-[-0.04em] text-[var(--color-paper)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[color:rgba(244,239,233,0.68)]">
                    {item.body}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm leading-6 text-[color:rgba(244,239,233,0.78)]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="border-t border-white/8 pt-3">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 sm:px-8 md:py-24 lg:grid-cols-[1.04fr_0.96fr] lg:px-10">
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.18)] sm:p-5">
              <img
                src={studioPreview}
                alt="A sample editorial landing page composition showing premium typography and product-led storytelling."
                className="w-full rounded-[2rem] border border-white/10 object-cover"
              />
            </div>

            <div className="space-y-8">
              <SectionHeading
                eyebrow="Showcase"
                title="The work should feel directed before it feels decorated."
                body="A premium page does not need more effects. It needs clearer hierarchy, tighter art direction, and the confidence to leave noise out."
              />

              <div className="grid gap-4">
                {engagementFacts.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.9rem] border border-white/8 bg-[rgba(255,255,255,0.04)] px-5 py-5"
                  >
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                      {item.label}
                    </p>
                    <p className="mt-3 font-display text-[1.9rem] leading-[0.96] tracking-[-0.04em] text-[var(--color-paper)]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="process"
          className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 md:py-28 lg:px-10"
        >
          <div className="grid gap-12 xl:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Process"
                title="The process is built to reduce drift, not add ceremony."
                body="Each phase exists to keep the launch looking coherent while decisions are still cheap enough to make well."
              />

              <div className="rounded-[2.2rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(188,146,95,0.16),rgba(255,255,255,0.03))] p-6">
                <p className="font-display text-[2rem] leading-[0.96] tracking-[-0.05em]">
                  Bring the studio in before the page, deck, and campaign start telling different stories.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-[rgba(255,255,255,0.03)] px-6 py-3 shadow-[0_24px_90px_rgba(0,0,0,0.18)] sm:px-8">
              {process.map((item, index) => (
                <motion.article
                  key={item.index}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.24 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={cn(
                    'grid gap-5 py-7 sm:grid-cols-[auto_1fr]',
                    index !== process.length - 1 && 'border-b border-white/8',
                  )}
                >
                  <p className="pt-1 font-mono text-[0.78rem] uppercase tracking-[0.34em] text-[var(--color-muted)]">
                    {item.index}
                  </p>
                  <div className="max-w-2xl">
                    <h3 className="font-display text-[2.3rem] leading-[0.94] tracking-[-0.05em] text-[var(--color-paper)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[color:rgba(244,239,233,0.7)]">
                      {item.body}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="border-y border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 sm:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <SectionHeading
              eyebrow="FAQ"
              title="The main questions usually come down to fit, scope, and timing."
              body="If the launch matters and the digital presence still feels too generic, this is usually the right moment to talk."
            />

            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1.9rem] border border-white/10 bg-[rgba(255,255,255,0.04)] px-5 py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[1.5rem] leading-[1.02] tracking-[-0.03em] text-[var(--color-paper)]">
                    <span>{item.question}</span>
                    <span className="text-xl text-[var(--color-accent)] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[color:rgba(244,239,233,0.72)] sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20 sm:px-8 md:py-28 lg:px-10">
          <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] shadow-[0_24px_110px_rgba(0,0,0,0.24)]">
            <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-[4.5rem]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,12,0.08),rgba(10,10,12,0.34))]" />
              <AnimatedGridPattern
                numSquares={22}
                maxOpacity={0.05}
                duration={6}
                repeatDelay={1.2}
                className={cn(
                  'mask-[radial-gradient(520px_circle_at_center,white,transparent)]',
                  'inset-0 text-[color:rgba(255,255,255,0.16)]',
                )}
              />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[var(--color-muted)]">
                    Contact
                  </p>
                  <h2 className="mt-4 font-display text-[3rem] leading-[0.92] tracking-[-0.06em] text-[var(--color-paper)] sm:text-[4.1rem]">
                    If the launch needs more conviction, the system should get stronger now.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-[color:rgba(244,239,233,0.72)]">
                    Send the project stage, timeline, and scope. We reply with fit, next steps, and the best shape for the engagement.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {['Project stage', 'Launch timing', 'Needed deliverables'].map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.4rem] border border-white/8 bg-[rgba(10,10,12,0.32)] px-4 py-4 text-sm text-[color:rgba(244,239,233,0.72)] backdrop-blur-md"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="mailto:hello@velourcreative.co?subject=Studio%20Brief"
                  className="inline-flex items-center justify-center gap-3 self-start rounded-full bg-[#f4efe7] px-6 py-3.5 text-sm font-semibold text-[#09090c] shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition hover:translate-y-[-1px] hover:bg-white lg:self-auto"
                  style={{ color: '#09090c' }}
                >
                  hello@velourcreative.co
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <footer className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-1 pt-8 text-sm text-[color:rgba(244,239,233,0.5)] sm:flex-row sm:items-center sm:justify-between">
            <p>Velour Creative</p>
            <p>Identity, landing pages, and campaign systems for premium launches.</p>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
