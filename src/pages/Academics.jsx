import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import classroom from "@/assets/classroom.jpg";
import { BookOpen, FlaskConical, Monitor, Calendar, Award } from "lucide-react";

const levels = [
  { title: "Primary Section", grades: "Grade 1 – 5", desc: "A nurturing foundation in literacy, numeracy, and creative thinking with a focus on character formation." },
  { title: "Middle School", grades: "Grade 6 – 9", desc: "Building on fundamentals with broader academic exposure, technology integration, and co-curricular development." },
  { title: "Upper School (O/L)", grades: "Grade 10 – 11", desc: "Preparing students for the G.C.E. Ordinary Level examination with rigorous academic programmes." },
  { title: "Advanced Level", grades: "Grade 12 – 13", desc: "Specialised streams in Science, Commerce, and Arts preparing students for university entrance." },
];

const streams = ["Physical Science", "Biological Science", "Commerce", "Arts", "Technology"];

const facilities = [
  { icon: FlaskConical, title: "Science Laboratories", desc: "Fully equipped physics, chemistry, and biology labs" },
  { icon: Monitor, title: "IT Centre", desc: "Modern computer labs with high-speed internet" },
  { icon: BookOpen, title: "Library", desc: "Extensive collection of books and digital resources" },
  { icon: Award, title: "Auditorium", desc: "Multi-purpose hall for events and presentations" },
];

const Academics = () => {
  return (
    <Layout>
      <PageHero title="Academics" subtitle="Excellence in teaching and learning at every level" image={classroom} />

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">Curriculum</p>
            <h2 className="section-heading">Academic Programme</h2>
            <p className="section-subheading max-w-2xl mx-auto">Our curriculum follows the national syllabus while incorporating modern pedagogical approaches to ensure holistic student development.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {levels.map((level) => (
              <div key={level.title} className="bg-card rounded-lg p-8 border card-hover shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary">{level.title}</h3>
                    <p className="text-xs text-gold font-semibold">{level.grades}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{level.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <h2 className="section-heading">A/L Streams Offered</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {streams.map((s) => (
              <div key={s} className="bg-card px-6 py-3 rounded-full border font-semibold text-primary shadow-sm">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Facilities</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facilities.map((f) => (
              <div key={f.title} className="text-center bg-card rounded-lg p-6 border card-hover shadow-sm">
                <f.icon className="h-10 w-10 mx-auto mb-4 text-gold" />
                <h4 className="font-heading font-semibold text-primary mb-1">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container text-center">
          <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-2">Academic Calendar</h2>
          <p className="text-primary-foreground/70 mb-6">Term 1: January – April | Term 2: May – August | Term 3: September – December</p>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;