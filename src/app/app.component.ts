import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  lists = [];
  toDoForm = new FormGroup({
    sampleInput: new FormControl("")
  });

  onSubmit() {
    // console.log(this.toDoForm.get('sampleInput').value);
    this.lists.push(this.toDoForm.get("sampleInput").value);
    this.toDoForm.get("sampleInput").setValue("");
    console.log(this.lists);
  }

  onDelete(item) {
    // const index = this.lists.indexOf(item);
    // if (index !== -1) {
    //   this.lists.splice(index, 1);
    // }
    this.lists = this.lists.filter(x => x !== item);
    console.log(this.lists);
  }
}
