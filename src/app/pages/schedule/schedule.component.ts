import { Component } from '@angular/core';

interface TrainingSession {
  id: number;
  title: string;
  trainer: string;
  date: string;
  time: string;
  duration: string;
  capacity: number;
  enrolled: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  location: string;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  searchTerm: string = '';
  selectedDateRange: string = 'all';
  selectedLevel: string = 'all';

  sessions: TrainingSession[] = [
    {
      id: 1,
      title: 'Introduction to Project Management',
      trainer: 'Sarah Johnson',
      date: 'March 1, 2025',
      time: '9:00 AM',
      duration: '3 hours',
      capacity: 20,
      enrolled: 15,
      level: 'Beginner',
      location: 'Room 101, Main Building',
    },
    {
      id: 2,
      title: 'Advanced Data Analysis',
      trainer: 'Michael Chen',
      date: 'March 3, 2025',
      time: '2:00 PM',
      duration: '4 hours',
      capacity: 15,
      enrolled: 12,
      level: 'Advanced',
      location: 'Computer Lab 3',
    },
    {
      id: 3,
      title: 'Effective Communication Skills',
      trainer: 'Emily Brown',
      date: 'March 5, 2025',
      time: '10:00 AM',
      duration: '2 hours',
      capacity: 25,
      enrolled: 20,
      level: 'Intermediate',
      location: 'Conference Room A',
    },
    // Add more sessions as needed
  ];

  get filteredSessions(): TrainingSession[] {
    return this.sessions.filter((session) => {
      const matchesSearch =
        !this.searchTerm ||
        session.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        session.trainer.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        session.location.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesLevel =
        this.selectedLevel === 'all' || session.level === this.selectedLevel;

      // Add date range filtering logic here
      // This is a simplified version - you might want to add more sophisticated date filtering

      return matchesSearch && matchesLevel;
    });
  }

  ngOnInit(): void {
    // Initialize component
  }

  registerForSession(session: TrainingSession): void {
    // Implement registration logic here
    alert(`Registration requested for: ${session.title}`);
  }
}
