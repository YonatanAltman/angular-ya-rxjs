import { Component, OnInit } from "@angular/core";
import {AppService} from "../app.service";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"]
})
export class CatalogComponent implements OnInit {
  show = true;
  constructor(private app: AppService) {}
  add() {
    this.app.add();
  }
  ngOnInit() {}
}
