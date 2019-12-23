import {Component, OnInit} from "@angular/core";
import {Mark} from "../../models/mark.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {MarksService} from "../../services/marks.service";
import {switchMap} from "rxjs/operators";
import {Beer} from "../../models/beer.model";
import {BeerService} from "../../services/beer.service";
import {TastersService} from "../../services/tasters.service";
import {Taster} from "../../models/taster.model";

@Component({
  selector: 'marks-beer',
  templateUrl: 'marksByBeer.component.html'
})
export class MarksByBeerComponent implements OnInit {
  beer: Beer;

  marks: Mark[];

  newTasterId: number;

  tasters: Taster[];

  newComment: string;

  newMark: number;

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService,
    private marksService: MarksService,
    private tasterService: TastersService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.beerService.getBeer(+params.get('id'))
      )).subscribe(beer => {
      this.beer = beer;
      this.marksService.getMarksByBeer(beer.idBeer).subscribe((marks) => {
        this.marks = marks;
        this.tasterService.getTasters().subscribe(tasters => this.tasters = tasters);
      });
    });
  }

  onSubmitAddMark(): void {
    this.tasterService.getTaster(this.newTasterId).subscribe(taster => {
      this.marksService.addMark(new Mark(this.newMark, this.newComment, taster, this.beer)).subscribe(() =>
        window.location.reload())
    });
  }
}
