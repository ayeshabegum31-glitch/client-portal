import { notFound } from "next/navigation";
import { invoices, invoiceTotal, inr } from "@/data/data";

export default async function PublicInvoice({ params }) {
  const { token } = await params;
  const inv = invoices.find((i) => i.token === token);
  if (!inv) notFound();

  return (
    <main className="container invoice">
      <h1>Invoice {inv.number}</h1>
      <p>
        <strong>Billed to:</strong> {inv.client}
        <br />
        <strong>Date:</strong> {inv.date}
        <br />
        <strong>Status:</strong>{" "}
        <span className={`badge ${inv.status}`}>{inv.status}</span>
      </p>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {inv.items.map((it, idx) => (
            <tr key={idx}>
              <td>{it.name}</td>
              <td>{it.qty}</td>
              <td>{inr(it.price)}</td>
              <td>{inr(it.qty * it.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="grand">Total: {inr(invoiceTotal(inv))}</h2>
    </main>
  );
}