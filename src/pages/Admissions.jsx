import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import heroCampus from "@/assets/hero-campus.jpg";
import { CheckCircle, ArrowRight, FileText, DollarSign } from "lucide-react";

const reasons = [
  "Catholic values-based education rooted in tradition",
  "Proven track record of academic excellence",
  "Comprehensive co-curricular programme",
  "Modern facilities and learning resources",
  "Experienced and dedicated teaching staff",
  "Strong alumni network and community support",
];

const steps = [
  { step: "01", title: "Obtain Application", desc: "Collect the application form from the college office or download online." },
  { step: "02", title: "Submit Documents", desc: "Submit completed form with birth certificate, baptism certificate (if applicable), and school records." },
  { step: "03", title: "Entrance Assessment", desc: "Students may be required to sit for an entrance assessment or interview." },
  { step: "04", title: "Confirmation", desc: "Successful applicants will be notified and invited for enrollment." },
];

const Admissions = () => {
  return (
    <Layout>
      <PageHero title="Admissions" subtitle="Join the Josephian family — where your journey begins" image={heroCampus} />

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose St. Joseph's?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reasons.map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <p className="text-foreground">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading">How to Apply</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-card rounded-lg p-6 border shadow-sm text-center card-hover">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="font-heading text-xl font-bold text-gold">{s.step}</span>
                </div>
                <h4 className="font-heading font-semibold text-primary mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <FileText className="h-8 w-8 text-gold mb-4" />
              <h2 className="section-heading gold-underline">Admission Requirements</h2>
              <ul className="mt-8 space-y-3">
                {[
                  "Completed application form",
                  "Birth certificate (original & copy)",
                  "Baptism certificate (Catholic applicants)",
                  "Previous school report cards",
                  "Transfer certificate (if applicable)",
                  "Two passport-size photographs",
                  "Parent/guardian NIC copies",
                ].map((req) => (
                  <li key={req} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <DollarSign className="h-8 w-8 text-gold mb-4" />
              <h2 className="section-heading gold-underline">Fees Structure</h2>
              <div className="mt-8 bg-card rounded-lg border p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a government-assisted school, St. Joseph's College maintains an affordable fee structure. Detailed information about fees, including development fund contributions and activity fees, can be obtained from the college office.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
                  Contact for Fee Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Ready to Join?</h2>
          <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">Get in touch with our admissions office for more information or to schedule a visit.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-semibold rounded-md hover:brightness-110 transition-all">
            Contact Admissions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;