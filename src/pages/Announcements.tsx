
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const announcements = [
  {
    id: 1,
    title: "Fall Registration Now Open",
    date: "May 1, 2025",
    content: "Registration for fall semester courses is now open. Please consult with your academic advisor to plan your course schedule. Early registration is encouraged to secure your preferred classes.",
    category: "Administrative"
  },
  {
    id: 2,
    title: "Guest Lecture: Ethics in AI",
    date: "April 28, 2025",
    content: "Dr. Jane Smith from Stanford University will present a lecture on 'Ethical Considerations in AI Development' on May 10 at 3:00 PM in the Science Auditorium. All students and faculty are encouraged to attend this insightful discussion on an increasingly important topic in our field.",
    category: "Event"
  },
  {
    id: 3,
    title: "Summer Internship Opportunities",
    date: "April 15, 2025",
    content: "Several leading tech companies have posted summer internship opportunities specifically for our students. Visit the department career portal to view listings from Google, Microsoft, Amazon, and local tech startups. Application deadlines vary, with some as early as May 1.",
    category: "Career"
  },
  {
    id: 4,
    title: "New Course: Blockchain Development",
    date: "April 10, 2025",
    content: "The department is pleased to announce a new course, CS450: Blockchain Development, which will be offered in the fall semester. This course will cover the fundamentals of blockchain technology and smart contract development. Prerequisites include CS225 and CS315.",
    category: "Curriculum"
  },
  {
    id: 5,
    title: "Research Symposium Call for Papers",
    date: "April 5, 2025",
    content: "The annual Computer Science Research Symposium will be held on June 15. Undergraduate and graduate students are invited to submit papers on their research projects. Submissions are due by May 20, and selected papers will be presented at the symposium.",
    category: "Research"
  },
  {
    id: 6,
    title: "Faculty Office Hours Update",
    date: "April 1, 2025",
    content: "Please note that several faculty members have updated their office hours for the remainder of the semester. Check the faculty directory on the department website for the most current schedule.",
    category: "Administrative"
  }
];

const categoryColors = {
  Administrative: "default",
  Event: "secondary",
  Career: "destructive",
  Curriculum: "outline",
  Research: "secondary" // Changed from "primary" to "secondary" to fix the TS error
} as const;

const Announcements = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Announcements</h1>
      <p className="mb-8 text-lg">
        Stay updated with the latest department news, events, and opportunities.
      </p>
      
      <div className="space-y-6">
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle>{announcement.title}</CardTitle>
                <Badge variant={categoryColors[announcement.category as keyof typeof categoryColors]}>
                  {announcement.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p>{announcement.content}</p>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              Posted on {announcement.date}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
