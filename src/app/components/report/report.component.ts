import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { ReportService } from '../../services/encounters';
import { JobService } from '../../services/job';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styles: [],
  providers: [
    AlienService,
    ReportService,
    JobService
  ]
})

export class ReportComponent implements OnInit {

  constructor(
    private alienService: AlienService,
    private reportService: ReportService,
    private jobService: JobService 
  ) { }

  async ngOnInit() {
    const aliens = await this.alienService.getAliens();
    console.log(aliens);
  }

}

