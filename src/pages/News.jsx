import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Newspaper, Calendar, Image, Trophy, FileText } from "lucide-react";

const heroCampus = "/photo-06.jpg";

const galleryPhotos = [
  "/photo-07.jpg", "/photo-08.jpg", "/photo-09.jpg",
  "/photo-10.jpg", "/photo-11.jpg", "/photo-12.jpg",
];

const newsItems = [
  { date: "Mar 5, 2026", title: "SJC Wattala Wins Inter-School Cricket Championship", category: "Sports", img: "/photo-13.jpg" },
  { date: "Feb 28, 2026", title: "A/L 2025 Results: 98% Pass Rate Achieved", category: "Academics", img: "/photo-14.jpg" },
  { date: "Feb 15, 2026", title: "Annual Prize Giving Ceremony 2025", category: "Events", img: "/photo-17.jpg" },
  { date: "Jan 20, 2026", title: "New Science Lab Inaugurated by Education Minister", category: "Campus", img: "/photo-18.jpg" },
  { date: "Jan 10, 2026", title: "Josephian Scouts Win Presidential Award", category: "Achievement", img: "/photo-32.jpg" },
  { date: "Dec 20, 2025", title: "Christmas Carol Service & Charity Drive", category: "Faith Life", img: "/photo-05.jpg" },
];

const events = [
  { date: "Mar 19", title: "St. Joseph's Feast Day" },
  { date: "Mar 25", title: "Inter-House Cricket" },
  { date: "Apr 05", title: "Parent-Teacher Meeting" },
  { date: "Apr 14", title: "New Year Programme" },
  { date: "May 01", title: "May Day Service" },
  { date: "Jun 15", title: "Mid-Year Prize Giving" },
];

const News = () => {
  return (
    <Layout>
      <PageHero title="News & Media" subtitle="Stay updated with the latest from St. Joseph's College" image={heroCampus} />

      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="h-6 w-6 text-gold" />
            <h2 className="section-heading mb-0">Latest News</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <div key={item.title} className="bg-card rounded-lg border card-hover shadow-sm overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-1 rounded">{item.category}</span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-primary leading-snug">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-6 w-6 text-gold" />
            <h2 className="section-heading mb-0">Events Calendar</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((e) => (
              <div key={e.title} className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                <div className="w-14 h-14 bg-primary rounded-lg flex flex-col items-center justify-center text-primary-foreground shrink-0">
                  <span className="text-[10px] font-medium">{e.date.split(" ")[0]}</span>
                  <span className="text-lg font-bold">{e.date.split(" ")[1]}</span>
                </div>
                <p className="font-medium text-foreground text-sm">{e.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image className="h-6 w-6 text-gold" />
                <h2 className="section-heading mb-0">Photo Gallery</h2>
              </div>
              <p className="text-muted-foreground mb-6">Browse moments from college events, sports days, and ceremonies. Photos will be updated regularly.</p>
              <div className="grid grid-cols-3 gap-2">
                {galleryPhotos.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-lg">
                    <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-gold" />
                <h2 className="section-heading mb-0">Publications</h2>
              </div>
              <div className="space-y-4">
                {["School Magazine 2025", "Newsletter – Term 3, 2025", "Newsletter – Term 2, 2025", "Annual Report 2024"].map((pub) => (
                  <div key={pub} className="flex items-center gap-3 p-4 bg-card rounded-lg border card-hover">
                    <FileText className="h-5 w-5 text-gold shrink-0" />
                    <span className="font-medium text-primary text-sm">{pub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;