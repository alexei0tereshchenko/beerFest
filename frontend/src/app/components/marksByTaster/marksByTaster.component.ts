import {Component, OnInit} from "@angular/core";
import {Taster} from "../../models/taster.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {TastersService} from "../../services/tasters.service";
import {switchMap} from "rxjs/operators";
import {Mark} from "../../models/mark.model";
import {MarksService} from "../../services/marks.service";

@Component({
  selector: 'marks-taster',
  templateUrl: 'marksByTaster.component.html'
})
export class MarksByTasterComponent implements OnInit{
  taster: Taster;

  marks: Mark[];

  constructor(
    private route: ActivatedRoute,
    private tasterService: TastersService,
    private marksService: MarksService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.tasterService.getTaster(+params.get('id'))
      )).subscribe(taster => {
      this.taster = taster;
      this.marksService.getMarksByTaster(taster.idTasters).subscribe((marks) => {
        this.marks = marks;
      });
    });
  }
}
