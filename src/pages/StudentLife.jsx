import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import studentsSports from "@/assets/students-sports.jpg";
import { Trophy, Music, Users, Star, Shield, Palette } from "lucide-react";

const clubs = [
  "Science Society", "Literary Society", "Debating Club", "IT Club",
  "Scouting", "Red Cross", "Environmental Club", "Chess Club",
  "Drama Club", "Music Circle", "Robotics Club", "Journalism Club"
];

const sports = [
  "Cricket", "Football", "Rugby", "Athletics",
  "Basketball", "Volleyball", "Badminton", "Table Tennis",
  "Swimming", "Karate", "Chess", "Hockey"
];

const achievements = [
  { title: "All Island Cricket Champions", year: "2024" },
  { title: "Western Province Athletics Gold", year: "2024" },
  { title: "National Science Olympiad Winners", year: "2023" },
  { title: "Best School Award – Gampaha District", year: "2023" },
];

const StudentLife = () => {
  return (
    <Layout>
      <PageHero title="Student Life" subtitle="Where talent meets opportunity — beyond the classroom" image={studentsSports} />

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Palette className="h-10 w-10 text-gold mx-auto mb-3" />
            <h2 className="section-heading">Clubs & Societies</h2>
            <p className="section-subheading">Explore your passions and develop new skills</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clubs.map((club) => (
              <div key={club} className="bg-card rounded-lg p-4 border card-hover shadow-sm text-center">
                <p className="font-medium text-primary text-sm">{club}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <Trophy className="h-10 w-10 text-gold mx-auto mb-3" />
            <h2 className="section-heading">Sports & Athletics</h2>
            <p className="section-subheading">Building champions on and off the field</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {sports.map((sport) => (
              <div key={sport} className="bg-card rounded-lg p-4 border text-center card-hover shadow-sm">
                <p className="text-sm font-medium text-primary">{sport}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Shield className="h-10 w-10 text-gold mb-4" />
              <h2 className="section-heading gold-underline">Leadership &<br />Prefects' Body</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                The Prefects' Body is the backbone of student leadership at St. Joseph's College. Selected through a rigorous process, our prefects exemplify discipline, service, and integrity. They play a vital role in maintaining school culture and mentoring younger students.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Leadership programmes, outbound training camps, and community service projects further develop the qualities needed to lead with compassion and vision.
              </p>
            </div>
            <div>
              <Music className="h-10 w-10 text-gold mb-4" />
              <h2 className="section-heading gold-underline">Cultural &<br />Religious Activities</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our cultural calendar is rich with events celebrating Sri Lanka's diverse heritage. From carol services and feast day celebrations to Vesak and Sinhala-Tamil New Year programmes, we foster an inclusive environment that honours tradition.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Daily prayer, weekly masses, and annual retreats nurture the spiritual growth of our students in the Catholic tradition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container">
          <div className="text-center mb-12">
            <Star className="h-10 w-10 text-gold mx-auto mb-3" />
            <h2 className="font-heading text-3xl font-bold text-primary-foreground">Student Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((a) => (
              <div key={a.title} className="bg-primary-foreground/10 rounded-lg p-6 text-center border border-primary-foreground/10">
                <p className="text-gold font-semibold text-sm mb-1">{a.year}</p>
                <p className="text-primary-foreground font-medium">{a.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentLife;