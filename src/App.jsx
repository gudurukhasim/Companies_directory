


import React, { useEffect, useState } from "react";
import { fetchCompanies } from "./api/companies";
import Filters from "./components/Filters";
import CompanyCards from "./components/CompanyCards";
import CompanyTable from "./components/CompanyTable";
import Pagination from "./components/Pagination";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [view, setView] = useState("cards");
  const [filters, setFilters] = useState({
    search: "",
    industry: "All",
    location: "All",
  });
  const [sortBy, setSortBy] = useState("employees_desc");
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    setLoading(true);
    fetchCompanies()
      .then((data) => {
        setCompanies(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch companies");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = companies;

    const q = filters.search.trim().toLowerCase();
    if (q) {
      result = result.filter((c) =>
        (c.name + " " + c.industry + " " + c.location)
          .toLowerCase()
          .includes(q)
      );
    }

    if (filters.industry !== "All") {
      result = result.filter((c) => c.industry === filters.industry);
    }
    if (filters.location !== "All") {
      result = result.filter((c) => c.location === filters.location);
    }

    const [key, dir] = sortBy.split("_");
    result = result.slice().sort((a, b) => {
      let va = a[key];
      let vb = b[key];
      if (typeof va === "string") va = va.toLowerCase();
      if (typeof vb === "string") vb = vb.toLowerCase();
      if (va < vb) return dir === "asc" ? -1 : 1;
      if (va > vb) return dir === "asc" ? 1 : -1;
      return 0;
    });

    setFiltered(result);
    setPage(1);
  }, [companies, filters, sortBy]);

  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa]">
      {/* Header */}
      <header className="bg-[#1e73be] fixed top-0 left-0 right-0 z-10 py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1
            onClick={() => window.location.reload()}
            className="text-2xl font-semibold text-white cursor-pointer hover:underline"
          >
            Companies Directory
          </h1>
          <input
            type="text"
            placeholder="Search by name..."
            className="rounded-lg px-4 py-2.5 text-base border focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-80 shadow-sm"
            value={filters.search}
            onChange={(e) =>
              setFilters({ ...filters, search: e.target.value })
            }
          />
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto w-full bg-white mt-28 rounded-xl shadow-sm p-8">
        <Filters
          filters={filters}
          setFilters={setFilters}
          companies={companies}
          view={view}
          setView={setView}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {loading && (
          <div className="text-center py-12 text-gray-500 text-lg">
            Loading companies...
          </div>
        )}
        {error && (
          <div className="text-center py-12 text-red-500 text-lg">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="mb-4 text-gray-700 text-sm text-center sm:text-left">
              Showing <strong>{filtered.length}</strong> result(s)
            </div>

            {view === "table" ? (
              <CompanyTable companies={paged} />
            ) : (
              <CompanyCards companies={paged} />
            )}

            <Pagination
              total={filtered.length}
              perPage={perPage}
              page={page}
              setPage={setPage}
            />
          </>
        )}
      </main>
    </div>
  );
}
