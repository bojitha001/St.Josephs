import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Trophy, Music, Users, Star, Shield, Palette, BookOpen, Laptop, Camera, FlaskConical, Briefcase, Church, Cross, Award, MusicIcon, Drum, Tent, Dumbbell, Swords, Waves, Crown, Goal, Volleyball } from "lucide-react";

const heroImage = "/photo-03.jpg";

const galleryPhotos = [
  { src: "/photo-19.jpg", label: "Sports Day" },
  { src: "/photo-20.jpg", label: "Cultural Events" },
  { src: "/photo-21.jpg", label: "Athletics" },
  { src: "/photo-22.jpg", label: "College Life" },
  { src: "/photo-23.jpg", label: "Competitions" },
  { src: "/photo-24.jpg", label: "Team Spirit" },
  { src: "/photo-25.jpg", label: "Leadership" },
  { src: "/photo-26.jpg", label: "Achievements" },
];

const coCurricular = [
  {
    title: "Sinhala Literary Union",
    description: "Promotes a love for Sinhala language and literature through debates, creative writing, competitions, and literary events, nurturing cultural awareness and communication skills.",
    icon: BookOpen,
  },
  {
    title: "English Literary Association",
    description: "Enhances English proficiency through competitions and events. English Day 2024 highlighted students' creativity, with notable achievements at zonal, provincial, and national levels.",
    icon: BookOpen,
  },
  {
    title: "Commerce Union",
    description: "Provides exposure to business and entrepreneurship through workshops and events.",
    icon: Briefcase,
  },
  {
    title: "Science Union",
    description: "Encourages curiosity and innovation through experiments, projects, workshops, and collaborative scientific learning experiences.",
    icon: FlaskConical,
  },
  {
    title: "Joes Media",
    description: "Captures school life through photography, videography, and digital media, developing creativity, teamwork, and modern media skills.",
    icon: Camera,
  },
  {
    title: "ICT Society",
    description: "Showcases technological excellence with achievements at zonal, provincial, and national levels, including web development, digital art, robotics, and coding competitions.",
    icon: Laptop,
  },
];

const extraCurricular = [
  {
    title: "Liturgy Committee",
    description: "Strengthens the spiritual life of the school by organizing liturgical celebrations and fostering faith, prayer, and reflection.",
    icon: Church,
  },
  {
    title: "Altar Servers' Union",
    description: "Encourages service at the altar, nurturing discipline, prayer, and spiritual growth among students.",
    icon: Cross,
  },
  {
    title: "Prefects' Body",
    description: "Supports school administration by maintaining discipline and assisting in school and religious activities with leadership and responsibility.",
    icon: Shield,
  },
  {
    title: "College Choir",
    description: "Plays a vital role in liturgical and cultural events, achieving first place at zonal competitions and hosting the annual Carol Service Lux Mundi.",
    icon: Music,
  },
  {
    title: "Senior Western Band",
    description: "Enhances the school's cultural life through performances at events and ceremonies, showcasing musical talent and discipline.",
    icon: Music,
  },
  {
    title: "Scouting",
    description: "Develops teamwork, leadership, and life skills through camps and competitions, achieving notable district-level successes.",
    icon: Tent,
  },
];

const sports = [
  {
    title: "Athletics",
    description: "Achieved strong performances at zonal and provincial meets, with several athletes qualifying for higher-level competitions.",
    icon: Dumbbell,
  },
  {
    title: "Basketball",
    description: "Excelled at zonal, provincial, and national levels, with championships and international representation by a student player.",
    icon: Trophy,
  },
  {
    title: "Cricket & Cricket Academy",
    description: "Provides structured training and competitive exposure, nurturing young talent across multiple age categories.",
    icon: Trophy,
  },
  {
    title: "Chess",
    description: "Represented the college at all-island level competitions, demonstrating strategic skill and focus.",
    icon: Crown,
  },
  {
    title: "Football",
    description: "A growing sport at the college, with students gaining experience through friendly and invitational matches.",
    icon: Goal,
  },
  {
    title: "Swimming",
    description: "Introduced in 2024 and quickly expanded, promoting fitness, confidence, and life-saving skills among students.",
    icon: Waves,
  },
  {
    title: "Karate",
    description: "Achieved outstanding success at district, provincial, and national levels, bringing pride to the college.",
    icon: Swords,
  },
  {
    title: "Wrestling",
    description: "Continued a strong legacy with district, national, and international achievements, including representation at the Asian level.",
    icon: Award,
  },
];

const ActivityCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="bg-card rounded-lg p-6 border card-hover shadow-sm flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-gold shrink-0" />
        <h3 className="font-heading font-semibold text-primary text-base">{item.title}</h3>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
    </div>
  );
};

const StudentLife = () => {
  return (
    <Layout>
      <PageHero title="Student Life" subtitle="Where talent meets opportunity — beyond the classroom" image={heroImage} />

      {/* Co-Curricular Activities */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Palette className="h-10 w-10 text-gold mx-auto mb-3" />
            <h2 className="section-heading">Co-Curricular Activities</h2>
            <p className="section-subheading">Academic enrichment through unions and societies</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coCurricular.map((item) => (
              <ActivityCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Extra-Curricular Activities */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <Star className="h-10 w-10 text-gold mx-auto mb-3" />
            <h2 className="section-heading">Extra-Curricular Activities</h2>
            <p className="section-subheading">Faith, service, music, and leadership</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraCurricular.map((item) => (
              <ActivityCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Camera className="h-10 w-10 text-gold mx-auto mb-3" />
            <h2 className="section-heading">Life at SJC — In Pictures</h2>
            <p className="section-subheading">Moments that define the Josephian experience</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryPhotos.map((photo, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-lg shadow-md">
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-sm font-semibold">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Trophy className="h-10 w-10 text-gold mx-auto mb-3" />
            <h2 className="section-heading">Sports</h2>
            <p className="section-subheading">Building champions on and off the field</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sports.map((item) => (
              <ActivityCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentLife;
