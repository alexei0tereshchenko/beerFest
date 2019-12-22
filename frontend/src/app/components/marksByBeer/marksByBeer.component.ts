import {Component, OnInit} from "@angular/core";
import {Mark} from "../../models/mark.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {MarksService} from "../../services/marks.service";
import {switchMap} from "rxjs/operators";
import {Beer} from "../../models/beer.model";
import {BeerService} from "../../services/beer.service";

@Component({
  selector: 'marks-beer',
  templateUrl: 'marksByBeer.component.html'
})
export class MarksByBeerComponent implements OnInit{
  beer: Beer;

  marks: Mark[];

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService,
    private marksService: MarksService
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
      });
    });
  }
}
