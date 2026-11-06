export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: "General" | "Pricing" | "Operations" | "Security" | "Quality";
}

export const FAQS: FAQItem[] = [
  {
    id: 1,
    category: "General",
    question: "What does commercial cleaning include in Phoenix, AZ?",
    answer: "Commercial cleaning covers comprehensive facility maintenance customized to your property type. Standard scopes include workstation dusting, multi-stall restroom sanitization and restocking, breakroom degreasing, waste and recycling removal, high-filtration HEPA vacuuming, and hard surface mopping. Specialty add-ons like high-speed floor burnishing, carpet steam extraction, interior/exterior window washing, high dusting, and electrostatic virucidal fogging can also be bundled into your recurring service agreement."
  },
  {
    id: 2,
    category: "Pricing",
    question: "How much does commercial cleaning cost in Phoenix, AZ?",
    answer: "Commercial cleaning in the Phoenix metro area typically ranges between $0.07 and $0.18 per cleanable square foot per visit for recurring office cleaning, or $30 to $55 per labor hour for specialized day porter staffing. Total monthly investment depends on square footage, weekly frequency (daily, 3x/week, or weekly), restroom fixture counts, and floor materials. High-frequency contracts enjoy significant volume discounts per visit. We provide free, transparent on-site walkthrough quotes with no hidden fees."
  },
  {
    id: 3,
    category: "Operations",
    question: "How often should my Phoenix business be professionally cleaned?",
    answer: "Cleaning frequency depends on daily foot traffic, employee headcount, and industry hygiene requirements. High-density offices with 20+ staff, healthcare clinics, and public-facing facilities generally require 5 to 7 days per week. Mid-sized professional offices (law, accounting, architecture) perform well on a 3-night per week schedule (e.g. Mon/Wed/Fri). Smaller boutique offices under 10 employees can often be maintained with 1 to 2 visits weekly, supplemented by quarterly deep cleans."
  },
  {
    id: 4,
    category: "Operations",
    question: "Can your cleaning crew clean our facility after hours or overnight?",
    answer: "Yes. Over 90% of our commercial cleaning accounts across Metro Phoenix are serviced after normal business hours, between 6:00 PM and 5:00 AM, ensuring zero noise or interruption to your employees and clients. We also offer daytime porter services for buildings requiring continuous daytime restroom restocking, spill response, and lobby presentation."
  },
  {
    id: 5,
    category: "Security",
    question: "Are your cleaners insured, bonded, and background-checked?",
    answer: "Yes, 100%. Every Camelback Commercial Cleaning Phoenix employee undergoes a rigorous nationwide criminal background check, reference screening, and drug testing. We carry comprehensive $2,000,000 commercial general liability insurance, full workers' compensation coverage, and surety bonding. Proof of insurance and COI (Certificate of Insurance) naming your company as an additional insured is readily provided upon request."
  },
  {
    id: 6,
    category: "Operations",
    question: "Do you bring your own cleaning supplies and commercial equipment?",
    answer: "Yes, our technicians arrive equipped with commercial-grade cleaning machinery (including commercial HEPA backpack vacuums, auto-scrubbers, and rotary floor polishers) and EPA-registered, eco-friendly hospital-grade disinfectants. If requested, we can also manage and supply all your restroom consumable inventory—including paper towels, jumbo bath tissue, trash liners, and foaming hand soaps—at competitive wholesale pricing."
  },
  {
    id: 7,
    category: "Pricing",
    question: "How do I get a quote for commercial cleaning in Phoenix?",
    answer: "Getting a quote is fast and hassle-free. Call us directly at (602) 362-8865 or submit our online quote request form. An operations manager will schedule a quick 15-to-20 minute on-site walkthrough of your facility to inspect cleanable square footage, flooring types, and restroom counts. Within 24 hours, you receive an itemized, transparent cleaning proposal with clear pricing options and no long-term lock-in traps."
  },
  {
    id: 8,
    category: "General",
    question: "Do you offer one-time deep cleaning as well as recurring janitorial service?",
    answer: "Yes. While our primary focus is reliable recurring janitorial contracts (daily, weekly, bi-weekly), we provide one-time commercial deep cleans, tenant move-in/move-out turnover cleanups, seasonal resets, and 3-phase post-construction cleanup for newly renovated or built commercial spaces throughout Maricopa County."
  },
  {
    id: 9,
    category: "Operations",
    question: "Which Phoenix-area cities and business districts do you serve?",
    answer: "We serve the entire Phoenix metropolitan area, including Phoenix (Downtown, Camelback Corridor, Biltmore, Midtown, Deer Valley, Desert Ridge), Scottsdale (Old Town, Airpark, Kierland, McCormick Ranch), Tempe (Mill Ave, ASU Research Park, Rio Salado), Mesa (Falcon Field, Gateway Airport, Riverview), Chandler (Price Corridor, Ocotillo), Glendale (Westgate, Arrowhead), Gilbert (Heritage District, SanTan Village), Peoria, Surprise, and Avondale."
  },
  {
    id: 10,
    category: "Quality",
    question: "What happens if I am ever not satisfied with a cleaning shift?",
    answer: "We back every service with our Camelback 100% Quality Guarantee. If any aspect of a scheduled cleaning does not meet your standards, notify your dedicated account manager within 24 hours. A supervisor will visit your facility and re-clean the specific area at zero additional charge. We also conduct monthly unannounced supervisor audits to ensure standards remain consistently exceptional over the entire life of your agreement."
  }
];
