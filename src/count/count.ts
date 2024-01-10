//https://js2brain.com/blog/building-reactive-apps-with-rxjs-and-lit

import { tap, timer } from "rxjs";

export const count$ = timer(0, 1000).pipe(
  tap({
    next: (x) => console.log(x),
    subscribe: () => console.log("subscipe"),
    unsubscribe: () => console.log("unsubscribe"),
  })
);
