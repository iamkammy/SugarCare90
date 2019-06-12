import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { THROW_IF_NOT_FOUND } from "@angular/core/src/di/injector";
declare var $: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "sugarcare90";
  constructor() {}

  submitform(form: NgForm) { 
    console.log(form.value);
    form.reset();
    
  }

  i=0
  openModal(form: NgForm) {
    let x= $("#exampleModalCenter")
    .modal({
      keyboard: false,
      toggle: true
    })
    .on("hidden.bs.modal", (e)=> {
      console.log(this.i++)
        x.modal('dispose');
        this.submitform(form);
      })
  }
}
