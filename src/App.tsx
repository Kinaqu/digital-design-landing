import { ArrowRight, ArrowUpRight, Compass, Grid2X2, Layers3, MoveRight, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { AnimatedGridPattern } from './components/ui/animated-grid-pattern'
import CountUp from './components/ui/count-up'
import { Marquee } from './components/ui/marquee'
import ShinyText from './components/ui/shiny-text'
import { cn } from './lib/utils'

const signals = [
  'Brand identity systems',
  'Digital direction',
  'Campaign launch worlds',
  'Motion language',
  'Editorial web design',
  'Selective retainers',
]

const heroStats = [
  {
    value: 12,
    suffix: '+',
    label: 'brand worlds directed each year',
  },
  {
    value: 4,
    suffix: 'w',
    label: 'average sprint to first visual system',
  },
  {
    value: 3,
    suffix: 'layers',
    label: 'identity, digital, and campaign composed together',
  },
]

const heroNotes = [
  'Velour Creative works where brand identity, digital design, and launch direction need to read as one authored system.',
  'The roster stays deliberately small so each project gets creative-director attention instead of handoff energy.',
  'The result is a presence with atmosphere, hierarchy, and enough restraint to feel expensive.',
]

const practicePillars = [
  {
    icon: Layers3,
    label: 'Identity',
    title: 'Identity with posture.',
    body: 'Type, spacing, tone, and formal rules shaped until the brand feels inevitable instead of merely polished.',
    note: 'Brand books, art direction, naming support, launch signatures',
  },
  {
    icon: Grid2X2,
    label: 'Digital',
    title: 'Digital that directs the eye.',
    body: 'Landing pages, campaign sites, and product narratives composed like editorial frames, with rhythm doing the heavy lifting.',
    note: 'Launch pages, product storytelling, motion systems, content surfaces',
  },
  {
    icon: Compass,
    label: 'Campaign',
    title: 'Campaign systems that hold the room.',
    body: 'Rollout touchpoints built from one visual logic so the launch still feels precise after the homepage is gone.',
    note: 'Decks, social crops, motion cuts, event visuals, handoff kits',
  },
]

const method = [
  {
    index: '01',
    title: 'Establish the tension',
    body: 'We define the brand’s emotional center first: what feels sharp, what stays quiet, where the drama lives, and where it does not.',
  },
  {
    index: '02',
    title: 'Compose the world',
    body: 'Typography, grid, imagery, motion, and interface decisions are built together so nothing feels added later for decoration.',
  },
  {
    index: '03',
    title: 'Release with control',
    body: 'Launch surfaces arrive production-ready with the visual hierarchy, motion cues, and campaign edits already aligned.',
  },
]

const concludingNotes = [
  'Selective by design',
  'Fashion-adjacent taste, product-grade rigor',
  'Built for premium software, hospitality, culture, and modern luxury',
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
  const primaryPillar = practicePillars[0]
  const PrimaryPillarIcon = primaryPillar.icon

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
                Brand worlds with editorial control
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[color:rgba(244,239,233,0.68)] md:flex">
            <a href="#practice" className="transition hover:text-white">
              Practice
            </a>
            <a href="#method" className="transition hover:text-white">
              Method
            </a>
            <a href="#brief" className="transition hover:text-white">
              Brief
            </a>
          </nav>

          <a
            href="#brief"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-card)] px-4 py-2 text-sm text-[color:rgba(244,239,233,0.92)] transition hover:border-white/30 hover:bg-white/10"
          >
            Request a studio deck
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-white/8">
          <div className="pointer-events-none absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(177,136,87,0.18),transparent_68%)] blur-3xl" />

          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 pt-14 sm:px-8 md:pb-20 md:pt-20 lg:px-10 xl:grid-cols-[minmax(0,1.04fr)_minmax(25rem,0.92fr)_minmax(0,0.74fr)] xl:items-end">
            <div className="relative z-10 flex max-w-3xl flex-col xl:pb-10">
              <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:rgba(244,239,233,0.82)] shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                <Sparkles className="h-4 w-4 text-[var(--color-accent)]" />
                <ShinyText
                  text="Selective creative direction for premium launches"
                  className="font-mono uppercase tracking-[0.22em]"
                  color="#bbb2a8"
                  shineColor="#f8f2eb"
                  speed={3.4}
                />
              </div>

              <h1 className="max-w-4xl font-display text-[4.3rem] leading-[0.88] tracking-[-0.06em] text-[var(--color-paper)] sm:text-[5.45rem] lg:text-[6.45rem]">
                We turn a brand into a scene worth entering.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:rgba(244,239,233,0.74)] sm:text-xl">
                Velour Creative builds identity systems, digital surfaces, and
                campaign frames with the restraint of a fashion editorial and
                the rigor of a launch-ready brand system.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#brief"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f4efe7] px-6 py-3.5 text-sm font-semibold text-[#09090c] shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition hover:translate-y-[-1px] hover:bg-white"
                  style={{ color: '#09090c' }}
                >
                  Start the brief
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#practice"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm text-[color:rgba(244,239,233,0.86)] transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  Explore the studio world
                  <MoveRight className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-8 max-w-xl text-sm leading-7 text-[color:rgba(244,239,233,0.56)]">
                Built for ambitious software, cultural products, hospitality,
                and fashion-adjacent launches that need more taste, more
                control, and less template energy.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative isolate min-h-[39rem] overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_30px_140px_rgba(0,0,0,0.34)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,239,233,0.08),transparent_28%),radial-gradient(circle_at_35%_18%,rgba(188,146,95,0.18),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(11,11,14,0.44))]" />
              <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-position:center_center] [background-size:44px_44px]" />
              <AnimatedGridPattern
                numSquares={36}
                maxOpacity={0.08}
                duration={6}
                repeatDelay={1.4}
                className={cn(
                  'mask-[radial-gradient(560px_circle_at_center,white,transparent)]',
                  'inset-x-[-20%] inset-y-[-16%] h-[132%] skew-y-6 text-[color:rgba(188,146,95,0.26)]',
                )}
              />

              <div className="pointer-events-none absolute inset-x-6 top-6 flex items-center justify-between rounded-full border border-white/10 bg-[rgba(8,8,10,0.46)] px-4 py-3 text-[0.68rem] uppercase tracking-[0.28em] text-[color:rgba(244,239,233,0.58)] backdrop-blur-md">
                <span>Campaign world 01</span>
                <span>Velour Creative</span>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                className="absolute left-1/2 top-[14%] h-[74%] w-[68%] -translate-x-1/2 overflow-hidden rounded-[20rem] border border-white/12 bg-[radial-gradient(circle_at_50%_16%,rgba(244,239,233,0.2),transparent_16%),radial-gradient(circle_at_46%_42%,rgba(190,149,98,0.34),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(50,39,48,0.86),transparent_72%),linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))] shadow-[0_35px_90px_rgba(0,0,0,0.42)]"
              >
                <div className="absolute inset-[8%] rounded-[16rem] border border-white/8" />
                <div className="absolute inset-[18%] rounded-[14rem] border border-white/6" />
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:100%_30px]" />
                <div className="absolute inset-x-[18%] top-[17%] h-[32%] rounded-full bg-[radial-gradient(circle,rgba(244,239,233,0.24),rgba(244,239,233,0)_70%)] blur-md" />
                <div className="absolute inset-x-0 top-[26%] text-center font-display text-[9rem] leading-none tracking-[-0.08em] text-white/[0.08] sm:text-[11rem]">
                  V
                </div>
                <div className="absolute bottom-16 left-1/2 w-[72%] -translate-x-1/2 text-center">
                  <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-[color:rgba(244,239,233,0.56)]">
                    The Velour frame
                  </p>
                  <p className="mt-3 font-display text-[2.2rem] leading-[0.92] tracking-[-0.05em] text-[var(--color-paper)]">
                    Soft light, sharp system, zero drift.
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                className="absolute left-6 top-[20%] max-w-[12rem] rounded-[1.65rem] border border-white/10 bg-[rgba(8,8,10,0.54)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-md"
              >
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-[color:rgba(244,239,233,0.5)]">
                  Presence
                </p>
                <p className="mt-3 font-display text-[1.55rem] leading-[0.96] tracking-[-0.04em]">
                  Editorial enough to feel rare.
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                className="absolute bottom-7 right-6 max-w-[14rem] rounded-[1.65rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(188,146,95,0.18),rgba(255,255,255,0.04))] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
              >
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-[color:rgba(244,239,233,0.58)]">
                  Composition
                </p>
                <p className="mt-3 font-display text-[1.55rem] leading-[0.96] tracking-[-0.04em]">
                  Built like a campaign, not a brochure.
                </p>
              </motion.div>
            </motion.div>

            <div className="relative xl:pb-8">
              <div className="rounded-[2.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-6 shadow-[0_20px_90px_rgba(0,0,0,0.18)] sm:p-7">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-[var(--color-muted)]">
                  Studio stance
                </p>
                <p className="mt-5 font-display text-[2.35rem] leading-[0.94] tracking-[-0.05em] text-[var(--color-paper)]">
                  Selective, cinematic, exacting.
                </p>
                <div className="mt-6 space-y-4">
                  {heroNotes.map((note) => (
                    <div
                      key={note}
                      className="rounded-[1.45rem] border border-white/8 bg-[rgba(255,255,255,0.03)] px-4 py-4"
                    >
                      <p className="text-sm leading-6 text-[color:rgba(244,239,233,0.68)]">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 xl:col-span-3 xl:grid-cols-[1.1fr_0.9fr] xl:pt-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.8rem] border border-white/8 bg-[rgba(255,255,255,0.045)] px-5 py-5 shadow-[0_20px_70px_rgba(0,0,0,0.16)]"
                  >
                    <p className="font-display text-[2.8rem] tracking-[-0.06em] text-[var(--color-paper)] sm:text-[3.3rem]">
                      <CountUp
                        to={item.value}
                        from={item.value}
                        duration={2.2}
                        className="inline-block"
                      />
                      {item.suffix}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[color:rgba(244,239,233,0.62)]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.9rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(188,146,95,0.12),rgba(255,255,255,0.03))] p-6">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-[color:rgba(244,239,233,0.58)]">
                  Agency note
                </p>
                <p className="mt-4 font-display text-[2rem] leading-[0.95] tracking-[-0.05em]">
                  Luxury online is not more gloss. It is more control.
                </p>
                <p className="mt-4 max-w-xl text-sm leading-6 text-[color:rgba(244,239,233,0.7)] sm:text-base">
                  The page, the pitch deck, the launch motion, the social
                  crops, and the product story should all sound like the same
                  creative director signed off on them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 py-5">
          <Marquee pauseOnHover className="[--duration:26s]">
            {signals.map((signal) => (
              <div
                key={signal}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[color:rgba(244,239,233,0.7)]"
              >
                {signal}
              </div>
            ))}
          </Marquee>
        </section>

        <section
          id="practice"
          className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 md:py-28 lg:px-10"
        >
          <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr]">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Practice"
                title="A studio for brands that need atmosphere without losing discipline."
                body="Velour Creative sits between brand identity, digital design, and campaign direction. The work is quiet where it should be, sharp where it matters, and composed to feel expensive before a word is read."
              />

              <div className="rounded-[2.4rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(188,146,95,0.16),rgba(255,255,255,0.03))] p-7 sm:p-8">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[color:rgba(244,239,233,0.6)]">
                  Studio premise
                </p>
                <p className="mt-5 font-display text-[2.7rem] leading-[0.94] tracking-[-0.05em] text-[var(--color-paper)] sm:text-[3.3rem]">
                  The goal is not to look busier than everyone else. The goal is
                  to look more certain.
                </p>
                <p className="mt-5 max-w-xl text-base leading-7 text-[color:rgba(244,239,233,0.72)]">
                  Strong brands rarely shout. They control proportion, tone,
                  image treatment, and pacing so thoroughly that the whole room
                  settles around them.
                </p>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7 }}
                className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.18)] lg:row-span-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
                  <PrimaryPillarIcon className="h-5 w-5 text-[var(--color-accent)]" />
                </div>
                <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  {primaryPillar.label}
                </p>
                <h3 className="mt-4 font-display text-[2.5rem] leading-[0.94] tracking-[-0.05em] text-[var(--color-paper)]">
                  {primaryPillar.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[color:rgba(244,239,233,0.72)]">
                  {primaryPillar.body}
                </p>
                <div className="mt-10 rounded-[1.7rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[color:rgba(244,239,233,0.54)]">
                    Includes
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[color:rgba(244,239,233,0.68)]">
                    {primaryPillar.note}
                  </p>
                </div>
              </motion.article>

              {practicePillars.slice(1).map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="rounded-[2.2rem] border border-white/8 bg-[rgba(255,255,255,0.045)] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.16)]"
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
                  <p className="mt-6 text-sm leading-6 text-[color:rgba(244,239,233,0.5)]">
                    {item.note}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="method"
          className="border-y border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-8 md:py-28 lg:px-10 xl:grid-cols-[0.84fr_1.16fr]">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Method"
                title="The process is paced like a creative direction edit, not an assembly line."
                body="The work moves from emotional premise to visual world to launch execution. Each phase exists to reduce drift, compress revisions, and make the final brand presence feel inevitable."
              />

              <div className="rounded-[2.2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                <p className="font-display text-[2rem] leading-[0.96] tracking-[-0.05em]">
                  A polished homepage is not the objective. A coherent brand
                  atmosphere is.
                </p>
                <p className="mt-4 text-sm leading-6 text-[color:rgba(244,239,233,0.68)]">
                  That is why typography, motion, messaging, imagery, and
                  launch surfaces are treated as one conversation from the
                  beginning.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-[rgba(255,255,255,0.03)] px-6 py-3 shadow-[0_24px_90px_rgba(0,0,0,0.18)] sm:px-8">
              {method.map((item, index) => (
                <motion.article
                  key={item.index}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.24 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className={cn(
                    'grid gap-5 py-7 sm:grid-cols-[auto_1fr]',
                    index !== method.length - 1 && 'border-b border-white/8',
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

        <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 md:py-28 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
            <div className="overflow-hidden rounded-[2.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
              <div className="relative px-7 py-8 sm:px-8 sm:py-9">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(188,146,95,0.16),transparent_30%)]" />
                <p className="relative font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[var(--color-muted)]">
                  Final standard
                </p>
                <p className="relative mt-5 max-w-3xl font-display text-[3rem] leading-[0.92] tracking-[-0.06em] text-[var(--color-paper)] sm:text-[4rem]">
                  What leaves the studio should feel authored, not assembled.
                </p>
                <p className="relative mt-5 max-w-2xl text-base leading-7 text-[color:rgba(244,239,233,0.72)]">
                  The page should carry the same point of view as the identity,
                  the campaign edits, and the launch narrative. If any part
                  feels generic, it weakens the whole system.
                </p>

                <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
                  {concludingNotes.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.6rem] border border-white/8 bg-[rgba(255,255,255,0.035)] px-4 py-4 text-sm leading-6 text-[color:rgba(244,239,233,0.68)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2.6rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(188,146,95,0.18),rgba(255,255,255,0.03))] p-7 sm:p-8">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[color:rgba(244,239,233,0.58)]">
                Studio outcome
              </p>
              <p className="mt-5 font-display text-[2.7rem] leading-[0.93] tracking-[-0.05em] text-[var(--color-paper)] sm:text-[3.2rem]">
                A premium presence that feels calm, costly, and unmistakably directed.
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-[color:rgba(244,239,233,0.72)]">
                The strongest launches do not look louder than the market. They
                look like someone with taste made enough hard decisions early.
              </p>
            </div>
          </div>
        </section>

        <section id="brief" className="px-6 pb-20 sm:px-8 md:pb-28 lg:px-10">
          <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] shadow-[0_24px_110px_rgba(0,0,0,0.24)]">
            <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-[4.75rem]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,12,0.08),rgba(10,10,12,0.34))]" />
              <AnimatedGridPattern
                numSquares={24}
                maxOpacity={0.05}
                duration={6}
                repeatDelay={1.2}
                className={cn(
                  'mask-[radial-gradient(520px_circle_at_center,white,transparent)]',
                  'inset-0 text-[color:rgba(255,255,255,0.16)]',
                )}
              />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl rounded-[2rem] bg-[rgba(10,10,12,0.42)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-6">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.32em] text-[var(--color-muted)]">
                    Start the brief
                  </p>
                  <h2 className="mt-4 font-display text-[3.1rem] leading-[0.92] tracking-[-0.06em] text-[var(--color-paper)] sm:text-[4.2rem]">
                    If the launch needs a stronger center of gravity, the brand
                    world probably needs directing earlier.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-[color:rgba(244,239,233,0.72)]">
                    Velour Creative partners on identity systems, editorial
                    launch pages, and premium campaign surfaces for teams that
                    care how the work feels before they care how busy it looks.
                  </p>
                </div>

                <a
                  href="mailto:hello@velourcreative.co"
                  className="inline-flex items-center justify-center gap-3 self-start rounded-full bg-[#f4efe7] px-6 py-3.5 text-sm font-semibold text-[#09090c] shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition hover:translate-y-[-1px] hover:bg-white lg:self-auto"
                  style={{ color: '#09090c' }}
                >
                  hello@velourcreative.co
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
