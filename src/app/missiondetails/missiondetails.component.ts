import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpaceXService } from '../spacex.service';
import { Mission } from '../mission.model';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MissionDetailsComponent implements OnInit {
  mission: Mission | null = null;

  constructor(
    private route: ActivatedRoute,
    private spaceXService: SpaceXService
  ) {}

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('id');
    if (flightNumber) {
      this.spaceXService.getMissionById(flightNumber).subscribe((data) => {
        this.mission = data;
      }, (error) => {
        console.error('Mission not found', error);
      });
    }
  }
}
