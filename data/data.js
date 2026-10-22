export const invoices = [
  {
    token: "a8f3k29xq7m1zp40",
    number: "INV-001",
    client: "Sharma Traders",
    date: "2026-10-05",
    status: "paid",
    items: [
      { name: "Website Design", qty: 1, price: 25000 },
      { name: "Logo Design", qty: 1, price: 5000 },
    ],
  },
  {
    token: "k92jd8s7f6g5h4j3",
    number: "INV-002",
    client: "Priya Boutique",
    date: "2026-10-12",
    status: "unpaid",
    items: [{ name: "Social Media Setup", qty: 3, price: 4000 }],
  },
  {
    token: "p0o9i8u7y6t5r4e3",
    number: "INV-003",
    client: "Rao Electronics",
    date: "2026-10-18",
    status: "paid",
    items: [{ name: "Hosting (1 year)", qty: 1, price: 12000 }],
  },
];

export const quotes = [
  { id: "Q-101", client: "Green Cafe", amount: 18000, status: "pending" },
  { id: "Q-102", client: "Fit Zone Gym", amount: 32000, status: "pending" },
  { id: "Q-103", client: "Sharma Traders", amount: 9000, status: "accepted" },
];

export const invoiceTotal = (inv) =>
  inv.items.reduce((sum, i) => sum + i.qty * i.price, 0);

export const inr = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(n);