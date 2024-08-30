'use client';

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const OurProjects = () => {
    return (
        <section className="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mb-8 flex justify-between gap-4"
            >
                <h2 className="font-heading text-6xl sm:text-8xl md:text-10xl tracking-tighter">
                    Projects
                </h2>
            </motion.div>
      <div className="flex flex-wrap -m-4">
        <div className="w-full lg:w-1/2 p-4">
          <div className="flex flex-wrap -m-4 mb-4">
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
           className="w-full sm:w-1/2 p-4">
              <div className="rounded-2xl py-8">
                <p className="tracking-tight text-gray-700">
                    As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
              </div>
              </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4 md:pb-0 pb-20 text-end  ">
        <Link
        href={'/Projects'}
        >
            <button>
                More
            </button>
        </Link>
        </div>
      </div>
        </section>
    );
};

