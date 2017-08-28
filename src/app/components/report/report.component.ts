import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { ReportService } from '../../services/encounters';
import { NewReport, Report } from '../../models/report';
import { Alien } from '../../models/alien';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [
    AlienService,
    ReportService,
  ]
})

export class ReportComponent implements OnInit {
  
  aliens: Alien[];
  public date;

  registerForm = new FormGroup({ 
    atype: new FormControl('', [Validators.required]),
    action: new FormControl('', [Validators.required])
  });

  constructor(
    private alienService: AlienService,
    private reportService: ReportService,
    private router: Router
  ) { }

  async ngOnInit() {
    const aliens = await this.alienService.getAliens();
    console.log(aliens);
    this.aliens = aliens;
    this.date = new Date().toISOString().slice(0,10);
  }

  async registerReport() {
    const newReport: NewReport = {
      atype: this.registerForm.get('atype').value,
      date: this.date,
      action: this.registerForm.get('action').value,
      colonist_id: '5'

    }
    await this.reportService.postEncounters(newReport);
    this.router.navigate(['encounters']);
  }
}

