import {DataSource} from "@angular/cdk/collections";
import {JeuRequest} from "../../models/jeu-request";
import {BehaviorSubject, Observable} from "rxjs";
import {JeuService} from "../jeu.service";

export class DataSourceAsynchro extends DataSource<JeuRequest> {
  private jeuSubject = new BehaviorSubject<JeuRequest[]>([]);

  constructor(private jeuService: JeuService) {
    super();
//    this.setData();
  }

  connect() {
    return this.jeuSubject.asObservable();
  }

  disconnect() {
    this.jeuSubject.complete();
  }

  setData() {
    this.jeuService.get5Jeux()
      .subscribe(jeux => this.jeuSubject.next(jeux));
  }
}
