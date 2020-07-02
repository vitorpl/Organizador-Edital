import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  public txt = "teste";
  listaIntens = [];
  separador: string = ";";

  processar() {
    console.log(this.txt);

    this.listaItens = this.txt.split(this.separador);
  }
}
