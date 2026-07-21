import ExpenseTable, { formatCurrency } from "./ExpenseTable";

type Expense = {
  item: string;
  detail: string;
  amount: number;
};

type EvaluationRow = {
  location: string;
  customerTraffic: string;
  rentalPotential: string;
  touristPresence: string;
  brandVisibility: string;
  suitability: string;
};

type Trip = {
  id: string;
  title: string;
  tag: string;
  destination: string;
  duration: string;
  purpose: string;
  image: string;
  imageAlt: string;
  overview: string;
  highlights: string[];
  expenses: Expense[];
  conclusion: string;
  locations: string[];
  total: number;
  evaluation?: EvaluationRow[];
};

type TripCardProps = {
  trip: Trip;
  index: number;
};

export default function TripCard({ trip, index }: TripCardProps) {
  return (
    <article className="trip-card section-fade" id={trip.id}>
      <div className="trip-image" style={{ backgroundImage: `url(${trip.image})` }}>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="trip-content">
        <div className="trip-kicker">
          <span className="tag">{trip.tag}</span>
          <strong>{formatCurrency(trip.total)}</strong>
        </div>
        <h3>{trip.title}</h3>
        <div className="meta-grid" aria-label={`${trip.title} key details`}>
          <span>
            <b>D</b>
            {trip.duration}
          </span>
          <span>
            <b>L</b>
            {trip.destination}
          </span>
          <span>
            <b>P</b>
            {trip.purpose}
          </span>
        </div>

        <section className="report-block">
          <h4>Overview / Brief Description of the Trip</h4>
          <p>{trip.overview}</p>
        </section>

        <section className="report-block">
          <h4>Trip Highlights</h4>
          <ul className="highlight-list">
            {trip.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        {trip.evaluation ? (
          <section className="report-block">
            <h4>Location Evaluation</h4>
            <div className="table-wrap">
              <table className="report-table evaluation-table">
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>Customer Traffic</th>
                    <th>Rental Potential</th>
                    <th>Tourist Presence</th>
                    <th>Brand Visibility</th>
                    <th>Suitability</th>
                  </tr>
                </thead>
                <tbody>
                  {trip.evaluation.map((row) => (
                    <tr key={row.location}>
                      <td data-label="Location">{row.location}</td>
                      <td data-label="Customer Traffic">{row.customerTraffic}</td>
                      <td data-label="Rental Potential">{row.rentalPotential}</td>
                      <td data-label="Tourist Presence">{row.touristPresence}</td>
                      <td data-label="Brand Visibility">{row.brandVisibility}</td>
                      <td data-label="Suitability">{row.suitability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        <section className="report-block">
          <h4>Trip Expenses</h4>
          <ExpenseTable expenses={trip.expenses} />
        </section>

        <section className="report-block conclusion-block">
          <h4>Conclusion</h4>
          <p>{trip.conclusion}</p>
        </section>
      </div>
    </article>
  );
}
