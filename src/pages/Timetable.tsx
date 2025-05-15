
import { useState } from "react";
import { Calendar as CalendarIcon, Download } from "lucide-react";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const timetableEvents = [
  {
    id: 1,
    course: "CSC101: Introduction to Programming",
    day: "Monday",
    startTime: "10:00 AM",
    endTime: "11:30 AM",
    location: "Lecture Theatre,LT7"
  },
  {
    id: 2,
    course: "CSC205: Data Structures",
    day: "Monday",
    startTime: "2:00 PM",
    endTime: "3:30 PM",
    location: "Lecture Theatre,LT7"
  },
  {
    id: 3,
    course: "CSC315: Algorithm Design",
    day: "Tuesday",
    startTime: "9:00 AM",
    endTime: "10:30 AM",
    location: "Lecture Theatre, LT7"
  },
  {
    id: 4,
    course: "CSC420: Artificial Intelligence",
    day: "Wednesday",
    startTime: "1:00 PM",
    endTime: "2:30 PM",
    location: "Great Hall ,Hall C"
  },
  {
    id: 5,
    course: "CSC450: Blockchain Development",
    day: "Thursday",
    startTime: "11:00 AM",
    endTime: "12:30 PM",
    location: "Lecture Theatre,LT7"
  }
];

const Timetable = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const { toast } = useToast();

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      const day = format(selectedDate, "EEEE");
      setSelectedDay(day);
    }
  };

  const filteredEvents = timetableEvents.filter(event => event.day === selectedDay);

  const handleDownload = () => {
    // In a real app, this would generate a downloadable calendar file
    // For now, we'll just show a toast notification
    toast({
      title: "Timetable Downloaded",
      description: "Your timetable has been downloaded successfully.",
    });
  };

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="page-container">
      <h1 className="page-title">Interactive Timetable</h1>
      
      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Select Date</CardTitle>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              <div className="mt-4 space-y-2">
                {days.map((day) => (
                  <Button 
                    key={day} 
                    variant={day === selectedDay ? "default" : "outline"} 
                    className="w-full justify-start"
                    onClick={() => setSelectedDay(day)}
                  >
                    {day}
                  </Button>
                ))}
              </div>

              <Button 
                className="w-full mt-6" 
                onClick={handleDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Timetable
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Classes for {selectedDay}</CardTitle>
            </CardHeader>
            <CardContent>
              {filteredEvents.length > 0 ? (
                <div className="space-y-4">
                  {filteredEvents.map((event) => (
                    <Card key={event.id}>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-lg">{event.course}</h3>
                        <div className="text-sm text-muted-foreground mt-1">
                          <p>Time: {event.startTime} - {event.endTime}</p>
                          <p>Location: {event.location}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-center py-8 text-muted-foreground">No classes scheduled for {selectedDay}.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
