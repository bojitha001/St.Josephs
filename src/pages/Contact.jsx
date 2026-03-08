import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { toast } from "sonner";

const heroCampus = "/photo-31.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for your message! We will get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you" image={heroCampus} />

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-heading gold-underline">Get in Touch</h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">Address</h4>
                    <p className="text-muted-foreground text-sm">St. Joseph's College, Wattala, Sri Lanka</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">Phone</h4>
                    <p className="text-muted-foreground text-sm">+94 11 2930 XXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">Email</h4>
                    <p className="text-muted-foreground text-sm">info@sjcwattala.lk</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">Office Hours</h4>
                    <p className="text-muted-foreground text-sm">Mon – Fri: 7:30 AM – 3:30 PM</p>
                    <p className="text-muted-foreground text-sm">Saturday: 8:00 AM – 12:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-heading font-semibold text-primary mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="#" className="p-3 rounded-full bg-secondary text-primary hover:bg-gold hover:text-accent-foreground transition-colors"><Facebook className="h-5 w-5" /></a>
                  <a href="#" className="p-3 rounded-full bg-secondary text-primary hover:bg-gold hover:text-accent-foreground transition-colors"><Instagram className="h-5 w-5" /></a>
                  <a href="#" className="p-3 rounded-full bg-secondary text-primary hover:bg-gold hover:text-accent-foreground transition-colors"><Youtube className="h-5 w-5" /></a>
                </div>
              </div>

              <div className="mt-8 rounded-lg overflow-hidden border h-64">
                <iframe
                  title="St. Joseph's College Wattala Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d79.8916!3d7.0078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f8f34ef9fa9f%3A0x7976b888ec350cc4!2sWattala%2011300!5e0!3m2!1sen!2slk!4v1709000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <h2 className="section-heading gold-underline">Send a Message</h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <input
                    type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                  <input
                    type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Subject</label>
                  <input
                    type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea
                    required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                  />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-semibold rounded-md hover:brightness-110 transition-all">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;