import { useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FilterBar, type TypeFilter, type FundingFilter } from './components/FilterBar';
import { OpportunityCard } from './components/OpportunityCard';
import { EmptyState } from './components/EmptyState';
import { Footer } from './components/Footer';
import { opportunities } from './data/opportunities';

export default function App() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<TypeFilter>('all');
  const [funding, setFunding] = useState<FundingFilter>('all');

  const filtered = useMemo(() => {
    const q = query.trim();
    return opportunities.filter((o) => {
      const mq = !q || o.title.includes(q) || o.desc.includes(q) || o.country.includes(q);
      const mt = type === 'all' || o.type === type;
      const mf = funding === 'all' || o.funding === funding;
      return mq && mt && mf;
    });
  }, [query, type, funding]);

  const anyActive = query.trim() !== '' || type !== 'all' || funding !== 'all';
  const clearFilters = () => {
    setQuery('');
    setType('all');
    setFunding('all');
  };

  return (
    <div className="min-h-screen bg-white text-forest-ink relative">
      <Navbar />
      <Hero query={query} onQueryChange={setQuery} />
      <FilterBar
        type={type}
        funding={funding}
        onType={setType}
        onFunding={setFunding}
        resultCount={filtered.length}
        anyActive={anyActive}
        onClear={clearFilters}
      />

      <section className="bg-sage-50 px-[clamp(20px,5vw,64px)] pt-14 pb-[84px] min-h-[50vh]">
        <div className="max-w-[1200px] mx-auto">
          {filtered.length > 0 ? (
            <div className="grid gap-[26px] [grid-template-columns:repeat(auto-fill,minmax(320px,1fr))]">
              {filtered.map((opp, i) => (
                <OpportunityCard key={opp.id} opp={opp} index={i} />
              ))}
            </div>
          ) : (
            <EmptyState onClear={clearFilters} />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
