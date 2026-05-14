// app/matching-gifts/MatchingSearch.tsx
"use client";

import { useState } from "react";

// Mock data for demonstration
const mockCompanies = [
  "Microsoft",
  "Google",
  "Apple",
  "Amazon",
  "Walmart",
  "Bank of America",
  "Coca-Cola",
  "Johnson & Johnson",
  "Procter & Gamble",
  "Verizon",
  "AT&T",
  "Wells Fargo",
  "Home Depot",
  "Costco",
  "Target",
];

export function MatchingSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setResults([]);
      setHasSearched(false);
      return;
    }
    const filtered = mockCompanies.filter((company) =>
      company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
    setHasSearched(true);
  };

  return (
    <div className="w-full">
      {/* Search Input and Button Group */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type your employer’s name"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 sm:py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-base"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 sm:py-2 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md active:scale-[0.98]"
        >
          Search
        </button>
      </div>

      {/* Results Section */}
      {hasSearched && (
        <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
          {results.length > 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm">
              <p className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-sm">
                  {results.length}
                </span>
                {results.length !== 1 ? "Employers" : "Employer"} found
              </p>
              
              <ul className="grid grid-cols-1 xs:grid-cols-2 gap-2 text-gray-600">
                {results.map((company) => (
                  <li 
                    key={company} 
                    className="flex items-center gap-2 text-sm sm:text-base py-1 border-b border-gray-50 xs:border-none"
                  >
                    <span className="text-blue-500">•</span>
                    {company}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-800 leading-relaxed">
                  <span className="font-bold">Next Steps:</span> Please check with your HR department for specific matching gift
                  procedures and eligibility requirements.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 px-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-gray-600 font-medium">
                No matching employers found in our database.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Please contact your HR department directly to inquire about matching gifts.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Footer Attribution */}
      <p className="mt-8 text-[10px] sm:text-xs text-gray-400 text-center uppercase tracking-widest font-medium">
        Matching Gift and Volunteer Grant information provided by
      </p>
    </div>
  );
}



