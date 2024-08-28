"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section className="px-8 md:px-24 pb-12">
      <div>
        <nav className="relative">
          <div className="flex items-center justify-between py-4 lg:border-b border-black">
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-block">
                <Image className="h-7"
                src="/logo.svg"
                alt="brand Logo"
                width={60}
                height={60} />
              </Link>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-black px-5 py-3 h-14 hover:border border-neutral-900 hover:bg-transparent hover:text-black focus:ring-4 hidden lg:inline-flex items-center justify-center transition duration-200 text-white text-sm font-semibold tracking-tight"
            >
                Hire Me
            </Link>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden"
            >
              <svg
                className="navbar-burger text-black"
                width="51"
                height="51"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                <path
                  d="M37 32H19M37 24H19"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex items-center gap-2 py-4">
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium tracking-tight">Projects</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M12.848 6L8.18132 10.6667L3.51465 6"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium tracking-tight">Resources</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M12.848 6L8.18132 10.6667L3.51465 6"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </nav>
        {mobileNavOpen && (
          <div className="fixed inset-0 z-50">
            <div
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="fixed inset-0 bg-black opacity-20"
            ></div>
            <nav className="relative p-8 w-full h-full bg-white overflow-y-auto max-w-xs">
              <div className="flex items-center justify-between">
                <a href="#" className="inline-block">
                  <img className="h-7" src="consulty-assets/logos/consulty-logo2.svg" alt="Consulty Logo" />
                </a>
                <button
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="#111827"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col gap-12 py-12">
                <li>
                  <a
                    href="#"
                    className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium tracking-tight">Products</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M12.848 6L8.18132 10.6667L3.51465 6"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium tracking-tight">Resources</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M12.848 6L8.18132 10.6667L3.51465 6"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
              <a
                href="#"
                className="rounded-full bg-black px-5 py-3 h-14 hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 inline-flex items-center justify-center transition duration-200 text-white text-sm font-semibold tracking-tight"
              >
                Call us: 784-395-9944
              </a>
            </nav>
          </div>
        )}
      </div>
    </section>
  )
}
