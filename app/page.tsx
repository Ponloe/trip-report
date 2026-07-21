import CompanyProfile from "@/components/CompanyProfile";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TripCard from "@/components/TripCard";
import TripOverviewTable from "@/components/TripOverviewTable";
import { formatCurrency } from "@/components/ExpenseTable";

const trips = [
  {
    id: "sihanoukville",
    title: "Trip 1: Sihanoukville Investor Meeting Trip",
    tag: "Investor Meeting",
    destination: "Sihanoukville",
    duration: "2 days",
    purpose:
      "Meet two potential investors for coastal distribution and export strategy.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Coastal business destination in Sihanoukville",
    locations: [
      "Prince Mall Sihanoukville, Preah Sihanouk Province",
      "Independence Beach Business Lounge, Sihanoukville",
    ],
    overview:
      "The Sihanoukville trip focused on investor communication and market access. The team presented Angkor Verde Foods' product portfolio, export packaging concept, and projected demand from hotels, supermarkets, and coastal tourism businesses. Meetings were held with Ms. Lina Sok, managing partner of Harbor Growth Capital, and Mr. Victor Chan, director of Mekong Port Ventures.",
    highlights: [
      "Ms. Lina Sok expressed interest in a minority investment to support a chilled delivery route from Phnom Penh to Sihanoukville and Kampot, with dried fruit gift packs positioned for hotels and airport retail.",
      "Mr. Victor Chan recommended a port-linked export pilot for dried mango and cashew snack bundles, beginning with small consolidated shipments to Singapore-based specialty retailers.",
      "At Prince Mall Sihanoukville, the team observed strong evening traffic near cafes and family dining outlets, making the site suitable for seasonal sampling campaigns.",
      "At Independence Beach Business Lounge, the discussion emphasized export compliance, shelf-life testing, bilingual labeling, and investor reporting standards.",
    ],
    expenses: [
      {
        item: "Transportation",
        detail: "Round-trip vehicle rental and fuel from Phnom Penh",
        amount: 120,
      },
      {
        item: "Accommodation",
        detail: "Two rooms for one night near the central business district",
        amount: 95,
      },
      {
        item: "Meals",
        detail: "Team meals and light refreshments for meetings",
        amount: 48,
      },
      {
        item: "Meeting Materials",
        detail: "Printed investor brief, sample labels, and product sheets",
        amount: 35,
      },
      {
        item: "Local Transport",
        detail: "Short transfers between hotel, mall, and business lounge",
        amount: 30,
      },
    ],
    total: 328,
    conclusion:
      "The trip produced serious investor interest and confirmed that Sihanoukville can support both coastal distribution and an export-oriented pilot. Angkor Verde Foods should submit a formal follow-up proposal with investment terms, a six-month distribution budget, export documentation milestones, and sample sales projections by product category.",
  },
  {
    id: "siem-reap",
    title: "Trip 2: Siem Reap Expansion Location Research Trip",
    tag: "Expansion Research",
    destination: "Siem Reap",
    duration: "5 days",
    purpose:
      "Evaluate five possible locations for a flagship store or branded kiosk.",
    image:
      "/trips/angkor-wat-siem-reap.jpg",
    imageAlt: "Angkor Wat temple in Siem Reap",
    locations: [
      "Pub Street Area",
      "Old Market Area",
      "Angkor Night Market Area",
      "Siem Reap Riverside",
      "Taphul Road Commercial Zone",
    ],
    overview:
      "The Siem Reap trip studied expansion sites through foot-traffic observation, informal retailer conversations, rental comparison, and customer behavior analysis. The main business question was whether Angkor Verde Foods should open a flagship retail store, a smaller kiosk, or a partner display counter in a tourism-heavy market.",
    highlights: [
      "Pub Street showed the highest evening traffic and strongest impulse-purchase potential, especially for premium dried fruit packs and herbal drinks.",
      "Old Market offered strong tourist presence and souvenir purchasing behavior, but narrow aisles and crowded retail conditions may limit brand presentation.",
      "Angkor Night Market was suitable for a lower-cost kiosk model, with good visibility for snack sampling and gift-pack promotions.",
      "Siem Reap Riverside had a calmer environment and stronger cafe partnership potential, making it attractive for premium brand storytelling.",
      "Taphul Road Commercial Zone provided better rental value and access to guesthouses, but weaker immediate tourist traffic compared with central zones.",
    ],
    evaluation: [
      {
        location: "Pub Street Area",
        customerTraffic: "Very high, strongest after 5 p.m.",
        rentalPotential: "High cost but strong sales potential",
        touristPresence: "Excellent",
        brandVisibility: "Excellent for flagship signage",
        suitability: "Best for flagship store",
      },
      {
        location: "Old Market Area",
        customerTraffic: "High, steady daytime visitors",
        rentalPotential: "Moderate to high",
        touristPresence: "Excellent",
        brandVisibility: "Moderate due to crowded stalls",
        suitability: "Good for souvenir display counter",
      },
      {
        location: "Angkor Night Market Area",
        customerTraffic: "High during evening peak",
        rentalPotential: "Moderate",
        touristPresence: "Very strong",
        brandVisibility: "Good for sampling kiosk",
        suitability: "Strong kiosk option",
      },
      {
        location: "Siem Reap Riverside",
        customerTraffic: "Moderate but higher-income visitors",
        rentalPotential: "Moderate",
        touristPresence: "Good",
        brandVisibility: "Strong for calm premium branding",
        suitability: "Good for cafe partnerships",
      },
      {
        location: "Taphul Road Commercial Zone",
        customerTraffic: "Moderate, hotel and guesthouse guests",
        rentalPotential: "Best rental value",
        touristPresence: "Good",
        brandVisibility: "Moderate",
        suitability: "Best for back-office plus small showroom",
      },
    ],
    expenses: [
      {
        item: "Transportation",
        detail: "Round-trip van travel and fuel from Phnom Penh",
        amount: 110,
      },
      {
        item: "Accommodation",
        detail: "Four nights at a mid-range business hotel",
        amount: 220,
      },
      {
        item: "Meals",
        detail: "Five-day meal allowance for research team",
        amount: 120,
      },
      {
        item: "Local Transport and Site Visits",
        detail: "Tuk-tuk transfers, short site inspections, and parking",
        amount: 95,
      },
      {
        item: "Market Research Materials",
        detail: "Observation sheets, printing, maps, and sample packs",
        amount: 45,
      },
    ],
    total: 590,
    conclusion:
      "Pub Street Area is the strongest recommended expansion location because it combines the highest customer traffic, strong tourist spending, and excellent visibility for a flagship brand experience. Angkor Verde Foods should negotiate a compact storefront or premium kiosk near cafe clusters, while using Angkor Night Market as a secondary seasonal sampling channel.",
  },
  {
    id: "mondulkiri",
    title: "Trip 3: Mondulkiri Retired Staff Interview Trip",
    tag: "Employee Feature",
    destination: "Mondulkiri",
    duration: "3 days",
    purpose:
      "Interview retired production supervisor Mr. Dara Vann for a company magazine feature.",
    image:
      "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Green highland landscape representing Mondulkiri",
    locations: [
      "House No. 18, Sen Monorom Commune, Sen Monorom City, Mondulkiri Province, Cambodia",
    ],
    overview:
      "The Mondulkiri trip was organized to interview Mr. Dara Vann, a retired production supervisor who helped Angkor Verde Foods improve drying standards, worker training, and quality inspection routines during the company's early growth period. The interview took place at his home address in Sen Monorom City.",
    highlights: [
      "Mr. Dara described how early production teams learned to reduce fruit waste by sorting mango and pineapple by ripeness before drying.",
      "He explained that consistent hygiene checklists helped the company win repeat orders from hotels and boutique grocery shops.",
      "His most memorable statement was: \"A good product begins with patient hands and honest inspection.\"",
      "The interview gathered photographs, timeline notes, and personal stories for a company magazine feature about employee pride and operational discipline.",
      "The story supports company culture by showing younger staff that quality standards were built through teamwork, responsibility, and respect for Cambodian ingredients.",
    ],
    expenses: [
      {
        item: "Transportation",
        detail: "Round-trip vehicle travel from Phnom Penh to Sen Monorom",
        amount: 145,
      },
      {
        item: "Accommodation",
        detail: "Two nights at a business guesthouse",
        amount: 105,
      },
      {
        item: "Meals",
        detail: "Three-day meal allowance for writer and coordinator",
        amount: 72,
      },
      {
        item: "Interview Materials",
        detail: "Audio recording, printed consent form, and photo preparation",
        amount: 38,
      },
      {
        item: "Local Transport",
        detail: "Transfers within Sen Monorom City",
        amount: 40,
      },
    ],
    total: 400,
    conclusion:
      "The interview showed that employee knowledge is part of Angkor Verde Foods' business value. Preserving Mr. Dara Vann's story will strengthen internal culture, support employer branding, and remind employees that product quality depends on human commitment as much as equipment and packaging.",
  },
  {
    id: "malaysia",
    title: "Trip 4: Malaysia AI in the Workplace Conference Trip",
    tag: "AI Conference",
    destination: "Kuala Lumpur, Malaysia",
    duration: "3 days",
    purpose:
      "Attend an international conference on artificial intelligence in the workplace.",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Kuala Lumpur skyline and conference destination",
    locations: ["Kuala Lumpur Convention Centre, Kuala Lumpur, Malaysia"],
    overview:
      "The Malaysia trip allowed the management team to study how AI tools are being applied in office workflows, manufacturing support, customer analytics, and ethical decision-making. Sessions at Kuala Lumpur Convention Centre were selected for their direct relevance to a growing food and beverage company.",
    highlights: [
      "AI productivity sessions showed how meeting notes, supplier emails, translation, and sales reports can be drafted faster when staff use approved templates and review processes.",
      "Automation workshops demonstrated simple inventory alerts, purchase-order reminders, and production scheduling dashboards for small and medium enterprises.",
      "Customer analytics presentations explained how retail sales data can identify seasonal demand for dried mango, herbal drinks, and gift sets.",
      "Inventory forecasting examples showed how weather, tourism periods, and holiday seasons can be used to reduce stockouts and overproduction.",
      "Ethical AI discussions emphasized data privacy, human review, transparent decision-making, and staff training before adopting automated recommendations.",
    ],
    expenses: [
      {
        item: "Airfare",
        detail: "Round-trip Phnom Penh to Kuala Lumpur economy ticket",
        amount: 410,
      },
      {
        item: "Hotel",
        detail: "Two nights near Kuala Lumpur Convention Centre",
        amount: 285,
      },
      {
        item: "Conference Registration",
        detail: "International AI workplace conference pass",
        amount: 320,
      },
      {
        item: "Meals",
        detail: "Three-day meal allowance",
        amount: 135,
      },
      {
        item: "Local Transport",
        detail: "Airport rail, rideshare, and local transfers",
        amount: 85,
      },
    ],
    total: 1235,
    conclusion:
      "Angkor Verde Foods should begin with practical, low-risk AI strategies: standardized AI-assisted report drafting, spreadsheet-based inventory forecasting, customer review analysis, and a staff policy requiring human approval for external communication and business decisions. These steps can improve productivity without weakening accountability.",
  },
  {
    id: "singapore",
    title: "Trip 5: Singapore Social Media Marketing Research Presentation Trip",
    tag: "Marketing Research",
    destination: "Singapore",
    duration: "2 days",
    purpose:
      "Attend a two-day international business research presentation on social media marketing.",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Singapore business district near Marina Bay",
    locations: [
      "Marina Bay Sands Expo and Convention Centre, Singapore",
    ],
    overview:
      "The Singapore trip focused on social media research for food brands competing in regional markets. Presenters explained how short-form video, creator partnerships, brand storytelling, and customer engagement can turn packaged food into a recognizable lifestyle product.",
    highlights: [
      "TikTok marketing sessions emphasized fast product demonstrations, behind-the-scenes preparation, taste reactions, and limited-time campaign themes.",
      "Instagram Reels research showed that premium packaging, clean ingredient shots, and quick serving ideas can improve shareability for health-focused snacks.",
      "Influencer partnership discussions recommended working with micro-creators in food, travel, fitness, and Cambodian culture instead of relying only on large celebrity accounts.",
      "Brand storytelling examples showed how farmer sourcing, eco-friendly packaging, and employee stories can create trust beyond price promotions.",
      "Customer engagement sessions recommended weekly polls, comment replies, reposted customer photos, and campaign tracking by product line.",
    ],
    expenses: [
      {
        item: "Airfare",
        detail: "Round-trip Phnom Penh to Singapore economy ticket",
        amount: 380,
      },
      {
        item: "Hotel",
        detail: "One night near Marina Bay business district",
        amount: 260,
      },
      {
        item: "Presentation Registration",
        detail: "Two-day international business research presentation pass",
        amount: 290,
      },
      {
        item: "Meals",
        detail: "Two-day meal allowance",
        amount: 115,
      },
      {
        item: "Local Transport",
        detail: "Airport train, MRT, and local transfers",
        amount: 90,
      },
    ],
    total: 1135,
    conclusion:
      "The company should launch a three-month social media program built around TikTok product demonstrations, Instagram Reels for premium snack presentation, micro-influencer reviews, and weekly customer engagement prompts. Campaign performance should be measured by saves, comments, link clicks, and retailer inquiries rather than views alone.",
  },
];

const grandTotal = trips.reduce((sum, trip) => sum + trip.total, 0);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero grandTotal={formatCurrency(grandTotal)} />
        <CompanyProfile />
        <TripOverviewTable trips={trips} />

        <section className="section reports-section" id="reports">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Detailed Reports</p>
              <h2>Five business trips with findings, expenses, and decisions</h2>
            </div>
            <p>
              The following reports use a formal business format: overview,
              highlights, expenses, and conclusion for each assignment.
            </p>
          </div>
          <div className="trip-stack">
            {trips.map((trip, index) => (
              <TripCard key={trip.id} trip={trip} index={index} />
            ))}
          </div>
        </section>

        <section className="section final-section section-fade" id="conclusion">
          <div className="final-content">
            <p className="eyebrow">Overall Conclusion</p>
            <h2>Integrated growth recommendations for Angkor Verde Foods</h2>
            <p>
              Together, the five trips show that Angkor Verde Foods Co., Ltd.
              can grow through a balanced strategy: secure investor support for
              coastal distribution, open a high-visibility Siem Reap flagship
              presence, preserve employee knowledge as a cultural asset, improve
              productivity with carefully governed AI tools, and build stronger
              regional awareness through short-form social media campaigns.
            </p>
            <div className="conclusion-grid">
              <span>Investor readiness</span>
              <span>Tourism retail expansion</span>
              <span>Employee legacy</span>
              <span>AI-enabled operations</span>
              <span>Digital market growth</span>
            </div>
          </div>
          <aside className="total-card">
            <span>Total Estimated Expenses</span>
            <strong>{formatCurrency(grandTotal)}</strong>
            <p>
              This budget covers all five report trips and supports measurable
              business outcomes across investment, operations, people, and
              marketing.
            </p>
          </aside>
        </section>
      </main>
      <a className="back-to-top" href="#top" aria-label="Back to top">
        Top
      </a>
      <Footer />
    </>
  );
}
