import Link from "next/link";

const companyFacts = [
  ["Tagline", "Healthy Cambodian Taste for a Greener Future"],
  ["Established", "2021"],
  ["Location", "Phnom Penh, Cambodia"],
  ["E-mail", "info@angkorverdefoods.com"],
  ["Years of Operation", "5 years as of 2026"],
];

const values = [
  "Quality",
  "Sustainability",
  "Customer trust",
  "Innovation",
  "Community responsibility",
];

const profileDetails = [
  {
    title: "Vision",
    copy: "To become a trusted Cambodian food brand recognized across Southeast Asia for safe, healthy, and sustainable tropical food products.",
  },
  {
    title: "Mission",
    copy: "To make Cambodian tropical ingredients more valuable by producing safe, attractive, and sustainable food products for domestic and regional customers.",
  },
  {
    title: "Uniqueness",
    copy: "Angkor Verde Foods combines local fruit sourcing, modern drying methods, compostable packaging, and bilingual product presentation for tourists, supermarkets, cafes, and export buyers.",
  },
  {
    title: "Achievements",
    copy: "The company has built a premium dried-fruit product line, entered hotel and cafe channels, prepared export-ready packaging concepts, and developed business trip research to support expansion.",
  },
  {
    title: "Business Partners",
    copy: "Key partners include Cambodian fruit suppliers, eco-packaging vendors, local cafes, hotel gift shops, specialty grocery retailers, and tourism-focused retail outlets.",
  },
  {
    title: "International Linkages",
    copy: "The company is developing regional links through export research, Singapore specialty retail opportunities, Malaysia workplace learning, and ASEAN food and beverage market awareness.",
  },
  {
    title: "CSR & Outreach",
    copy: "Community activities include supporting local growers, reducing packaging waste, promoting Cambodian ingredients, and planning food education programs about healthy snacks and responsible sourcing.",
  },
];

export default function CompanyProfile() {
  return (
    <section className="section section-fade" id="profile">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Company Profile</p>
          <h2>Premium Cambodian food products with regional growth potential</h2>
        </div>
        <p>
          Angkor Verde Foods Co., Ltd. presents Cambodian ingredients through
          modern packaging, formal business planning, and sustainable growth
          goals.
        </p>
      </div>
      <div className="profile-grid">
        <article className="profile-panel lead-panel">
          <h3>Business Background</h3>
          <p>
            Angkor Verde Foods Co., Ltd. is a Cambodian food and beverage
            company specializing in premium organic snacks, dried tropical
            fruits, bottled herbal drinks, and eco-friendly packaged food
            products. The company serves health-conscious local consumers,
            tourists, cafes, hotels, and specialty retailers.
          </p>
          <p>
            The 2026 business trips were designed to support investment
            readiness, evaluate expansion sites, document employee legacy,
            improve workplace productivity, and strengthen digital marketing
            decisions with international research.
          </p>
        </article>
        <article className="profile-panel fact-panel">
          <span className="panel-icon">I</span>
          <h3>Company Information</h3>
          <dl className="fact-list">
            {companyFacts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </article>
        <article className="profile-panel">
          <span className="panel-icon">V</span>
          <h3>Core Values</h3>
          <ul className="value-list">
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="profile-detail-grid">
        {profileDetails.map((detail) => (
          <article className="profile-panel" key={detail.title}>
            <h3>{detail.title}</h3>
            <p>{detail.copy}</p>
          </article>
        ))}
        <article className="profile-panel people-panel">
          <h3>Important People</h3>
          <p>
            The project team page includes the important people for this
            company report, their roles, responsibilities, and photos.
          </p>
          <Link className="profile-link" href="/team">
            View Team Photos
          </Link>
        </article>
      </div>

      <article className="profile-panel focus-panel">
        <span className="panel-icon">F</span>
        <div>
          <h3>Business Focus</h3>
          <p>
            Premium dried mango, pineapple, banana chips, cashew snacks, herbal
            lemongrass drinks, retail gift packs, and compostable packaging for
            modern grocery and travel retail channels.
          </p>
        </div>
      </article>
    </section>
  );
}
