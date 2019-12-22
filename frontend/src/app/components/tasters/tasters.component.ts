import {Component, OnInit} from "@angular/core";
import {TastersService} from "../../services/tasters.service";
import {Taster} from "../../models/taster.model";

@Component({
  selector: "tasters",
  templateUrl: "tasters.component.html"
})
export class TastersComponent implements OnInit {

  tasters: Taster[];

  constructor(private tasterService: TastersService) {
  }

  ngOnInit(): void {
    this.tasterService.getTasters().subscribe(tasters =>
      this.tasters = tasters);
  }

}
