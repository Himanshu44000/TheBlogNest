import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../logo.jsx"

function Footer() {
  return (
    <section
      className="relative overflow-hidden py-10 border-t-2 border-t-black text-white"
      style={{
        background: 'linear-gradient(-45deg, #7f00ff, #e100ff, #00c9ff, #92fe9d)',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 12s ease infinite'
      }}
    >
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap gap-y-10 justify-between">
          {/* Logo + Copyright */}
          <div className="w-full sm:w-1/2 lg:w-5/12 px-4">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-4">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-white/80">
                &copy; Copyright 2025. All Rights Reserved
              </p>
            </div>
          </div>

          {/* Support & Legal Sections */}
          {[{
            title: "Support",
            items: [
              { name: "Account", path: "/account" },
              { name: "Help", path: "/help" },
              { name: "Contact Us", path: "/contact-us" },
            ]
          }, {
            title: "Legals",
            items: [
              { name: "Terms & Conditions", path: "/terms" },
              { name: "Privacy Policy", path: "/privacy" },
              { name: "Licensing", path: "/license" }
            ]
          }].map((section, idx) => (
            <div key={idx} className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12 px-4">
              <h3 className="tracking-wider mb-5 text-xs font-bold uppercase text-white">
                {section.title}
              </h3>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i} className="mb-3">
                    <Link
                      className="text-base font-medium text-white hover:text-gray-200 transition-colors"
                      to={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer