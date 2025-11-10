

import React from "react";

export default function CompanyTable({ companies }) {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="w-full text-[15px] bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <thead className="bg-blue-600 text-white text-base">
          <tr>
            <th className="px-8 py-5 text-left font-semibold tracking-wide">
              Company Name
            </th>
            <th className="px-8 py-5 text-left font-semibold tracking-wide">
              Industry
            </th>
            <th className="px-8 py-5 text-left font-semibold tracking-wide">
              Location
            </th>
            <th className="px-8 py-5 text-left font-semibold tracking-wide">
              Employees
            </th>
            <th className="px-8 py-5 text-left font-semibold tracking-wide">
              Founded
            </th>
          </tr>
        </thead>

        {/* Body */}
        <tbody className="divide-y divide-gray-100 text-gray-800">
          {companies.map((company, index) => (
            <tr
              key={index}
              className="hover:bg-blue-50 transition-all duration-200"
            >
              <td className="px-8 py-5 font-medium text-gray-900">
                {company.name}
              </td>
              <td className="px-8 py-5">{company.industry}</td>
              <td className="px-8 py-5">{company.location}</td>
              <td className="px-8 py-5">
                {company.employees.toLocaleString()}
              </td>
              <td className="px-8 py-5">{company.founded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
