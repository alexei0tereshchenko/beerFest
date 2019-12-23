import {Component, OnInit} from "@angular/core";
import {Taster} from "../../models/taster.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {TastersService} from "../../services/tasters.service";
import {switchMap} from "rxjs/operators";
import {Mark} from "../../models/mark.model";
import {MarksService} from "../../services/marks.service";
import {Beer} from "../../models/beer.model";
import {BeerService} from "../../services/beer.service";

@Component({
  selector: 'marks-taster',
  templateUrl: 'marksByTaster.component.html'
})
export class MarksByTasterComponent implements OnInit {
  taster: Taster;

  marks: Mark[];

  newBeerId: number;

  beers: Beer[];

  newComment: string;

  newMark: number;

  constructor(
    private route: ActivatedRoute,
    private tasterService: TastersService,
    private marksService: MarksService,
    private beerService: BeerService
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
        this.beerService.getBeers().subscribe(beers => this.beers = beers);
      });
    });
  }

  onSubmitAddMark(): void {
    this.beerService.getBeer(this.newBeerId).subscribe(beer => {
      this.marksService.addMark(new Mark(this.newMark, this.newComment, this.taster, beer)).subscribe(() =>
        window.location.reload())
    });
  }
}
