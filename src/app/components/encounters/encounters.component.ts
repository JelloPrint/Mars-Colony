import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/encounters';
import { Report } from '../../models/report';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [ReportService]
})
export class EncountersComponent implements OnInit {

  encounters: Report[];

  constructor(private reportService: ReportService) { }

  async ngOnInit() {
    const encounters = await this.reportService.getEncounters();
    console.log(encounters);
    this.encounters = encounters;
  }
}

