import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SpaceXService } from '../spacex.service';
import { Mission } from '../mission.model';
import { FormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router';  

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]  
})
export class MissionFilterComponent implements OnInit {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];
  selectedYear: string = '';

  constructor(private spaceXService: SpaceXService, private router: Router) {}

  ngOnInit(): void {
    this.spaceXService.getAllMissions().subscribe((data) => {
      this.missions = data;
      this.filteredMissions = data;
    });
  }

  filterByYear(): void {
    if (this.selectedYear.trim() === '') {
      this.filteredMissions = this.missions;
    } else {
      this.filteredMissions = this.missions.filter(mission => mission.launch_year === this.selectedYear);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
