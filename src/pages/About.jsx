import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { BookOpen, Eye, Target, Award, Users } from "lucide-react";

const heroCampus = "/photo-02.jpg";
const storyPhoto = "/photo-15.jpg";
const storyPhoto2 = "/photo-16.jpg";
const schoolLogo = "/LOGO.jpg";

const milestones = [
  { year: "Founded", desc: "Established by Catholic missionaries to serve the youth of Wattala" },
  { year: "1970s", desc: "Expanded to include Advanced Level streams" },
  { year: "1990s", desc: "New science laboratories and library complex" },
  { year: "2010s", desc: "Modern IT facilities and sports complex added" },
  { year: "2020s", desc: "Digital learning platforms and international partnerships" },
];

const staff = [
  { name: "Rev. Fr. Rector", role: "Rector" },
  { name: "Mr. K. Perera", role: "Vice Principal" },
  { name: "Mrs. S. Fernando", role: "Head of Academics" },
  { name: "Mr. R. Silva", role: "Director of Sports" },
];

const About = () => {
  return (
    <Layout>
      <PageHero title="About Us" subtitle="Our story, mission, and the people behind St. Joseph's College" image={heroCampus} />

      {/* Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">Our Story</p>
              <h2 className="section-heading gold-underline">A Legacy of<br />Faith & Excellence</h2>
              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                <p>St. Joseph's College, Wattala, is a prestigious Catholic educational institution with a rich heritage of academic excellence and spiritual formation. Founded under the patronage of St. Joseph, the college has been a beacon of learning for generations.</p>
                <p>Our college has consistently produced outstanding individuals who have excelled in academia, sports, arts, and public service, upholding the Josephian values of discipline, faith, and service.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src={storyPhoto} alt="College grounds" className="rounded-lg shadow-xl w-full object-cover h-48" />
              <img src={storyPhoto2} alt="College life" className="rounded-lg shadow-xl w-full object-cover h-48 mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 border shadow-sm">
              <Eye className="h-10 w-10 text-gold mb-4" />
              <h3 className="font-heading text-2xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">To be a centre of excellence in holistic education, forming young men of faith, integrity, and intellectual prowess who will be leaders and servants of society.</p>
            </div>
            <div className="bg-card rounded-lg p-8 border shadow-sm">
              <Target className="h-10 w-10 text-gold mb-4" />
              <h3 className="font-heading text-2xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">To provide a comprehensive Catholic education that develops the whole person — spiritually, intellectually, physically, and socially — preparing students to contribute meaningfully to the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* School Crest */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img src={schoolLogo} alt="School Logo" className="h-48 w-48 object-contain rounded-2xl shadow-lg" />
            <div>
              <h2 className="section-heading gold-underline">School Crest & Houses</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed mb-6">
                The college crest embodies our core values — the cross representing our Catholic faith, the book symbolizing knowledge, and the torch signifying the light of wisdom that guides our students.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["St. Peter's (Blue)", "St. Paul's (Red)", "St. Andrew's (Green)", "St. John's (Yellow)"].map((house) => (
                  <div key={house} className="text-center p-4 bg-secondary rounded-lg">
                    <p className="text-sm font-semibold text-primary">{house}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Milestones & Achievements</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="w-20 shrink-0 text-right">
                  <span className="font-heading font-bold text-gold text-lg">{m.year}</span>
                </div>
                <div className="w-px bg-gold/30 shrink-0 self-stretch" />
                <p className="text-muted-foreground pt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Administration</h2>
            <p className="section-subheading">Our dedicated leadership team</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {staff.map((s) => (
              <div key={s.name} className="text-center bg-card rounded-lg p-6 border card-hover shadow-sm">
                <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-primary">{s.name}</h4>
                <p className="text-sm text-muted-foreground">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;