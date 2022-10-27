import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { TitleModel } from "./title.model"

@Injectable(
    {providedIn: 'root'}
)
export class FeaturedService {
    private baseURL: string = "https://insomniac-games-app-default-rtdb.firebaseio.com/"
    private endPoint: string = "titles.json"


    constructor(private http: HttpClient) {}

    getTitles() {
        return this.http.get<TitleModel []>(this.baseURL + this.endPoint)
    }

    getTitle(id: number) {
        return this.http.get<TitleModel>(this.baseURL + 'titles' + '/' + id + ".json")
    }
}