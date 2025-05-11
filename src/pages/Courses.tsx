
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const courses = {
  undergraduate: [
    {
      code: "CS101",
      title: "Introduction to Programming",
      description: "Fundamentals of programming using Python. Covers basic syntax, data structures, and algorithms.",
      credits: 3,
      prerequisites: "None",
      tags: ["Core", "Python"]
    },
    {
      code: "CS201",
      title: "Data Structures",
      description: "Implementation and application of essential data structures. Topics include arrays, linked lists, stacks, queues, trees, and graphs.",
      credits: 4,
      prerequisites: "CS101",
      tags: ["Core", "Java"]
    },
    {
      code: "CS225",
      title: "Algorithms",
      description: "Design and analysis of algorithms. Topics include sorting, searching, dynamic programming, and complexity theory.",
      credits: 3,
      prerequisites: "CS201, Math210",
      tags: ["Core"]
    },
    {
      code: "CS306",
      title: "Mobile Device Programming",
      description: "Development of applications for mobile devices. Covers user interfaces, data storage, and network communication.",
      credits: 3,
      prerequisites: "CS225",
      tags: ["Elective", "React Native"]
    },
    {
      code: "CS315",
      title: "Web Development",
      description: "Client-side and server-side web application development. Covers HTML, CSS, JavaScript, and Node.js.",
      credits: 3,
      prerequisites: "CS201",
      tags: ["Elective", "JavaScript"]
    }
  ],
  graduate: [
    {
      code: "CS501",
      title: "Advanced Algorithms",
      description: "Advanced topics in algorithm design and analysis, including amortized analysis and computational geometry.",
      credits: 3,
      prerequisites: "CS225",
      tags: ["Core"]
    },
    {
      code: "CS510",
      title: "Machine Learning",
      description: "Fundamentals of machine learning, including supervised and unsupervised learning, neural networks, and deep learning.",
      credits: 4,
      prerequisites: "CS225, Math310",
      tags: ["Elective", "Python"]
    },
    {
      code: "CS532",
      title: "Computer Vision",
      description: "Image processing, feature detection, object recognition, and 3D reconstruction.",
      credits: 3,
      prerequisites: "CS510",
      tags: ["Elective", "Python"]
    }
  ]
};

const Courses = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Courses Offered</h1>

      <Tabs defaultValue="undergraduate" className="mb-8">
        <TabsList>
          <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
          <TabsTrigger value="graduate">Graduate</TabsTrigger>
        </TabsList>
        <TabsContent value="undergraduate" className="mt-6">
          <p className="mb-6">
            Our undergraduate program offers a comprehensive curriculum covering the fundamental areas of computer science, 
            providing students with a strong foundation for careers in technology or further academic pursuits.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {courses.undergraduate.map((course) => (
              <CourseCard key={course.code} course={course} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="graduate" className="mt-6">
          <p className="mb-6">
            Our graduate program offers advanced coursework and research opportunities in specialized areas of computer science, 
            designed for students seeking to deepen their knowledge and make contributions to the field.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {courses.graduate.map((course) => (
              <CourseCard key={course.code} course={course} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface CourseCardProps {
  course: {
    code: string;
    title: string;
    description: string;
    credits: number;
    prerequisites: string;
    tags: string[];
  };
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{course.code}: {course.title}</CardTitle>
            <CardDescription className="mt-1">{course.credits} credits</CardDescription>
          </div>
          <div className="flex gap-1 flex-wrap justify-end">
            {course.tags.map((tag) => (
              <Badge key={tag} variant={tag === "Core" ? "default" : "outline"}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>{course.description}</p>
      </CardContent>
      <CardFooter>
        <div className="text-sm">
          <span className="font-medium">Prerequisites:</span> {course.prerequisites}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Courses;
