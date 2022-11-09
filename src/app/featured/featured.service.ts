import { Injectable } from "@angular/core";
import { TitleModel } from "./title.model";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from "@angular/fire/compat/database";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class FeaturedService {
  titlesRef: AngularFireList<any>;
  titleRef: AngularFireObject<any>;
  private baseURL: string =
    "https://insomniac-games-app-default-rtdb.firebaseio.com/";
  private endPoint: string = "titles.json";

  constructor(private db: AngularFireDatabase, private http: HttpClient) {}

  getTitles() {
    return this.http.get<TitleModel []>(this.baseURL + this.endPoint)
  }
  getTitlesDB() {
    this.titlesRef = this.db.list("titles");
    return this.titlesRef;
  }

  getTitle(id: number) {
    this.titleRef = this.db.object("title/" + id);
    return this.titleRef;
  }

  addTitle(game: TitleModel) {
    console.log(game)
    this.db.list<TitleModel>("titles").push(game)
    //this.titlesRef.push({
    //    img: game.img,
    //    message: game.message,
    //    name: game.name
    //}).catch((error) => {
    //    console.log(error);
    //  });
  }
}
