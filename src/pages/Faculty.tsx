
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const faculty = [
  {
    id: 1,
    name: "Dr. John Smith",
    title: "Department Chair, Professor",
    email: "jsmith@cs.university.edu",
    phone: "(555) 123-4567",
    office: "Science Building, Room 301",
    officeHours: "Monday & Wednesday: 2:00 PM - 4:00 PM",
    research: "Artificial Intelligence, Machine Learning",
    bio: "Dr. John Smith has been with the department for over 15 years. His research focuses on machine learning algorithms and their applications in healthcare. He has published numerous articles in top journals and has received grants from the National Science Foundation.",
    courses: ["CS510: Machine Learning", "CS101: Introduction to Programming"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Dr. Emily Jones",
    title: "Associate Professor",
    email: "ejones@cs.university.edu",
    phone: "(555) 123-4568",
    office: "Science Building, Room 302",
    officeHours: "Tuesday & Thursday: 1:00 PM - 3:00 PM",
    research: "Computer Graphics, Virtual Reality",
    bio: "Dr. Emily Jones joined the department in 2015 after completing her postdoctoral research at MIT. Her work in computer graphics has contributed to advancements in virtual reality applications for education and training.",
    courses: ["CS315: Web Development", "CS401: Computer Graphics"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    title: "Assistant Professor",
    email: "mchen@cs.university.edu",
    phone: "(555) 123-4569",
    office: "Science Building, Room 303",
    officeHours: "Friday: 10:00 AM - 2:00 PM",
    research: "Cybersecurity, Network Security",
    bio: "Dr. Michael Chen's research focuses on developing robust security protocols for embedded systems. Before joining academia, he worked in the cybersecurity industry for five years, where he developed security solutions for major tech companies.",
    courses: ["CS225: Algorithms", "CS330: Cybersecurity"],
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Dr. Sarah Wilson",
    title: "Associate Professor",
    email: "swilson@cs.university.edu",
    phone: "(555) 123-4570",
    office: "Science Building, Room 304",
    officeHours: "Monday & Wednesday: 10:00 AM - 12:00 PM",
    research: "Human-Computer Interaction, User Experience",
    bio: "Dr. Sarah Wilson's work bridges the gap between technology and psychology, focusing on creating intuitive user interfaces. She has collaborated with industry partners to develop accessible technology solutions for diverse user groups.",
    courses: ["CS306: Mobile Device Programming", "CS402: Human-Computer Interaction"],
    image: "/placeholder.svg"
  }
];

const Faculty = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Faculty Directory</h1>
      <p className="mb-8 text-lg">
        Our faculty members are dedicated to excellence in teaching and research. Feel free to reach out to them during office hours or by email.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2">
        {faculty.map((member) => (
          <FacultyCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

interface FacultyCardProps {
  member: {
    id: number;
    name: string;
    title: string;
    email: string;
    phone: string;
    office: string;
    officeHours: string;
    research: string;
    bio: string;
    courses: string[];
    image: string;
  };
}

const FacultyCard = ({ member }: FacultyCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{member.name}</CardTitle>
            <CardDescription>{member.title}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-medium">Email:</span> {member.email}
          </div>
          <div>
            <span className="font-medium">Office:</span> {member.office}
          </div>
          <div>
            <span className="font-medium">Office Hours:</span> {member.officeHours}
          </div>
          <div>
            <span className="font-medium">Research Areas:</span> {member.research}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">View Profile</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{member.name}</DialogTitle>
              <DialogDescription>{member.title}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium">Biography</h3>
                  <p className="text-sm">{member.bio}</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-2">Contact Information</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">Email:</span> {member.email}
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span> {member.phone}
                  </div>
                  <div>
                    <span className="font-medium">Office:</span> {member.office}
                  </div>
                  <div>
                    <span className="font-medium">Office Hours:</span> {member.officeHours}
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-2">Courses Teaching</h3>
                <ul className="list-disc list-inside text-sm">
                  {member.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default Faculty;
