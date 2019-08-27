import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'city-agenda-card',
  templateUrl: './city-agenda-card.component.html',
  styleUrls: ['./city-agenda-card.component.scss'],
})
export class CityAgendaCardComponent implements OnInit {

  @Input() dataCAItem: any;
  url: any = environment.apiUrl;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  goToCityAgendaItem(value: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({ 'id': value.id })
      },
    };
    this.router.navigate(['city-agenda-item'], navigationExtras)
  }

}
