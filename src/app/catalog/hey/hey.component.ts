import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppService } from "../../app.service";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-hey",
  templateUrl: "./hey.component.html",
  styleUrls: ["./hey.component.css"]
})
export class HeyComponent implements OnInit, OnDestroy {
  public count: number;
  public count1: number;
  private subscription = new Subscription();
  constructor(private app: AppService) {
    const sub = this.app.count$
      .pipe(
        map(num => {
          console.log("works" + num);
          this.count = num as number;
        })
      )
      .subscribe();
    const sub1 = this.app.count$
      .pipe(
        map(num => {
          console.log("works" + num);
          this.count1 = (num as number) * 13;
        })
      )
      .subscribe();
    this.subscription.add(sub);
    this.subscription.add(sub1);
  }

  ngOnInit() {}

  ngOnDestroy() {
    console.log("ngOnDestroy => hey");
    this.subscription.unsubscribe();
  }
}
