import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { map, delay, Observable } from 'rxjs';
import { LoadingService } from './loading/loading.service';
import { location, heroclass, NPC} from './data/data.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular  ' + VERSION.major;

  loaders: {name: string, title:string, delay: number}[] = [
      {name: 'locations', title: 'Loading locations', delay: 5000}, 
      {name: 'classes', title: 'Loading classes', delay: 3000},
      {name: 'npcs', title: 'Loading NPC', delay: 2000}
    ]

  loc: location[] = null;
  hCl: heroclass[] = null;
  npc: NPC[] = null;

  constructor(private loading: LoadingService, private http: HttpClient) {}

  ngOnInit() {}

  load() {
    this.loadData(0)
      .subscribe((res) => this.loc = res);
    this.loadData(1)
      .subscribe((res) => this.hCl = res);
    this.loadData(2)
      .subscribe((res) => this.npc = res);
  }

  loadData(index: number): Observable<any[]> {
    const load$ = this.http.get<any>(
      'https://eldenring.fanapis.com/api/' + this.loaders[index].name
    )
    .pipe(delay(this.loaders[index].delay));

    return this.loading
      .showLoaderUntilComplete(load$, this.loaders[index].name, this.loaders[index].title)
      .pipe(map(res => res.data))
  }
}
