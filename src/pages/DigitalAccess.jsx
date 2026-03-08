import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { GraduationCap, Users, Monitor, FileText, UserCircle, Heart, Briefcase, ExternalLink } from "lucide-react";

const heroCampus = "/photo-29.jpg";

const portals = [
  { icon: GraduationCap, title: "Student Portal", desc: "Access assignments, results, timetables and student resources.", link: "#" },
  { icon: Users, title: "Staff Portal", desc: "Staff management, lesson plans, and administrative tools.", link: "#" },
  { icon: Monitor, title: "E-Learning / LMS", desc: "Online learning platform with courses, quizzes, and study materials.", link: "#" },
  { icon: FileText, title: "Online Results", desc: "View term test results and examination performance reports.", link: "#" },
];

const community = [
  { icon: UserCircle, title: "Alumni / Old Boys' Association", desc: "Stay connected with fellow Josephians and give back to your alma mater." },
  { icon: Users, title: "Parent–Teacher Association", desc: "Collaborate with teachers to support your child's education and school activities." },
  { icon: Briefcase, title: "Careers & Vacancies", desc: "Explore teaching and administrative opportunities at St. Joseph's College." },
  { icon: Heart, title: "Donations / Support", desc: "Support our mission with donations for scholarships, infrastructure, and student welfare." },
];

const DigitalAccess = () => {
  return (
    <Layout>
      <PageHero title="Digital Access" subtitle="Your gateway to online services and community" image={heroCampus} />

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Online Portals</h2>
            <p className="section-subheading">Access digital services for students and staff</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {portals.map((p) => (
              <a key={p.title} href={p.link} className="flex items-start gap-4 bg-card rounded-lg p-6 border card-hover shadow-sm group">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <p.icon className="h-6 w-6 text-gold" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-semibold text-primary">{p.title}</h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Community & Support</h2>
            <p className="section-subheading">Be part of the broader Josephian community</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {community.map((c) => (
              <div key={c.title} className="bg-card rounded-lg p-6 border card-hover shadow-sm">
                <c.icon className="h-8 w-8 text-gold mb-3" />
                <h3 className="font-heading font-semibold text-primary mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalAccess;