import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline', // https://ionic.io/ionicons
      name: 'Alert!!!!',
      redirectTo: '/alert'
    },
    {
      icon: 'basketball-outline', // https://ionic.io/ionicons
      name: 'Action Sheet!!!!',
      redirectTo: '/action-sheet'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
