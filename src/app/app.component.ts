import { TableService } from './table.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'Reina Trycha Dani';
  alamat = 'jl.Rebab no 219 TunggulWulung';

  tanggal = Date.now();

  hby: any[];
  constructor(private tableServ:TableService){}

  ngOnInit() {
    this.hby = this.tableServ.getReina();
  }
}
