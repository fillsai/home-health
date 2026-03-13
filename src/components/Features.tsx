"use client";

import { motion } from "framer-motion";
import { MapPin, FileText, CalendarClock, ShieldAlert, BadgeCheck, Stethoscope } from "lucide-react";

const features = [
    {
        title: "Effortless OASIS-E1",
        description: "Smart forms that save hours per assessment. Built-in logic flags contradictions instantly.",
        icon: FileText,
    },
    {
        title: "Flawless EVV Tracking",
        description: "GPS capture that doesn't drain batteries. Offline-first sync guarantees compliance in dead zones.",
        icon: MapPin,
    },
    {
        title: "Smart Scheduling",
        description: "Drag-and-drop calendar with automatic skill matching and frequency rule enforcement.",
        icon: CalendarClock,
    },
    {
        title: "Clinical Note Templates",
        description: "Structured vitals and narrative frameworks that let nurses chart at the point of care.",
        icon: Stethoscope,
    },
    {
        title: "Ironclad Compliance",
        description: "Role-based access, HIPAA-compliant encryption, and automated audit trails built-in.",
        icon: ShieldAlert,
    },
    {
        title: "PDGM Payment Grouping",
        description: "Real-time visibility into claim calculations and aging right from the agency dashboard.",
        icon: BadgeCheck,
    },
];

const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
    return (
        <section id="features" className="py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary-dark font-semibold tracking-wide uppercase text-sm mb-3">Enterprise Capabilities</h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Everything your agency needs. <br className="hidden md:block" />
                        <span className="text-muted-foreground">None of the clutter.</span>
                    </h3>
                    <p className="text-lg text-muted-foreground">
                        We removed the bloated legacy features you don't use, and perfected the core workflows that drive your business.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-background rounded-3xl p-8 border border-muted/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary shadow-sm">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
