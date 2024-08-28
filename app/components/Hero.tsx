"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {

  return (
    <section
      className="relative"
      x-data="{ mobileNavOpen: false }"
    >
      <div className="relative mx-auto mb-12 pb-64 xs:pb-40 lg:pb-12 ">
        <motion.h1
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, }}
         viewport={{ once: true, amount: 0.3 }}
         className="font-semibold text-6xl sm:text-10xl md:text-10xl xl:text-[200px]">
          <span
            className="text-neutral-900"
          >
            Websites
          </span>
          {" "}& <br/>{" "}
          <span className="text-neutral-900">Branding</span>
        </motion.h1>

        <div className="absolute bottom-0 right-0 mb-10 max-w-sm ml-auto text-start font-semibold text-lg">
        <Link href="#services" className="bg-neutral-100 rounded-full p-4">
          <div className="group inline-block">
            <div className="flex items-center flex-wrap gap-1">
              <span className="text-neutral-700 text-sm group-hover:text-opacity-80 transition duration-200">SCROLL DOWN</span>
              <div className="text-neutral-700 group-hover:text-opacity-80 transition duration-200">
                <svg className="animate-bounce" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.35147 8.75137C6.8201 8.28275 7.5799 8.28275 8.04853 8.75137L12 12.7028L15.9515 8.75137C16.4201 8.28275 17.1799 8.28275 17.6485 8.75137C18.1172 9.22 18.1172 9.9798 17.6485 10.4484L12.8485 15.2484C12.3799 15.7171 11.6201 15.7171 11.1515 15.2484L6.35147 10.4484C5.88284 9.9798 5.88284 9.22 6.35147 8.75137Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
        {/* <motion.p
         initial={{ opacity: 0, x: 20 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.8, }}
         viewport={{ once: true, amount: 0.3 }}>
            <span className="block">Solsn Technologies, we collaborate with</span>
            <span className="block">
              innovative startups and industry leaders to
            </span>
            <span className="block">
              create impactful brand identities and
            </span>
            <span className="block">
              cutting-edge digital experiences.
            </span>
          </motion.p> */}
        </div>
      </div>
{/*
      <div className="flex justify-end">

      </div> */}
      <div className="border-b border-neutral-400 rounded-3xl flex flex-wrap mb-32">
        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
          <div className="md:border-r border-neutral-400 px-12">
            <h2 className="text-sm font-medium tracking-tight text-neutral-700 group-hover:text-neutral-50 text-center">
              Web Design
            </h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
          <div className="lg:border-r border-neutral-400 px-12">
            <h2 className="text-sm font-medium tracking-tight text-neutral-700 group-hover:text-neutral-50 text-center">
              Branding
            </h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
          <div className="md:border-r border-neutral-400 px-12">
            <h2 className="text-sm font-medium tracking-tight text-neutral-700 group-hover:text-neutral-50 text-center">
              Website Development
            </h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
          <div className="px-12">
            <h2 className="text-sm font-medium tracking-tight text-neutral-700 group-hover:text-neutral-50 text-center">
              Graphic Design
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
