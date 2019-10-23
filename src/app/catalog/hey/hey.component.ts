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
    this.subscription.add(sub);
  }

  ngOnInit() {}

  ngOnDestroy() {
    console.log("ngOnDestroy => hey");
    this.subscription.unsubscribe();
  }
}
