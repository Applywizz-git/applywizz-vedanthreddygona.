import { motion } from "framer-motion";
import {
  SiPython,
  SiR,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiOracle,
  SiDatabricks,
  SiApachespark,
  SiApachekafka,
  SiApachehadoop,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { Database, BarChart3, GitBranch, Cloud, Cpu, Shield, Zap, Code, CloudCog } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Analytics",
    icon: Code,
    skills: ["Python", "SQL", "R", "DAX", "Shell Scripting"],
  },
  {
    title: "Visualization Tools",
    icon: BarChart3,
    skills: ["Power BI", "Tableau", "Looker Studio", "Excel (Power Query/Pivot)"],
  },
  {
    title: "ETL & Data Engineering",
    icon: Zap,
    skills: ["SSIS", "ADF", "Airflow", "Databricks", "Informatica", "Talend", "Alteryx", "dbt"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL Server", "MySQL", "PostgreSQL", "Oracle", "MongoDB", "BigQuery", "Redshift", "Synapse"],
  },
  {
    title: "Cloud & Big Data",
    icon: Cloud,
    skills: ["Azure", "AWS", "GCP", "Spark", "Kafka", "Hadoop", "Delta Lake"],
  },
  {
    title: "Modeling & Governance",
    icon: Shield,
    skills: ["Star/Snowflake Schema", "Data Quality", "Metadata Management"],
  },
  {
    title: "Automation & Reporting",
    icon: Cpu,
    skills: ["Power Automate", "VBA", "REST APIs", "Scheduling"],
  },
  {
    title: "GenAI & Advanced Analytics",
    icon: Zap,
    skills: ["Prompt Engineering", "LLM Data Analysis", "NLP Analytics"],
  },
  {
    title: "Dev & Collaboration",
    icon: GitBranch,
    skills: ["Jupyter", "VS Code", "GitHub", "Docker", "Agile CI/CD"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-30 relative overflow-hidden bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-card/70 backdrop-blur-sm border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                 <category.icon style={{ color: "#D4AF37" }} size={24} />

                </div>
                <h3 className="text-xl font-poppins font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 bg-muted/50 border border-border rounded-lg text-sm font-medium text-foreground/90 hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-8"
        >
          {[
            { Icon: SiPython, color: "#3776AB" },
            { Icon: SiMysql, color: "#4479A1" },
            { Icon: SiPostgresql, color: "#336791" },
            { Icon: SiMongodb, color: "#47A248" },
            { Icon: SiDatabricks, color: "#FF3621" },
            { Icon: SiApachespark, color: "#E25A1C" },
            { Icon: CloudCog, color: "#0078D4" },
            { Icon: SiAmazon, color: "#FF9900" },
            { Icon: SiGooglecloud, color: "#4285F4" },
            { Icon: SiDocker, color: "#2496ED" },
            { Icon: SiGithub, color: "#ffffff" },
          ].map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="transition-transform duration-200"
            >
              <Icon size={48} style={{ color }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
