type Play = Record<string, { name: string; type: string }>;
type Performance = { playID: string; audience: number };
type Invoice = {
  customer: string;
  performances: Performance[];
};

type Statement = (invoice: Invoice[], plays: Play) => string;
