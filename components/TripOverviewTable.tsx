import { formatCurrency } from "./ExpenseTable";

type TripOverview = {
  title: string;
  destination: string;
  duration: string;
  purpose: string;
  locations: string[];
  total: number;
  tag: string;
};

type TripOverviewTableProps = {
  trips: TripOverview[];
};

export default function TripOverviewTable({ trips }: TripOverviewTableProps) {
  return (
    <section className="section section-fade" id="overview">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Trip Overview</p>
          <h2>Official trip summary and estimated budgets</h2>
        </div>
        <p>
          Each visit was planned around a specific business writing purpose:
          decision support, stakeholder communication, or applied research.
        </p>
      </div>
      <div className="table-wrap">
        <table className="report-table overview-table">
          <thead>
            <tr>
              <th>Trip</th>
              <th>Duration</th>
              <th>Purpose</th>
              <th>Specific Locations</th>
              <th className="amount">Total</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip.title}>
                <td>
                  <strong>{trip.destination}</strong>
                  <span className="tag">{trip.tag}</span>
                </td>
                <td>{trip.duration}</td>
                <td>{trip.purpose}</td>
                <td>
                  <ul className="compact-list">
                    {trip.locations.map((location) => (
                      <li key={location}>{location}</li>
                    ))}
                  </ul>
                </td>
                <td className="amount">{formatCurrency(trip.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
