import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job';
import { ColonistService } from '../../services/colonist';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  providers: [
    ColonistService
  ]
})

export class RegisterComponent implements OnInit {

  constructor(
    private jobService: JobService,
    private colonistService: ColonistService
  ) { }

  async ngOnInit() {

    const data = {
      name: 'Hello there',
      age: '50',
      job_id: '2'
    };

    const newColonist = await this.colonistService.registerColonist(data);
    console.log(newColonist);
  }

}
