import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpaceXService } from '../spacex.service';
import { Mission } from '../mission.model';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.spaceXService.getAllMissions().subscribe((data) => {
      this.missions = data;
    }, (error) => {
      console.error('Error fetching missions:', error);
    });
  }
}
