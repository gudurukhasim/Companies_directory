

import React from "react";
import { Building2, MapPin, Users, Calendar } from "lucide-react";

export default function CompanyCards({ companies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 px-6">
      {companies.map((c) => (
        <div
          key={c.id}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all w-full max-w-[520px] mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3.5 rounded-full">
                <Building2 className="text-blue-500" size={24} />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {c.name}
              </h2>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2.5 text-[15px] text-gray-700">
            <p className="flex items-center gap-3">
              <Building2 size={17} className="text-gray-500" />
              <strong>Industry:</strong> {c.industry}
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={17} className="text-gray-500" />
              <strong>Location:</strong> {c.location}
            </p>
            <p className="flex items-center gap-3">
              <Users size={17} className="text-gray-500" />
              <strong>Employees:</strong> {c.employees.toLocaleString()}
            </p>
            <p className="flex items-center gap-3">
              <Calendar size={17} className="text-gray-500" />
              <strong>Founded:</strong> {c.founded}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
