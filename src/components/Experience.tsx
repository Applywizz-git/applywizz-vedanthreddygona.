import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Data Analytics Intern",
    company: "Accenture",
    location: "Remote",
    duration: "Nov 2024 – Dec 2024",
    achievements: [
      "Improved dataset reliability to 98% using Python and SQL for data cleaning and validation",
      "Built Power BI dashboards for sales & churn analysis, reducing reporting time from 3 days to 1 hour",
      "Automated Excel workflows using Power Query and VBA, increasing efficiency by 40%",
      "Conducted exploratory data analysis influencing two key client decisions",
      "Designed SQL ETL pipelines with 25% efficiency improvement",
    ],
  },
  {
    role: "Data Analyst",
    company: "Universal Softech Hubs",
    location: "Bengaluru, India",
    duration: "Aug 2021 – Sep 2023",
    achievements: [
      "Extracted and analyzed CRM/ERP data, improving decision-making efficiency by 30%",
      "Built Power BI and Excel dashboards tracking sales and revenue, reducing manual reporting by 50%",
      "Improved dataset reliability to 99% through rigorous data validation",
      "Forecasted sales performance resulting in 12% quarterly revenue increase",
      "Automated Python and Excel workflows, saving 20 hours per month",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-8 sm:py-20 md:py-18 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-accent to-primary-glow mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary-glow" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="absolute left-6 md:left-1/2 w-6 h-6 bg-accent rounded-full border-4 border-background transform -translate-x-1/2 shadow-gold"
              />

              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8 shadow-elegant hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Briefcase className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-accent font-semibold mb-3">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.1 * i }}
                        className="flex items-start gap-3 text-foreground/90"
                      >
                        <span className="text-accent mt-1">▸</span>
                        <span className="flex-1">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
