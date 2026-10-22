import Link from "next/link";
import { invoices, quotes, invoiceTotal, inr } from "@/data/data";

export default function Dashboard() {
  const totalRevenue = invoices
    .filter((i) => i.status === "paid")
    .reduce((sum, i) => sum + invoiceTotal(i), 0);
  const invoicesIssued = invoices.length;
  const pendingQuotes = quotes.filter((q) => q.status === "pending").length;

  return (
    <main className="container">
      <h1>Client Portal Dashboard</h1>

      <div className="cards">
        <div className="card">
          <p>Total Revenue</p>
          <h2>{inr(totalRevenue)}</h2>
        </div>
        <div className="card">
          <p>Invoices Issued</p>
          <h2>{invoicesIssued}</h2>
        </div>
        <div className="card">
          <p>Pending Quotes</p>
          <h2>{pendingQuotes}</h2>
        </div>
      </div>

      <h3>Invoices</h3>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Public Link</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.token}>
              <td>{inv.number}</td>
              <td>{inv.client}</td>
              <td>{inr(invoiceTotal(inv))}</td>
              <td>
                <span className={`badge ${inv.status}`}>{inv.status}</span>
              </td>
              <td>
                <Link href={`/invoice/${inv.token}`}>View invoice</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}