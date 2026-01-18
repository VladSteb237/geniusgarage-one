"use client";
import { motion } from "framer-motion";
import { Card } from "../../../packages/ui/src/card";
import { CardContent } from "../../../packages/ui/src/CardContent";
import { Button } from "../../../packages/ui/src/button";
import { Input } from "../../../packages/ui/src/Input";
import { Search, Users, Car, Wrench, DollarSign } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "all",
    minPrice: "",
    maxPrice: "",
  });
  const [selectedJob, setSelectedJob] = useState<null | (typeof allJobs)[0]>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const openModal = (job: (typeof allJobs)[0]) => {
    setSelectedJob(job);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  const stats = [
    { title: "Total Users", value: "1,284", icon: <Users /> },
    { title: "Cars in Service", value: "87", icon: <Car /> },
    { title: "Active Repairs", value: "32", icon: <Wrench /> },
    { title: "Revenue", value: "$128,430", icon: <DollarSign /> },
  ];

  const allJobs = [
    {
      id: "GG-1243",
      customer: "Alex Turner",
      car: "Tesla Model 3",
      status: "In Progress",
      price: "$1,250",
    },
    {
      id: "GG-1244",
      customer: "Sarah Miles",
      car: "BMW X5",
      status: "Waiting",
      price: "$890",
    },
    {
      id: "GG-1245",
      customer: "John Wick",
      car: "Ford Mustang",
      status: "Completed",
      price: "$2,400",
    },
    {
      id: "GG-1248",
      customer: "John Wilson",
      car: "Mersedes C-Class",
      status: "Waiting",
      price: "$1,400",
    },
  ];
  // const filteredJobs = allJobs.filter((job) => {
  //   if (filters.status !== "all" && job.status !== filters.status) return false;
  //   if (
  //     filters.minPrice &&
  //     Number(job.price.replace("$", "")) < Number(filters.minPrice)
  //   )
  //     return false;
  //   if (
  //     filters.maxPrice &&
  //     Number(job.price.replace("$", "")) > Number(filters.maxPrice)
  //   )
  //     return false;
  //   return true;
  // });

  const filteredJobs = allJobs.filter((job) => {
    // Filters
    if (filters.status !== "all" && job.status !== filters.status) return false;

    const price = Number(job.price.replace("$", ""));
    if (filters.minPrice && price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && price > Number(filters.maxPrice)) return false;

    // Search
    if (debouncedSearch) {
      const q = debouncedSearch.toLowerCase();
      const haystack = `${job.id} ${job.customer} ${job.car}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 250);
    return () => clearTimeout(t);
  }, [search]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-wide">
            GeniusGarage Admin
          </h1>
          <Link href={"http://localhost:3000"}>
            <p className="text-zinc-400 cursor-pointer hover:underline">
              Go to Website Genius Garage
            </p>
          </Link>
        </div>
        <Button variant="primary">+ New Job</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}>
            <Card>
              <CardContent className="p-6 flex justify-between items-center">
                <div>
                  <p className="text-zinc-400 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className="text-zinc-500">{stat.icon}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Search & Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative w-full">
          <Search className="absolute left-3 top-3 text-zinc-500" size={18} />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by customer, car or job ID..."
            className="pl-10 bg-zinc-900 border-zinc-800 text-zinc-200 rounded-xl h-12"
          />
          {filtersOpen && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Status */}
              <select
                className="h-10 rounded-xl bg-zinc-950 border border-zinc-800 px-4 text-sm"
                value={filters.status}
                onChange={(e) =>
                  setFilters({ ...filters, status: e.target.value })
                }>
                <option value="all">All statuses</option>
                <option value="Waiting">Waiting</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>

              {/* Min price */}
              <input
                type="number"
                placeholder="Min price"
                className="h-10 rounded-xl bg-zinc-950 border border-zinc-800 px-4"
                value={filters.minPrice}
                onChange={(e) =>
                  setFilters({ ...filters, minPrice: e.target.value })
                }
              />

              {/* Max price */}
              <input
                type="number"
                placeholder="Max price"
                className="h-10 rounded-xl bg-zinc-950 border border-zinc-800 px-4"
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters({ ...filters, maxPrice: e.target.value })
                }
              />

              <Button
                variant="secondary"
                onClick={() =>
                  setFilters({ status: "all", minPrice: "", maxPrice: "" })
                }>
                Reset
              </Button>
            </div>
          )}
        </div>
        <Button variant="primary" onClick={() => setFiltersOpen(!filtersOpen)}>
          Filters
        </Button>
      </div>

      {/* Jobs Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-zinc-800 text-zinc-400 text-sm">
            <tr>
              <th className="p-4">Job ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Car</th>
              <th className="p-4">Status</th>
              <th className="p-4">Price</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, i) => (
              <tr
                key={i}
                className="border-b border-zinc-800 hover:bg-zinc-800/50 transition">
                <td className="p-4 text-zinc-300">{job.id}</td>
                <td className="p-4">{job.customer}</td>
                <td className="p-4">{job.car}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      job.status === "Completed"
                        ? "bg-green-500/10 text-green-400"
                        : job.status === "In Progress"
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-yellow-500/10 text-yellow-400"
                    }`}>
                    {job.status}
                  </span>
                </td>
                <td className="p-4 font-semibold">{job.price}</td>
                <td className="p-4">
                  <Button variant="secondary" onClick={() => openModal(job)}>
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalOpen && selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={closeModal}>
          <motion.div
            onClick={(e) => e.stopPropagation()} // предотвращаем закрытие при клике внутри
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-zinc-900 rounded-2xl p-6 w-full max-w-lg shadow-xl relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-200">
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">Job Details</h2>

            <div className="space-y-2">
              <p>
                <span className="text-zinc-400">Job ID:</span> {selectedJob.id}
              </p>
              <p>
                <span className="text-zinc-400">Customer:</span>{" "}
                {selectedJob.customer}
              </p>
              <p>
                <span className="text-zinc-400">Car:</span> {selectedJob.car}
              </p>
              <p>
                <span className="text-zinc-400">Status:</span>
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    selectedJob.status === "Completed"
                      ? "bg-green-500/10 text-green-400"
                      : selectedJob.status === "In Progress"
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-yellow-500/10 text-yellow-400"
                  }`}>
                  {selectedJob.status}
                </span>
              </p>
              <p>
                <span className="text-zinc-400">Price:</span>{" "}
                {selectedJob.price}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
