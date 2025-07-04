import { UsersIcon, BriefcaseIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router';
export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16 mt-20">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <p className="text-lg text-gray-600">
          NextDev bridges the gap between aspiring junior developers and forward‑thinking employers.  
          Our mission is to empower the next generation of tech talent and simplify the hiring process.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-4">
          <SparklesIcon className="h-12 w-12 text-blue-600 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900">Showcase Your Skills</h3>
          <p className="text-gray-600">Create a standout profile with projects, CV, and social links.</p>
        </div>
        <div className="space-y-4">
          <BriefcaseIcon className="h-12 w-12 text-blue-600 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900">Find the Perfect Job</h3>
          <p className="text-gray-600">Browse and apply to roles tailored for junior developers.</p>
        </div>
        <div className="space-y-4">
          <UsersIcon className="h-12 w-12 text-blue-600 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900">Connect with Employers</h3>
          <p className="text-gray-600">Employers can discover fresh talent and manage applicants.</p>
        </div>
      </section>

      {/* Mock Stats */}
      <section className="bg-gray-50 rounded-lg p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-blue-600">120 000+</p>
          <p className="mt-1 text-gray-700">Junior Developers</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">1 800+</p>
          <p className="mt-1 text-gray-700">Active Companies</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">35 %</p>
          <p className="mt-1 text-gray-700">Applicant → Hire Rate</p>
        </div>
      </section>

    
      
      {/* Call to Action */}
      <section className="text-center space-y-4">
        <p className="text-lg text-gray-700">
          Ready to join the community? Whether you’re a budding developer or a hiring manager,
          NextDev is your launchpad.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/register"
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/jobs"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition"
          >
            Browse Jobs
          </Link>
        </div>
      </section>
    </div>
  );
}
