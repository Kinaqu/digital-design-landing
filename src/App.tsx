import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Grid2X2,
  Layers3,
  MoveRight,
  Sparkles,
} from 'lucide-react'
import { motion } from 'motion/react'
import { AnimatedGridPattern } from './components/ui/animated-grid-pattern'
import CountUp from './components/ui/count-up'
import { Marquee } from './components/ui/marquee'
import ShinyText from './components/ui/shiny-text'
import { cn } from './lib/utils'

const signals = [
  'Identity Systems',
  'Editorial Art Direction',
  'Premium Web Design',
  'Launch Campaign Surfaces',
  'Product Storytelling',
  'Digital Brand Environments',
  'Motion-First Presentations',
  'Design Retainers',
]

const capabilities = [
  {
    icon: Layers3,
    title: 'Brand systems with tension',
    body: 'We build identities that feel authored, not assembled: sharper typography, stronger framing, better rules.',
  },
  {
    icon: Grid2X2,
    title: 'Digital surfaces with hierarchy',
    body: 'From launch pages to product narratives, every screen is designed to direct attention before decoration does.',
  },
  {
    icon: Compass,
    title: 'Creative direction with restraint',
    body: 'The goal is not more effects. It is a more expensive-looking point of view across web, motion, and decks.',
  },
]

const process = [
  {
    index: '01',
    title: 'Frame the brand',
    description:
      'We define the emotional center first: tone, contrast, motion appetite, and the visual idea everything else will follow.',
  },
  {
    index: '02',
    title: 'Compose the system',
    description:
      'Typography, layout, surfaces, and interface rhythm are built as one world so the brand reads as coherent at every scale.',
  },
  {
    index: '03',
    title: 'Ship the launch',
    description:
      'Pages, assets, motion states, and rollout touchpoints arrive production-ready, with fewer revisions and more conviction.',
  },
]

const proofPoints = [
  {
    value: 12,
    suffix: '+',
    label: 'launches directed each year',
  },
  {
    value: 4,
    suffix: 'w',
    label: 'average sprint to first system',
  },
  {
    value: 3,
    suffix: 'x',
    label: 'stronger brand recall in review rooms',
  },
]

const notes = [
  'Brand-led web direction for ambitious software and cultural products.',
  'Visual systems designed to hold up across launch, content, product, and investor narrative.',
  'A studio rhythm that prefers precise decisions over excessive rounds.',
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
      <h2 className="font-display text-4xl leading-[0.95] tracking-[-0.04em] text-[var(--color-paper)] sm:text-5xl">
        {title}
      </h2>
      <p className="max-w-xl text-base leading-7 text-[color:rgba(245,239,232,0.72)] sm:text-lg">
        {body}
      </p>
    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,166,122,0.22),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(108,124,255,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <header className="sticky top-0 z-30 border-b border-white/8 bg-[color:rgba(10,10,12,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] font-display text-lg italic">
              D
            </span>
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Digital Design
              </p>
              <p className="text-sm text-[color:rgba(245,239,232,0.8)]">
                Studio for premium digital presence
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[color:rgba(245,239,232,0.72)] md:flex">
            <a href="#capabilities" className="transition hover:text-white">
              Capabilities
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#approach" className="transition hover:text-white">
              Approach
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-card)] px-4 py-2 text-sm text-[color:rgba(245,239,232,0.92)] transition hover:border-white/30 hover:bg-white/10"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative">
          <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-14 pt-16 sm:px-8 md:pb-20 md:pt-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(25rem,0.85fr)] lg:px-10 lg:pt-28">
            <div className="relative z-10 flex max-w-3xl flex-col">
              <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:rgba(245,239,232,0.82)] shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                <Sparkles className="h-4 w-4 text-[var(--color-accent)]" />
                <ShinyText
                  text="Digital design studio"
                  className="font-mono uppercase tracking-[0.22em]"
                  color="#b7aea5"
                  shineColor="#f7f1ea"
                  speed={3.2}
                />
              </div>

              <h1 className="max-w-4xl font-display text-6xl leading-[0.9] tracking-[-0.055em] text-[var(--color-paper)] sm:text-7xl lg:text-[6.2rem]">
                Editorial-grade digital design for brands that need a sharper
                point of view.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[color:rgba(245,239,232,0.74)] sm:text-xl">
                We create brand systems, launch pages, and visual worlds that
                feel costly in the right way: more composed, more coherent, and
                unmistakably premium.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f5efe8] px-6 py-3.5 text-sm font-semibold text-[#09090c] shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition hover:translate-y-[-1px] hover:bg-white"
                >
                  Book studio call
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#approach"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm text-[color:rgba(245,239,232,0.86)] transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  See how we work
                  <MoveRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                {proofPoints.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.6rem] border border-white/8 bg-white/[0.045] px-5 py-5 shadow-[0_20px_70px_rgba(0,0,0,0.18)]"
                  >
                    <p className="font-display text-4xl tracking-[-0.05em] text-[var(--color-paper)] sm:text-5xl">
                      <CountUp
                        to={item.value}
                        duration={2.2}
                        className="inline-block"
                      />
                      {item.suffix}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[color:rgba(245,239,232,0.68)]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative isolate min-h-[34rem]"
            >
              <div className="absolute inset-0 -z-10 rounded-[2.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_24px_120px_rgba(0,0,0,0.35)]" />
              <AnimatedGridPattern
                numSquares={48}
                maxOpacity={0.12}
                duration={5}
                repeatDelay={1}
                className={cn(
                  'mask-[radial-gradient(680px_circle_at_center,white,transparent)]',
                  'inset-x-0 inset-y-[-24%] h-[170%] skew-y-6 text-[color:rgba(198,166,122,0.44)]',
                )}
              />

              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2.4rem] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                      Signature Direction
                    </p>
                    <p className="mt-3 max-w-xs font-display text-3xl leading-[0.98] tracking-[-0.04em] text-[var(--color-paper)]">
                      A digital presence with the discipline of a brand book.
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-[color:rgba(245,239,232,0.74)]">
                    Live System
                  </span>
                </div>

                <div className="mt-10 grid gap-4">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                    className="rounded-[1.75rem] border border-white/12 bg-[color:rgba(244,238,231,0.08)] p-5 backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      <span>Launch frame</span>
                      <span>04 weeks</span>
                    </div>
                    <div className="mt-5 space-y-5">
                      <div className="h-px bg-white/10" />
                      <div className="grid grid-cols-[1fr_auto] gap-4">
                        <div>
                          <p className="text-sm text-[color:rgba(245,239,232,0.6)]">
                            Core system
                          </p>
                          <p className="mt-2 font-display text-2xl tracking-[-0.04em]">
                            Type, grid, motion, tone
                          </p>
                        </div>
                        <span className="rounded-full border border-white/10 px-3 py-2 text-xs text-[color:rgba(245,239,232,0.72)]">
                          Approved
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-[1.75rem] border border-white/10 bg-[color:rgba(8,8,10,0.5)] p-5">
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                        System notes
                      </p>
                      <div className="mt-5 space-y-4">
                        {notes.map((note) => (
                          <div
                            key={note}
                            className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                          >
                            <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                            <p className="text-sm leading-6 text-[color:rgba(245,239,232,0.72)]">
                              {note}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: 'easeInOut',
                      }}
                      className="rounded-[1.75rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(198,166,122,0.16),rgba(255,255,255,0.04))] p-5"
                    >
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[color:rgba(245,239,232,0.64)]">
                        Brand feel
                      </p>
                      <p className="mt-6 font-display text-[2.15rem] leading-[0.96] tracking-[-0.05em] text-[var(--color-paper)]">
                        Quiet luxury, strong contrast, precise composition.
                      </p>
                      <p className="mt-4 text-sm leading-6 text-[color:rgba(245,239,232,0.72)]">
                        Enough atmosphere to feel memorable, never enough to
                        dilute the message.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/8 py-5">
          <Marquee pauseOnHover className="[--duration:28s]">
            {signals.map((signal) => (
              <div
                key={signal}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[color:rgba(245,239,232,0.74)]"
              >
                {signal}
              </div>
            ))}
          </Marquee>
        </section>

        <section
          id="capabilities"
          className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 md:py-28 lg:px-10"
        >
          <SectionHeading
            eyebrow="Capabilities"
            title="A studio built for typography, composition, and branded digital atmosphere."
            body="We design the visible system and the invisible rules behind it, so the brand feels expensive on first view and still holds together under scrutiny."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
                  <item.icon className="h-5 w-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="mt-8 font-display text-[2rem] leading-[0.96] tracking-[-0.04em] text-[var(--color-paper)]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-sm text-base leading-7 text-[color:rgba(245,239,232,0.7)]">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-10 sm:px-8 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10"
        >
          <SectionHeading
            eyebrow="Process"
            title="A disciplined studio process that keeps the work sharp."
            body="The project moves from emotional direction to concrete system, then into launch surfaces that are already aligned instead of patched together at the end."
          />

          <div className="space-y-4">
            {process.map((item, index) => (
              <motion.article
                key={item.index}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/8 bg-white/[0.045] p-6"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <p className="font-mono text-[0.78rem] uppercase tracking-[0.34em] text-[var(--color-muted)]">
                    {item.index}
                  </p>
                  <div className="max-w-xl">
                    <h3 className="font-display text-[2rem] leading-[0.96] tracking-[-0.04em] text-[var(--color-paper)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[color:rgba(245,239,232,0.68)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="approach"
          className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 md:py-28 lg:px-10"
        >
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[2.25rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(198,166,122,0.18),rgba(255,255,255,0.04))] p-7 sm:p-9">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[color:rgba(245,239,232,0.62)]">
                Design premise
              </p>
              <p className="mt-6 font-display text-4xl leading-[0.93] tracking-[-0.05em] text-[var(--color-paper)] sm:text-5xl">
                The site should feel like the brand already grew up.
              </p>
              <p className="mt-6 max-w-lg text-base leading-7 text-[color:rgba(245,239,232,0.72)]">
                Not louder. Not busier. Just more decisive in tone, more
                deliberate in spacing, and more intentional in the way every
                surface supports the same brand story.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="rounded-[2rem] border border-white/8 bg-white/[0.045] p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Typography
                </p>
                <p className="mt-6 font-display text-[2rem] leading-[0.98] tracking-[-0.045em] text-[var(--color-paper)]">
                  Serif-led headlines.
                </p>
                <p className="mt-4 text-sm leading-6 text-[color:rgba(245,239,232,0.68)]">
                  Editorial contrast gives the brand gravity; the sans layer
                  keeps the system crisp and usable.
                </p>
              </article>

              <article className="rounded-[2rem] border border-white/8 bg-white/[0.045] p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Composition
                </p>
                <p className="mt-6 font-display text-[2rem] leading-[0.98] tracking-[-0.045em] text-[var(--color-paper)]">
                  A grid that breathes.
                </p>
                <p className="mt-4 text-sm leading-6 text-[color:rgba(245,239,232,0.68)]">
                  Big margins, calm surfaces, and a stronger center of gravity
                  make the work read as premium rather than improvised.
                </p>
              </article>

              <article className="rounded-[2rem] border border-white/8 bg-white/[0.045] p-6 sm:col-span-2">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Brand sensation
                </p>
                <p className="mt-6 max-w-2xl font-display text-[2.2rem] leading-[0.95] tracking-[-0.045em] text-[var(--color-paper)]">
                  The final result should feel authored by a studio with taste,
                  not assembled by a stack of default components.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-20 sm:px-8 md:pb-28 lg:px-10">
          <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))]">
            <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-14">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,12,0.08),rgba(9,9,12,0.3))]" />
              <AnimatedGridPattern
                numSquares={24}
                maxOpacity={0.045}
                duration={6}
                repeatDelay={1.2}
                className={cn(
                  'mask-[radial-gradient(520px_circle_at_center,white,transparent)]',
                  'inset-0 text-[color:rgba(255,255,255,0.16)]',
                )}
              />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl rounded-[2rem] bg-[rgba(9,9,12,0.44)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-6">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[var(--color-muted)]">
                    Start the brief
                  </p>
                  <h2 className="mt-4 font-display text-5xl leading-[0.92] tracking-[-0.05em] text-[var(--color-paper)] sm:text-6xl">
                    If the brand needs to look more certain, the design needs a
                    stronger system.
                  </h2>
                </div>

                <a
                  href="mailto:hello@digitaldesign.studio"
                  className="inline-flex items-center justify-center gap-3 self-start rounded-full bg-[#f5efe8] px-6 py-3.5 text-sm font-semibold text-[#09090c] shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition hover:translate-y-[-1px] hover:bg-white lg:self-auto"
                >
                  hello@digitaldesign.studio
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
