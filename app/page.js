export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-800 text-white p-5 shadow">
        <h1 className="text-3xl font-bold">Water Storm Water Drainage Scheme Portal</h1>
        <p className="text-sm mt-1">
          Urban Development Department | Government of Uttar Pradesh
        </p>
      </header>

      {/* Hero Section */}
      <section className="p-8 bg-white shadow-md mt-6 max-w-5xl mx-auto rounded-lg">
        <h2 className="text-2xl font-semibold">Welcome</h2>
        <p className="mt-3 text-gray-700">
          This system allows citizens and engineers to view drainage plans, submit reports,
          check water flow data, and monitor infrastructure updates.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="/reports"
            className="bg-blue-700 text-white p-4 rounded-lg shadow hover:bg-blue-900"
          >
            Submit Report
          </a>

          <a
            href="/dashboard"
            className="bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-800"
          >
            View Dashboard
          </a>

          <a
            href="/login"
            className="bg-gray-700 text-white p-4 rounded-lg shadow hover:bg-gray-900"
          >
            Engineer Login
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600 py-4">
        © {new Date().getFullYear()} Government of Uttar Pradesh — Urban Storm Water Drainage Scheme
      </footer>
    </main>
  );
}
