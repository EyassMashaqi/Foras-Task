import { useEffect, useMemo, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { FilterBar, type TypeFilter, type FundingFilter } from './components/FilterBar';
import { NewArrivals } from './components/NewArrivals';
import { OpportunityCard } from './components/OpportunityCard';
import { EmptyState } from './components/EmptyState';
import { Pagination } from './components/Pagination';
import { Highlights } from './components/Highlights';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { type SortKey } from './components/SortMenu';
import { opportunities } from './data/opportunities';

const PAGE_SIZE = 9;
const NEW_WINDOW_DAYS = 10;
const TODAY = new Date(2026, 5, 19);

const isRecent = (iso: string) => {
  const d = new Date(iso + 'T00:00:00');
  return (TODAY.getTime() - d.getTime()) / 86400000 <= NEW_WINDOW_DAYS;
};

export default function App() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<TypeFilter>('all');
  const [funding, setFunding] = useState<FundingFilter>('all');
  const [sort, setSort] = useState<SortKey>('newest');
  const [page, setPage] = useState(1);

  const gridTopRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim();
    const matched = opportunities.filter((o) => {
      const mq = !q || o.title.includes(q) || o.desc.includes(q) || o.country.includes(q);
      const mt = type === 'all' || o.type === type;
      const mf = funding === 'all' || o.funding === funding;
      return mq && mt && mf;
    });

    const sorted = [...matched].sort((a, b) => {
      switch (sort) {
        case 'deadline-asc':
          return a.deadline.localeCompare(b.deadline);
        case 'deadline-desc':
          return b.deadline.localeCompare(a.deadline);
        case 'alpha':
          return a.title.localeCompare(b.title, 'ar');
        case 'newest':
        default:
          return b.addedAt.localeCompare(a.addedAt);
      }
    });
    return sorted;
  }, [query, type, funding, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [query, type, funding, sort]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  const newArrivals = useMemo(
    () =>
      [...opportunities]
        .filter((o) => isRecent(o.addedAt))
        .sort((a, b) => b.addedAt.localeCompare(a.addedAt))
        .slice(0, 8),
    [],
  );

  const anyActive = query.trim() !== '' || type !== 'all' || funding !== 'all';
  const clearFilters = () => {
    setQuery('');
    setType('all');
    setFunding('all');
  };

  const handlePageChange = (next: number) => {
    setPage(next);
    if (gridTopRef.current) {
      const top = gridTopRef.current.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-forest-ink relative">
      <ScrollProgress />
      <Navbar />
      <Hero query={query} onQueryChange={setQuery} />
      <Partners />
      <FilterBar
        type={type}
        funding={funding}
        sort={sort}
        onType={setType}
        onFunding={setFunding}
        onSort={setSort}
        resultCount={filtered.length}
        anyActive={anyActive}
        onClear={clearFilters}
      />

      {!anyActive && <NewArrivals items={newArrivals} />}

      <section className="bg-sage-50 px-[clamp(20px,5vw,64px)] pt-14 pb-[84px] min-h-[50vh]">
        <div ref={gridTopRef} className="max-w-[1200px] mx-auto">
          {filtered.length > 0 ? (
            <>
              <div className="grid gap-[26px] [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(320px,1fr))]">
                {pageItems.map((opp, i) => (
                  <OpportunityCard
                    key={opp.id}
                    opp={opp}
                    index={i}
                    query={query}
                    isNew={isRecent(opp.addedAt)}
                  />
                ))}
              </div>
              <Pagination page={page} totalPages={totalPages} onChange={handlePageChange} />
            </>
          ) : (
            <EmptyState onClear={clearFilters} />
          )}
        </div>
      </section>

      <Highlights />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}
