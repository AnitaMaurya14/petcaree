import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Pet {
  id: number;
  name: string;
  breed: string;
  age: number;
  vaccinationStatus: string;
  imageUrl: string;
}

interface HistoryItem {
  date: string;
  type: string;
  notes: string;
  status: 'Completed' | 'Upcoming';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userName = 'Nova';
  greeting = '';

  pets: Pet[] = [
    {
      id: 1,
      name: 'Luna',
      breed: 'Golden Retriever',
      age: 3,
      vaccinationStatus: 'Up to Date',
      imageUrl: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Shadow',
      breed: 'Persian Cat',
      age: 2,
      vaccinationStatus: 'Due Soon',
      imageUrl: 'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Max',
      breed: 'Labrador',
      age: 5,
      vaccinationStatus: 'Up to Date',
      imageUrl: 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  quickAccessTiles = [
    { icon: '🏥', title: 'Book Vet', route: '/vets', description: 'Schedule an appointment' },
    { icon: '🛍️', title: 'Shop Now', route: '/shop', description: 'Browse pet supplies' },
    { icon: '💉', title: 'View Vaccines', route: '/vaccines', description: 'Track vaccinations' }
  ];

  history: HistoryItem[] = [
    { date: '2025-10-15', type: 'Vet Visit', notes: 'Annual checkup for Luna', status: 'Completed' },
    { date: '2025-10-18', type: 'Vaccination', notes: 'Rabies vaccine for Max', status: 'Upcoming' },
    { date: '2025-09-28', type: 'Vet Visit', notes: 'Dental cleaning for Shadow', status: 'Completed' },
    { date: '2025-11-05', type: 'Vaccination', notes: 'Distemper vaccine for Luna', status: 'Upcoming' },
    { date: '2025-09-10', type: 'Vet Visit', notes: 'Skin allergy treatment for Max', status: 'Completed' }
  ];

  nextAppointment = 'Next Vet Visit: 18 Oct, 4 PM';

  constructor(private router: Router) {
    this.setGreeting();
  }

  setGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = 'Good Morning';
    } else if (hour < 18) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Evening';
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  openChatbot() {
    console.log('Chatbot feature coming soon!');
  }
}
