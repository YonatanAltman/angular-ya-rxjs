import { Injectable } from "@angular/core";
import { ReplaySubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AppService {
  private arr = [1, 2, 3, 4, 5];
  private numbers$ = new ReplaySubject<number[]>(1);
  private names$ = new ReplaySubject<string[]>(1);

  public get numbers(): Observable<number[]> {
    return this.numbers$.asObservable();
  }
  public get names(): Observable<string[]> {
    return this.names$.asObservable();
  }
  public get count$(): Observable<number> {
    return this.numbers$.pipe(map(list => list.length));
  }
  constructor() {
    this.numbers$.next(this.arr);
    this.names$.next(["a", "s", "d", "d", "ff"]);
  }
  public add() {
    this.arr.push(5);
    this.numbers$.next(this.arr);
  }
}
