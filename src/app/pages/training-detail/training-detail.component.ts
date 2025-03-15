import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface TrainingDetail {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  duration: string;
  schedule: string;
  pricing: string;
  curriculum: { title: string; topics: string[]; isOpen: boolean }[];
}

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.scss'],
})
export class TrainingDetailComponent implements OnInit {
  trainingType!: string;
  trainingData!: TrainingDetail;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.trainingType = params['type'];
      this.trainingData = this.getTrainingData(this.trainingType);
    });
  }

  private getTrainingData(type: string): TrainingDetail {
    // date, duration, capacity, addition services, other

    // This would typically come from a service
    const data: { [key: string]: TrainingDetail } = {
      'talent-management': {
        title: 'Talent Management & Leadership',
        description:
          'Comprehensive program for developing leadership skills and managing talent effectively',
        features: [
          'Personalized leadership assessment and development plan',
          'Real-world case studies and practical applications',
          'One-on-one coaching sessions',
          'Team management workshops',
          'Performance management techniques',
        ],
        benefits: [
          'Develop strong leadership capabilities',
          'Improve team performance and motivation',
          'Master talent acquisition and retention strategies',
          'Enhance decision-making skills',
          'Build effective communication methods',
        ],
        duration: '12 weeks',
        schedule: 'In-person',
        pricing: 'Contact for pricing',
        curriculum: [
          {
            title: 'Leadership Fundamentals',
            topics: [
              'Leadership styles and their applications',
              'Emotional intelligence in leadership',
              'Decision-making frameworks',
              'Strategic thinking and planning',
            ],
            isOpen: false,
          },
          {
            title: 'Talent Management Strategies',
            topics: [
              'Recruitment and selection',
              'Performance management',
              'Employee development',
              'Succession planning',
            ],
            isOpen: false,
          },
          {
            title: 'Team Development',
            topics: [
              'Team dynamics and culture',
              'Conflict resolution',
              'Motivation techniques',
              'Remote team management',
            ],
            isOpen: false,
          },
        ],
      },
      // Add other training types here...
    };

    return data[type] || this.getDefaultTrainingData();
  }

  private getDefaultTrainingData(): TrainingDetail {
    return {
      title: 'Training Program',
      description: 'Program details not found',
      features: [],
      benefits: [],
      duration: 'N/A',
      schedule: 'N/A',
      pricing: 'N/A',
      curriculum: [],
    };
  }
}
