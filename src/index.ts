
// import { Observable } from "rxjs/Observable";
// import "rxjs/add/operator/share";
// var observable = Observable.create((observer: any) => {
//   try {
//     observer.next("Hi Mohsen :)");
//     observer.next("How are you? :)");
//     setInterval(() => {
//       observer.next("ممنون عزیزم");
//     }, 2000);
//   } catch (error) {
//     observer.error(error);
//   }
// }).share();
// var observer = observable.subscribe(
//   (x: any) => addItem(x),
//   (err: any) => addItem(err),
//   () => addItem("Completed!")
// );
// setTimeout(() => {
//   var observer2 = observable.subscribe((x: any) =>
//     addItem("Subscriber 2: " + x)
//   );
// }, 1000);

// import { fromEvent } from "rxjs/Observable/fromEvent"
// let observable = fromEvent(document, "click");
// let subscription = observable.subscribe((x: any) => {
//   addItem(x)
// })

// function addItem(val: any) {
//   var node = document.createElement("li");
//   var textnode = document.createTextNode(val);
//   node.appendChild(textnode);
//   document.getElementById("output").appendChild(node);
// }

import { Observable } from "rxjs";

var observable = Observable.create((obsever: any) => {
  obsever.next('Hi Mohsen');
  obsever.next('How are you bro!');
  obsever.complete();
});
observable.subscribe(
  (showValue: any) => listItem(showValue),
  (err: any) => console.log(err),
  () => listItem('its finished !')
);

function listItem(val: any) {
  var node = document.createElement('li');
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}