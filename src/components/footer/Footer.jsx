import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router'

export default function Footer(){
    return(
        <>
       <footer className="bg-white border-t border-gray-100 mt-20">
  <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
    
    <div className="flex flex-col-reverse items-center justify-between gap-8 sm:flex-row">
      <div className="text-center sm:text-left">
        <p className="text-xl font-bold text-gray-800">NextDev</p>
        <p className="text-sm text-gray-500">Empowering Junior Devs & Recruiters</p>
      </div>

      <ul className="flex justify-center gap-6 sm:justify-end">
        <li>
          <Link
            to="https://github.com/Radolsav16"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">GitHub</span>

            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </li>

         <li>
          <Link
            to="https://www.linkedin.com/in/radoslav-todorov-66432a346"
            rel="noreferrer"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">LinkedIn</span>
             <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </li>

       
      </ul>
    </div>

    {/* Grid of Links */}
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
      <div>
        <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Services</p>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li><a href="#" className="hover:text-gray-800">1on1 Coaching</a></li>
          <li><a href="#" className="hover:text-gray-800">Company Review</a></li>
          <li><a href="#" className="hover:text-gray-800">Accounts Review</a></li>
          <li><a href="#" className="hover:text-gray-800">HR Consulting</a></li>
          <li><a href="#" className="hover:text-gray-800">SEO Optimization</a></li>
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Company</p>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li><a href="#" className="hover:text-gray-800">About</a></li>
          <li><a href="#" className="hover:text-gray-800">Meet the Team</a></li>
          <li><a href="#" className="hover:text-gray-800">Careers</a></li>
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Helpful Links</p>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li><a href="#" className="hover:text-gray-800">Contact</a></li>
          <li><a href="#" className="hover:text-gray-800">FAQs</a></li>
          <li><a href="#" className="hover:text-gray-800">Live Chat</a></li>
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Legal</p>
        <ul className="mt-4 space-y-2 text-sm text-gray-600">
          <li><a href="#" className="hover:text-gray-800">Accessibility</a></li>
          <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-gray-800">Terms of Service</a></li>
        </ul>
      </div>
    </div>

    <p className="text-xs text-gray-500 text-center">&copy; 2025 Radoslav Todorov. All rights reserved.</p>
  </div>
</footer>

        </>
    )
}