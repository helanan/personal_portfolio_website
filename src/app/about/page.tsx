import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About | Helana Nosratbakhsh",
  description:
    "Career journey, work style, and the unique intersection of business acumen and data engineering.",
};

function SectionLabel({ light = false, children }: { light?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-px bg-rose shrink-0" />
      <span className={`text-[10px] font-sans uppercase tracking-widest ${light ? "text-cream/50" : "text-gray-mid"}`}>
        {children}
      </span>
    </div>
  );
}

const milestones = [
  {
    period: "2014–2016",
    label: "The Sales Foundation",
    companies: "Listrak · Emma / Marigold",
    detail:
      "Built deep enterprise CRM data expertise and stakeholder communication skills — understanding why data is requested long before writing a single pipeline.",
    highlight: false,
  },
  {
    period: "2016–2017",
    label: "The Pivot",
    companies: "Nashville Software School",
    detail:
      "Left sales to commit fully to engineering. Completed an immersive full-stack developer bootcamp while actively managing a structured job search and building technical applications.",
    highlight: false,
  },
  {
    period: "Aug 2017",
    label: "The Breakthrough",
    companies: "Tractor Supply Company",
    detail:
      "First engineering role — hired as Associate Developer building Talend data integrations and SAP ERP pipelines. The pivot paid off.",
    highlight: true,
  },
  {
    period: "2020–2024",
    label: "Scaling Expertise",
    companies: "XSOLIS",
    detail:
      "Sequential promotions from ETL Specialist II to Data Engineer II. Led enterprise Redshift migrations, built Python/SQL pipelines supporting ML models, embedded HITRUST compliance into workflows.",
    highlight: false,
  },
  {
    period: "Mar 2024",
    label: "Elite Engineering",
    companies: "R1 RCM",
    detail:
      "Senior Data Engineer II. Restored $47.8M in monthly revenue reporting accuracy across 1,247 healthcare facilities. Architecting Data Vault 2.0 on Snowflake. $125,000 base + 5% bonus.",
    highlight: true,
  },
];

const motivators = [
  "High-energy environments",
  "Overcoming complex obstacles",
  "Implementing bold ideas",
  "Working toward challenging goals without making excuses",
];

const stressors = [
  "Following strict, inefficient protocols",
  "Getting bogged down in unproductive meetings",
  "Lacking control over situations or facing throttled autonomy",
];

const collabStyles = [
  {
    type: "D-Style",
    label: "Dominant",
    desc: "Prefers dialogue over power struggles. Both push for quick progress, but Helana consciously works to compromise on solutions rather than escalating competitive friction.",
  },
  {
    type: "i-Style",
    label: "Influence",
    desc: "Appreciates their spontaneity and fast pace. Adapts by engaging in team-building and small talk before driving straight to bottom-line business results.",
  },
  {
    type: "S-Style",
    label: "Steadiness",
    desc: "Proactively seeks their often soft-spoken opinions. Respects their cautious, methodical pace by establishing mutually agreed-upon deadlines rather than applying forceful pressure.",
  },
  {
    type: "C-Style",
    label: "Conscientiousness",
    desc: "Leverages their desire for analytical accuracy. Backs up her push for rapid execution with concrete evidence, balancing urgency with their need to objectively analyze all options.",
  },
];

function RadarChart() {
  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-xs mx-auto" aria-label="DISC pace and priorities radar chart">
      {/* Grid rings — 25 / 50 / 75 / 100% */}
      <polygon points="150,126 167,133 174,150 167,167 150,174 133,167 127,150 133,133" fill="none" stroke="#e8e4de" strokeWidth="1" />
      <polygon points="150,103 184,117 198,150 184,184 150,198 117,184 103,150 117,117" fill="none" stroke="#e8e4de" strokeWidth="1" />
      <polygon points="150,79 201,100 221,150 201,201 150,221 100,201 79,150 100,100"  fill="none" stroke="#e8e4de" strokeWidth="1" />
      <polygon points="150,55 217,83 245,150 217,217 150,245 83,217 55,150 83,83"     fill="none" stroke="#e8e4de" strokeWidth="1" />
      {/* Axis lines */}
      <line x1="150" y1="150" x2="150" y2="55"  stroke="#e8e4de" strokeWidth="1" />
      <line x1="150" y1="150" x2="217" y2="83"  stroke="#e8e4de" strokeWidth="1" />
      <line x1="150" y1="150" x2="245" y2="150" stroke="#e8e4de" strokeWidth="1" />
      <line x1="150" y1="150" x2="217" y2="217" stroke="#e8e4de" strokeWidth="1" />
      <line x1="150" y1="150" x2="150" y2="245" stroke="#e8e4de" strokeWidth="1" />
      <line x1="150" y1="150" x2="83"  y2="217" stroke="#e8e4de" strokeWidth="1" />
      <line x1="150" y1="150" x2="55"  y2="150" stroke="#e8e4de" strokeWidth="1" />
      <line x1="150" y1="150" x2="83"  y2="83"  stroke="#e8e4de" strokeWidth="1" />
      {/* Data polygon: Results 90%, Action 85%, Challenge 80%, Consistency 45%, Accuracy 50%, Stability 35%, Harmony 30%, Social Recog 40% */}
      <polygon
        points="150,65 207,93 226,150 180,180 150,198 127,174 122,150 123,123"
        fill="#c9a49b"
        fillOpacity="0.22"
        stroke="#c9a49b"
        strokeWidth="1.5"
      />
      {/* Dots */}
      <circle cx="150" cy="65"  r="3" fill="#c9a49b" />
      <circle cx="207" cy="93"  r="3" fill="#c9a49b" />
      <circle cx="226" cy="150" r="3" fill="#c9a49b" />
      <circle cx="180" cy="180" r="3" fill="#c9a49b" />
      <circle cx="150" cy="198" r="3" fill="#c9a49b" />
      <circle cx="127" cy="174" r="3" fill="#c9a49b" />
      <circle cx="122" cy="150" r="3" fill="#c9a49b" />
      <circle cx="123" cy="123" r="3" fill="#c9a49b" />
      {/* Axis labels */}
      <text x="150" y="27"  textAnchor="middle" fontSize="7.5" fill="#9b9896" letterSpacing="0.8">RESULTS</text>
      <text x="242" y="68"  textAnchor="middle" fontSize="7.5" fill="#9b9896" letterSpacing="0.8">ACTION</text>
      <text x="275" y="153" textAnchor="start"  fontSize="7.5" fill="#9b9896" letterSpacing="0.8">CHALLENGE</text>
      <text x="240" y="243" textAnchor="middle" fontSize="7.5" fill="#9b9896" letterSpacing="0.8">CONSISTENCY</text>
      <text x="150" y="272" textAnchor="middle" fontSize="7.5" fill="#9b9896" letterSpacing="0.8">ACCURACY</text>
      <text x="60"  y="243" textAnchor="middle" fontSize="7.5" fill="#9b9896" letterSpacing="0.8">STABILITY</text>
      <text x="18"  y="153" textAnchor="start"  fontSize="7.5" fill="#9b9896" letterSpacing="0.8">HARMONY</text>
      <text x="40"  y="60"  textAnchor="middle" fontSize="7"   fill="#9b9896" letterSpacing="0.5">SOCIAL</text>
      <text x="40"  y="70"  textAnchor="middle" fontSize="7"   fill="#9b9896" letterSpacing="0.5">RECOG.</text>
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <SectionLabel>The Full Picture</SectionLabel>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-charcoal leading-none mb-6">
          More than
          <br />
          <em className="not-italic italic">a résumé</em>
        </h1>
        <p className="font-sans text-base text-gray-warm leading-relaxed max-w-xl">
          Career trajectory, work style, and what makes this engineer different
          from someone who just knows the tools.
        </p>
      </div>

      <div className="h-px bg-smoke" />

      {/* ── 1. Career Journey ── */}
      <section className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Career Journey</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-charcoal leading-tight mb-16">
            Pivot &amp; Persistence
          </h2>

          <div className="relative">
            <div className="absolute left-0 sm:left-36 top-0 bottom-0 w-px bg-smoke" />
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="relative pl-8 sm:pl-0 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-12"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-[-4px] sm:left-36 top-8 sm:-translate-x-[4px] z-10 w-2.5 h-2.5 rounded-full border-2 ${
                      m.highlight
                        ? "bg-rose border-rose"
                        : "bg-cream border-gray-mid"
                    }`}
                  />
                  {/* Period */}
                  <div className="hidden sm:flex justify-end pr-10 pt-8">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-gray-mid">
                      {m.period}
                    </span>
                  </div>
                  {/* Card */}
                  <div className="py-8 border-b border-smoke">
                    <span className="sm:hidden text-[10px] font-sans uppercase tracking-widest text-gray-mid block mb-1">
                      {m.period}
                    </span>
                    <div
                      className={`text-[10px] font-sans uppercase tracking-widest mb-1 ${
                        m.highlight ? "text-rose" : "text-gray-mid"
                      }`}
                    >
                      {m.label}
                    </div>
                    <div className="font-serif text-xl text-charcoal mb-2">
                      {m.companies}
                    </div>
                    <p className="font-sans text-sm text-gray-warm leading-relaxed max-w-xl">
                      {m.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-smoke" />

      {/* ── 2. DISC Profile ── */}
      <section className="py-28 bg-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Work Style</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-charcoal leading-tight mb-2">
            The Helana User Manual
          </h2>
          <p className="font-sans text-xs text-gray-mid uppercase tracking-widest mb-16">
            DISC D-Style Profile · Technical Specification Rev 1.0
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Radar */}
            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-gray-mid mb-6">
                Pace &amp; Priorities Radar
              </p>
              <RadarChart />
              <p className="font-sans text-xs text-gray-warm mt-5 text-center max-w-xs mx-auto leading-relaxed">
                Described as driven, strong-willed, and forceful. High spikes on{" "}
                <strong className="text-charcoal font-medium">Results</strong>,{" "}
                <strong className="text-charcoal font-medium">Action</strong>, and{" "}
                <strong className="text-charcoal font-medium">Challenge</strong>.
              </p>
            </div>

            {/* Motivators + Stressors */}
            <div className="space-y-6">
              <div className="border border-smoke bg-cream p-7">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-charcoal">
                    Motivators
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    Active
                  </span>
                </div>
                <ul className="space-y-3">
                  {motivators.map((m, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-rose shrink-0 mt-px">✓</span>
                      <span className="font-sans text-sm text-gray-warm">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-smoke bg-cream p-7">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-charcoal">
                    Stressors
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest text-amber-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                    Warning
                  </span>
                </div>
                <ul className="space-y-3">
                  {stressors.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gray-mid shrink-0 mt-px">✗</span>
                      <span className="font-sans text-sm text-gray-warm">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-smoke" />

      {/* ── 3. Collaboration Dynamics ── */}
      <section className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>How I Work With You</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-charcoal leading-tight mb-2">
            Collaboration &amp; Conflict Dynamics
          </h2>
          <p className="font-sans text-xs text-gray-mid uppercase tracking-widest mb-16">
            Technical Interaction Matrix · Rev 1.0
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-smoke">
            {collabStyles.map((s) => (
              <div key={s.type} className="bg-cream p-8 hover:bg-mist transition-colors duration-300">
                <div className="w-8 h-px bg-rose mb-5" />
                <div className="text-[10px] font-sans uppercase tracking-widest text-rose mb-1">
                  {s.type}
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-4">{s.label}</h3>
                <p className="font-sans text-sm text-gray-warm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-smoke" />

      {/* ── 4. Value Proposition ── */}
      <section className="py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel light>Why It Works</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-cream leading-tight mb-16">
            The Intersection of Business Acumen
            <br className="hidden sm:block" />
            <em className="not-italic italic text-rose"> &amp; Data Engineering</em>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
            <div className="bg-charcoal p-10">
              <div className="w-8 h-px bg-rose mb-6" />
              <h3 className="font-serif text-xl text-cream mb-4 leading-tight">
                Enterprise Stakeholder Acumen
              </h3>
              <p className="font-sans text-sm text-cream/60 leading-relaxed">
                Forged in SaaS sales. Understands why data is being requested —
                effectively translating ambiguous business needs into precise
                technical requirements.
              </p>
            </div>

            <div className="bg-rose/10 border-x border-rose/20 p-10 flex flex-col items-center justify-center text-center">
              <div className="text-[10px] font-sans uppercase tracking-widest text-rose mb-6">
                The Result
              </div>
              <p className="font-sans text-sm text-cream leading-relaxed">
                An engineer who doesn&apos;t just write code, but{" "}
                <em>architecturally translates business intent</em> into
                resilient, ROI-driven pipelines that empower the entire
                organization.
              </p>
            </div>

            <div className="bg-charcoal p-10">
              <div className="w-8 h-px bg-rose mb-6" />
              <h3 className="font-serif text-xl text-cream mb-4 leading-tight">
                Intense Technical Agility
              </h3>
              <p className="font-sans text-sm text-cream/60 leading-relaxed">
                Proven by self-driven pivot and rapid mastery of the modern data
                stack — Snowflake, dbt, Airflow, Kubernetes — in highly
                regulated environments.
              </p>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-rose text-cream text-sm font-sans tracking-wide hover:bg-rose-dark transition-colors duration-300 group"
            >
              Let&apos;s Work Together
              <ArrowRight
                size={15}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
