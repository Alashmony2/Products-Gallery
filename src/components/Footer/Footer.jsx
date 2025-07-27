import { FaGithub, FaLinkedin, FaFacebook, FaCartShopping, FaLocationDot, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 dark:bg-slate-900 pt-10 pb-6 ">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 mb-10 lg:mb-0">
            <h4 className="text-3xl font-bold text-gray-800 dark:text-white mb-3 flex items-center">
              <FaCartShopping className="mr-2" /> Product Gallery
            </h4>
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Best Way to Shop Online
            </p>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p className="flex items-center"><FaLocationDot className="mr-3" /> Cairo, Egypt</p>
              <p className="flex items-center">
                <FaEnvelope className="mr-3" />
                <a href="mailto:ahmedsamyalshmony1@gmail.com" className="hover:underline">
                  ahmedsamyalshmony1@gmail.com
                </a>
              </p>
              <p className="flex items-center"><FaPhone className="mr-3" /> 01284682092</p>
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-gray-800 dark:text-white mb-2">
              Let’s keep in touch!
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-5">
              Find me on any of these platforms, I respond within 1–2 business days.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Alashmony2" target="_blank" rel="noreferrer"
                className="bg-white dark:bg-slate-700 text-gray-800 dark:text-white p-3 rounded-full shadow hover:bg-yellow-400 transition">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ahmed-alashmony-90b133253/" target="_blank" rel="noreferrer"
                className="bg-white dark:bg-slate-700 text-gray-800 dark:text-white p-3 rounded-full shadow hover:bg-yellow-400 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.facebook.com/ahmedsamyalashmony/" target="_blank" rel="noreferrer"
                className="bg-white dark:bg-slate-700 text-gray-800 dark:text-white p-3 rounded-full shadow hover:bg-yellow-400 transition">
                <FaFacebook size={24} />
              </a>
              <a href="https://ahmedalashmony.vercel.app/" target="_blank" rel="noreferrer"
                className="bg-white dark:bg-slate-700 text-gray-800 dark:text-white p-3 rounded-full shadow hover:bg-yellow-400 transition">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-gray-200 dark:bg-slate-800 text-center py-4 ">
        <p className="text-sm text-gray-700 dark:text-gray-400 font-semibold">
          © 2025 Product Gallery | Ahmed Alashmony
        </p>
      </div>
    </>
  );
}
