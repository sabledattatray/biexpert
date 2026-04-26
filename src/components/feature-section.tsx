"use client"

import { motion } from "framer-motion";
import { Database, LineChart, PieChart } from "lucide-react";

const features = [
  {
    name: "Power BI & Tableau Dashboards",
    description: "Interactive, real-time dashboards that turn complex datasets into intuitive visual stories.",
    icon: PieChart,
  },
  {
    name: "SQL Architecture",
    description: "Robust data warehousing, optimized queries, and scalable database design for enterprise needs.",
    icon: Database,
  },
  {
    name: "Advanced Analytics",
    description: "Predictive modeling and deep statistical analysis to uncover actionable business insights.",
    icon: LineChart,
  },
];

export function FeatureSection() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to master your data
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From raw data extraction to beautiful, actionable dashboards. I provide end-to-end business intelligence solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                className="flex flex-col rounded-none bg-background p-8 shadow-sm ring-1 ring-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
