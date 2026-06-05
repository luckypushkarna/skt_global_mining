"use client";

import { useState } from "react";
import { Search, ChevronUp, ChevronDown, CheckCircle2, AlertTriangle } from "lucide-react";

interface AuditRecord {
  id: string;
  year: number;
  site: string;
  metric: string;
  value: string;
  status: "Compliant" | "Exceeded Target" | "Under Review";
  isoCode: string;
}

const AUDIT_DATA: AuditRecord[] = [
  { id: "1", year: 2026, site: "Chambishi East", metric: "Closed Loop Water Recycling", value: "90.2%", status: "Compliant", isoCode: "ISO 14001" },
  { id: "2", year: 2026, site: "Konkola Deep", metric: "Scope 1 GHG Emissions", value: "112 kt CO2e", status: "Compliant", isoCode: "ISO 14064" },
  { id: "3", year: 2026, site: "Kansanshi Corridor", metric: "Tailing Dam Integrity Index", value: "99.98%", status: "Compliant", isoCode: "ISO 22301" },
  { id: "4", year: 2025, site: "Chambishi East", metric: "Rehabilitated Land Area", value: "280 Hectares", status: "Exceeded Target", isoCode: "ZEMA Reg" },
  { id: "5", year: 2025, site: "Konkola Deep", metric: "Closed Loop Water Recycling", value: "86.1%", status: "Compliant", isoCode: "ISO 14001" },
  { id: "6", year: 2025, site: "Nchanga Pit", metric: "Ambient Air Quality PM10", value: "18 µg/m³", status: "Compliant", isoCode: "ZEMA Reg" },
  { id: "7", year: 2024, site: "Kansanshi Corridor", metric: "Scope 1 GHG Emissions", value: "148 kt CO2e", status: "Compliant", isoCode: "ISO 14064" },
  { id: "8", year: 2024, site: "Chambishi East", metric: "Closed Loop Water Recycling", value: "72.4%", status: "Under Review", isoCode: "ISO 14001" },
  { id: "9", year: 2024, site: "Nchanga Pit", metric: "Biodiversity Conservation Index", value: "0.82/1.0", status: "Compliant", isoCode: "IUCN Std" },
];

export function DataTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSite, setSelectedSite] = useState("all");
  const [sortField, setSortField] = useState<keyof AuditRecord>("year");
  const [sortAsc, setSortAsc] = useState(false);

  const handleSort = (field: keyof AuditRecord) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const filteredData = AUDIT_DATA.filter((item) => {
    const matchesSearch = 
      item.metric.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.site.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSite = selectedSite === "all" || item.site.includes(selectedSite);
    return matchesSearch && matchesSite;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    const valA = a[sortField];
    const valB = b[sortField];
    if (typeof valA === "number" && typeof valB === "number") {
      return sortAsc ? valA - valB : valB - valA;
    }
    return sortAsc 
      ? String(valA).localeCompare(String(valB)) 
      : String(valB).localeCompare(String(valA));
  });

  return (
    <div className="bg-slate-950 border border-slate-900 p-6 lg:p-8 rounded-none">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        <div>
          <span className="font-mono text-[9px] text-emerald-400 tracking-widest uppercase block mb-1">
            ── Environmental Logs
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight font-sans">Regulatory Compliance Audit Log</h3>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search metrics or sites..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-900 border border-slate-800 text-white pl-9 pr-4 py-1.5 font-mono text-[11px] focus:outline-none focus:border-emerald-500 transition-colors w-56 placeholder-slate-600 rounded-none"
            />
          </div>

          <select
            value={selectedSite}
            onChange={(e) => setSelectedSite(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-white px-3 py-1.5 font-mono text-[11px] focus:outline-none focus:border-emerald-500 cursor-pointer rounded-none"
          >
            <option value="all">All Operations</option>
            <option value="Chambishi">Chambishi East</option>
            <option value="Konkola">Konkola Deep</option>
            <option value="Kansanshi">Kansanshi Corridor</option>
            <option value="Nchanga">Nchanga Pit</option>
          </select>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto border border-slate-900">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900/60 border-b border-slate-800 text-slate-400 font-mono text-[10px] uppercase tracking-wider select-none">
              <th className="p-4 cursor-pointer hover:bg-slate-900 hover:text-white transition-colors" onClick={() => handleSort("year")}>
                <div className="flex items-center gap-1.5">
                  Year
                  {sortField === "year" && (sortAsc ? <ChevronUp className="w-3 h-3 text-emerald-400" /> : <ChevronDown className="w-3 h-3 text-emerald-400" />)}
                </div>
              </th>
              <th className="p-4 cursor-pointer hover:bg-slate-900 hover:text-white transition-colors" onClick={() => handleSort("site")}>
                <div className="flex items-center gap-1.5">
                  Site
                  {sortField === "site" && (sortAsc ? <ChevronUp className="w-3 h-3 text-emerald-400" /> : <ChevronDown className="w-3 h-3 text-emerald-400" />)}
                </div>
              </th>
              <th className="p-4 cursor-pointer hover:bg-slate-900 hover:text-white transition-colors" onClick={() => handleSort("metric")}>
                <div className="flex items-center gap-1.5">
                  Audited Metric
                  {sortField === "metric" && (sortAsc ? <ChevronUp className="w-3 h-3 text-emerald-400" /> : <ChevronDown className="w-3 h-3 text-emerald-400" />)}
                </div>
              </th>
              <th className="p-4 cursor-pointer hover:bg-slate-900 hover:text-white transition-colors" onClick={() => handleSort("value")}>
                <div className="flex items-center gap-1.5">
                  Value
                  {sortField === "value" && (sortAsc ? <ChevronUp className="w-3 h-3 text-emerald-400" /> : <ChevronDown className="w-3 h-3 text-emerald-400" />)}
                </div>
              </th>
              <th className="p-4 cursor-pointer hover:bg-slate-900 hover:text-white transition-colors" onClick={() => handleSort("status")}>
                <div className="flex items-center gap-1.5">
                  Status
                  {sortField === "status" && (sortAsc ? <ChevronUp className="w-3 h-3 text-emerald-400" /> : <ChevronDown className="w-3 h-3 text-emerald-400" />)}
                </div>
              </th>
              <th className="p-4 text-right">Standard</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900 font-mono text-xs text-slate-300">
            {sortedData.length > 0 ? (
              sortedData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-4 text-slate-500 font-bold">{row.year}</td>
                  <td className="p-4 text-white font-sans">{row.site}</td>
                  <td className="p-4 text-slate-400 font-sans">{row.metric}</td>
                  <td className="p-4 font-bold text-white">{row.value}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                      row.status === "Compliant" 
                        ? "bg-emerald-950/60 border border-emerald-900 text-emerald-400" 
                        : row.status === "Exceeded Target"
                        ? "bg-sky-950/60 border border-sky-900 text-sky-400"
                        : "bg-amber-950/60 border border-amber-900 text-amber-400"
                    }`}>
                      {row.status === "Compliant" ? (
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                      ) : (
                        <AlertTriangle className="w-2.5 h-2.5 text-amber-400" />
                      )}
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4 text-right text-slate-500 text-[10px]">{row.isoCode}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-8 text-center text-slate-600">
                  No audit entries found matching search query.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-[9px] text-slate-500 font-mono">
        <span>Showing {sortedData.length} audit records</span>
        <span>Independent auditor: Bureau Veritas Zambia Ltd</span>
      </div>
    </div>
  );
}
