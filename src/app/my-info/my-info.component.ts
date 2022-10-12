import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Component({
  selector: "app-my-info",
  templateUrl: "./my-info.component.html",
  styleUrls: ["./my-info.component.css"],
})
export class MyInfoComponent implements OnInit {
  my_info: UserInfo | undefined;
  constructor(private http: HttpClient) {}
  getUserInfo() {
    return this.http.get<UserInfo>(
      "https://insomniac-games-app-default-rtdb.firebaseio.com/my-info.json"
    );
  }

  showUserInfo() {
    this.getUserInfo().subscribe((data: UserInfo) => {
      console.log(data)
      this.my_info = data
    });
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.showUserInfo();
  }
}
