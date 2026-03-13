"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48">
            {/* Elegant background gradients */}
            <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/15 to-transparent -z-10" />
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[120px] mix-blend-multiply opacity-70 -z-10" />
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary-light/30 rounded-full blur-[120px] mix-blend-multiply opacity-70 -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark font-medium text-sm mb-8 border border-primary/20"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Built for Modern Home Health Agencies</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance leading-tight"
                    >
                        Home Health Software that <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark via-primary to-primary-light">
                            Works for Nurses
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-muted-foreground mb-10 text-balance max-w-2xl mx-auto"
                    >
                        Stop losing 70% of your day to charting. fills health delivers beautiful, intuitive OASIS entry and seamless EVV compliance—so your team can focus on care.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/demo"
                            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 text-lg hover:-translate-y-0.5"
                        >
                            See It in Action
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#features"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-primary-dark font-semibold rounded-full border border-primary/20 hover:bg-muted/50 transition-all flex items-center justify-center gap-2 text-lg"
                        >
                            <Activity className="w-5 h-5" />
                            Explore Features
                        </Link>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="pt-16 mt-16 border-t border-muted"
                    >
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">Trusted for Compliance by Modern Agencies</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
                            {/* Placeholders for logos, styled elegantly */}
                            <div className="text-xl font-bold font-serif">Aegis Care</div>
                            <div className="text-xl font-bold">Horizon Health</div>
                            <div className="text-xl font-bold italic">Evergreen Solutions</div>
                            <div className="text-xl font-bold uppercase tracking-widest">Nexa</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
