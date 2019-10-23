import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  public get count$(): Observable<number> {
    return this.app.count;
  }
  constructor(private app: AppService) {}

  ngOnInit() {}
}
