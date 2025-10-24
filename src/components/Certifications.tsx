import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Python Programming",
    issuer: "W3Schools",
    description: "Core Python programming fundamentals and advanced concepts",
  },
  {
    title: "SQL for Data Science",
    issuer: "Coursera",
    description: "Advanced SQL queries, optimization, and data manipulation",
  },
  {
    title: "GenAI-Powered Data Analytics",
    issuer: "Tata Virtual Experience",
    description: "Leveraging GenAI for modern data analytics workflows",
  },
  {
    title: "Google Data Analytics Professional",
    issuer: "Coursera",
    description: "Comprehensive data analytics methodology and tools",
  },
  {
    title: "IBM Data Analyst Professional",
    issuer: "Coursera",
    description: "Enterprise data analysis and visualization techniques",
  },
  {
    title: "Excel Skills for Business: Advanced",
    issuer: "Coursera",
    description: "Power Query, VBA, and advanced Excel analytics",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-15 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4">
             <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, rotateY: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-full"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                whileHover={{ rotateY: 10, scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative h-full bg-card/70 backdrop-blur-sm border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Badge Effect */}
                <div className="absolute top-4 right-4 p-2 bg-secondary/10 rounded-full">
                  <Award style={{ color: "#D4AF37" }} size={24} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-poppins font-bold text-foreground pr-12">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 text-amber-400 font-semibold">

                    <span className="text-sm">{cert.issuer}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
