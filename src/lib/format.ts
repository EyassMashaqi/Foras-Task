export const arNum = (n: number): string => Number(n).toLocaleString('ar-EG');

export const fmtDate = (iso: string): string => {
  const d = new Date(iso + 'T00:00:00');
  return new Intl.DateTimeFormat('ar-EG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
};

export const daysLeft = (iso: string): number => {
  const today = new Date(2026, 5, 19);
  const d = new Date(iso + 'T00:00:00');
  return Math.ceil((d.getTime() - today.getTime()) / 86400000);
};
