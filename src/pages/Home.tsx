
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-container">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="col-span-3 md:col-span-2">
          <div className="flex flex-col gap-8">
            <section>
              <h1 className="page-title">Department of Computer Science</h1>
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">
                  Welcome to the Computer Science Department, where innovation meets education.
                  Our department is committed to excellence in teaching, research, and service in the
                  rapidly evolving field of computer science.
                </p>
                
                <div className="my-8 rounded-lg overflow-hidden h-64 bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
                    alt="Computer Science Department" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <h2 className="section-title">Our Mission</h2>
                <p>
                  Our mission is to provide students with a comprehensive foundation in computer science 
                  principles and practices, preparing them for successful careers in technology and 
                  related fields. We strive to foster critical thinking, problem-solving skills, 
                  and a passion for lifelong learning.
                </p>
                
                <h2 className="section-title">Research Areas</h2>
                <p>
                  Our faculty members are engaged in cutting-edge research across various domains of 
                  computer science, including artificial intelligence, machine learning, cybersecurity, 
                  algorithms, software engineering, and computer graphics.
                </p>
                
                <div className="flex gap-4 mt-6">
                  <Button asChild>
                    <Link to="/courses">Explore Courses</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/faculty">Meet Our Faculty</Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
        
        <div className="col-span-3 md:col-span-1">
          <div className="sticky top-20 flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Latest Announcements</CardTitle>
                <CardDescription>Stay updated with department news</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-medium">Fall Registration Open</h3>
                    <p className="text-sm text-muted-foreground">May 1, 2025</p>
                    <p className="text-sm mt-1">Registration for fall semester courses is now open. Please consult with your advisor.</p>
                  </li>
                  <li>
                    <h3 className="font-medium">Guest Lecture: AI Ethics</h3>
                    <p className="text-sm text-muted-foreground">April 28, 2025</p>
                    <p className="text-sm mt-1">Dr. Jane Smith will present on ethical considerations in AI development.</p>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/announcements">View All Announcements</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/courses" className="text-primary hover:underline">Course Catalog</Link>
                  </li>
                  <li>
                    <Link to="/faculty" className="text-primary hover:underline">Faculty Office Hours</Link>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline">Academic Calendar</a>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline">Student Resources</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
