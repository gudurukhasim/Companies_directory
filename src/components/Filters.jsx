

import React from "react";
import { LayoutGrid, Table } from "lucide-react";

export default function Filters({
  filters,
  setFilters,
  companies,
  view,
  setView,
  sortBy,
  setSortBy,
}) {
  // Get unique industries and locations dynamically
  const industries = [...new Set(companies.map((c) => c.industry))];
  const locations = [...new Set(companies.map((c) => c.location))];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      {/* Left section - Filter inputs */}
      <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">

        {/* Industry Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Industry
          </label>
          <select
            value={filters.industry}
            onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All</option>
            {industries.map((ind, i) => (
              <option key={i} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All</option>
            {locations.map((loc, i) => (
              <option key={i} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="name">Name</option>
            <option value="industry">Industry</option>
            <option value="location">Location</option>
          </select>
        </div>
      </div>

      {/* Right section - View toggles */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setView("cards")}
          className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition ${
            view === "cards"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span>🗂️ Card View</span>
        </button>

        <button
          onClick={() => setView("table")}
          className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition ${
            view === "table"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span>📋 Table View</span>
        </button>
      </div>
    </div>
  );
}
