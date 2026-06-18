import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Jobs That Value Your Global Experience
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Newcomer Job Match connects recent immigrants with employers who
            recognize foreign credentials and offer skill assessments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/jobs" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Browse Jobs
            </Link>
            <Link href="/profile" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
              Build Your Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Skill‑Verified Employers</h3>
                <p className="text-gray-600 mt-2">
                  Browse companies that openly accept skill assessments and
                  value international experience.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 01-2 2v6a2 2 0 01-2-2v-6m0-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Localized Resume Templates</h3>
                <p className="text-gray-600 mt-2">
                  Download templates that follow Canadian/US/EU formatting
                  standards and highlight transferable skills.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h3m8 9v-9M8 7l5-5 5 5M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Community Support</h3>
                <p className="text-gray-600 mt-2">
                  Join forums, webinars, and mentorship programs tailored for
                  newcomers navigating the job market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to start your local career?
          </h2>
          <p className="text-lg mb-6">
            Create a free profile today and get matched with employers who
            value your background.
          </p>
          <Link href="/profile" className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition">
            Create My Profile
          </Link>
        </div>
      </section>
    </div>
  );
}