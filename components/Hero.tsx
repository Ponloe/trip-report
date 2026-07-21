import Image from "next/image";

type HeroProps = {
  grandTotal: string;
};

export default function Hero({ grandTotal }: HeroProps) {
  return (
    <section className="hero section-fade" id="top">
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">Professional Business Writing Portfolio</p>
        <h1>Business Trip Reports 2026</h1>
        <p className="hero-subtitle">Angkor Verde Foods Co., Ltd.</p>
        <p className="hero-copy">
          This report summarizes five official business trips conducted for
          investor meetings, company expansion research, employee feature
          writing, AI workplace learning, and social media marketing research.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#reports">
            View Reports
          </a>
          <a className="secondary-button" href="#summary">
            Executive Summary
          </a>
        </div>
      </div>
      <aside className="hero-summary" id="summary" aria-label="Executive summary">
        <Image
          className="summary-logo"
          src="/angkor-verde-logo.png"
          alt="Angkor Verde Foods Co., Ltd. logo"
          width={118}
          height={118}
          priority
        />
        <span className="summary-label">Executive Summary</span>
        <strong>5 trips, 15 report days</strong>
        <p>
          Research, meetings, interviews, and international learning activities
          produced practical recommendations for growth in Cambodia and
          Southeast Asia.
        </p>
        <div className="summary-total">
          <span>Estimated grand total</span>
          <strong>{grandTotal}</strong>
        </div>
      </aside>
    </section>
  );
}
