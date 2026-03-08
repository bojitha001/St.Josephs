import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Trophy, Calendar, Cross, GraduationCap } from "lucide-react";
import Layout from "@/components/Layout";

const schoolLogo = "/LOGO.jpg";

const heroCampus = "/photo-01.jpg";
const rectorsPhoto = "/photo-04.jpg";
const studentsSports = "/photo-05.jpg";

const quickLinks = [
  { icon: GraduationCap, label: "Admissions", path: "/admissions", color: "bg-gold" },
  { icon: BookOpen, label: "Academics", path: "/academics", color: "bg-navy" },
  { icon: Calendar, label: "Events", path: "/news", color: "bg-navy-light" },
  { icon: Users, label: "Contact Us", path: "/contact", color: "bg-gold" },
];

const highlights = [
  { icon: Trophy, title: "National Champions", desc: "Cricket & Athletics 2025" },
  { icon: Cross, title: "Annual Feast Day", desc: "March 19th – St. Joseph's Feast" },
  { icon: GraduationCap, title: "A/L Results", desc: "98% Pass Rate in 2025" },
  { icon: Users, title: "2000+ Students", desc: "A thriving learning community" },
];

const upcomingEvents = [
  { date: "Mar 19", title: "St. Joseph's Feast Day Celebrations" },
  { date: "Mar 25", title: "Inter-House Cricket Tournament" },
  { date: "Apr 05", title: "Parent-Teacher Meeting (Grade 11)" },
  { date: "Apr 14", title: "Sinhala & Tamil New Year Programme" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center bg-cover bg-center" style={{ backgroundImage: `url(${heroCampus})` }}>
        <div className="absolute inset-0 hero-overlay" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <img src={schoolLogo} alt="St. Joseph's College Logo" className="h-16 w-16 object-contain rounded-full drop-shadow-lg" />
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              St. Joseph's College<br />
              <span className="gold-accent">Wattala</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
              Nurturing faith, knowledge, and character — building leaders for tomorrow since our founding.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/admissions" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-accent-foreground font-semibold rounded-md hover:brightness-110 transition-all">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground rounded-md hover:bg-primary-foreground/10 transition-all">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="-mt-16 relative z-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((item) => (
              <Link key={item.label} to={item.path} className="card-hover bg-card rounded-lg p-6 text-center shadow-lg border">
                <item.icon className="h-8 w-8 mx-auto mb-3 text-gold" />
                <span className="font-heading font-semibold text-primary">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rector's Message */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">A Message from the Rector</p>
              <h2 className="section-heading gold-underline">Welcoming You to<br />Our Josephian Family</h2>
              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dear Parents, Students, and Well-Wishers, it is with great joy that I welcome you to St. Joseph's College, Wattala — a place where faith meets excellence in education.
                </p>
                <p>
                  Our mission is to form young men of integrity, grounded in Catholic values, equipped with academic excellence, and inspired to serve their communities. We invite you to be part of this transformative journey.
                </p>
              </div>
              <p className="mt-6 font-heading font-semibold text-primary">Rev. Fr. Rector</p>
              <p className="text-sm text-muted-foreground">Rector, St. Joseph's College Wattala</p>
            </div>
            <div className="relative">
              <img src={rectorsPhoto} alt="Rector's message" className="rounded-lg shadow-xl w-full object-cover max-h-96" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold/20 rounded-lg -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading">College Highlights</h2>
            <p className="section-subheading">Celebrating our achievements and community</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-6 text-center card-hover shadow-sm border">
                <item.icon className="h-10 w-10 mx-auto mb-4 text-gold" />
                <h3 className="font-heading font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events & Student Life */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-heading gold-underline">Upcoming Events</h2>
              <div className="mt-8 space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.title} className="flex items-center gap-4 p-4 rounded-lg bg-card border card-hover">
                    <div className="w-16 h-16 bg-primary rounded-lg flex flex-col items-center justify-center text-primary-foreground shrink-0">
                      <span className="text-xs font-medium">{event.date.split(" ")[0]}</span>
                      <span className="text-lg font-bold">{event.date.split(" ")[1]}</span>
                    </div>
                    <p className="font-medium text-foreground">{event.title}</p>
                  </div>
                ))}
              </div>
              <Link to="/news" className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-gold hover:underline">
                View All Events <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <h2 className="section-heading gold-underline">Student Life</h2>
              <div className="mt-8">
                <img src={studentsSports} alt="Students playing sports" className="rounded-lg shadow-lg mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  From competitive sports to vibrant cultural activities, St. Joseph's College offers a rich tapestry of co-curricular opportunities that nurture talent and build character.
                </p>
                <Link to="/student-life" className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline">
                  Explore Student Life <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Begin Your Josephian Journey</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">Applications are open for the upcoming academic year. Join a community of excellence.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-semibold rounded-md hover:brightness-110 transition-all">
              Apply for Admission <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-foreground/30 text-primary-foreground rounded-md hover:bg-primary-foreground/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;