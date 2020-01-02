import {Component, OnInit} from "@angular/core";
import {Taster} from "../../models/taster.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {TastersService} from "../../services/tasters.service";
import {switchMap} from "rxjs/operators";
import {Mark} from "../../models/mark.model";
import {MarksService} from "../../services/marks.service";
import {Beer} from "../../models/beer.model";
import {BeerService} from "../../services/beer.service";
import {GroupsService} from "../../services/groups.service";
import {Group} from "../../models/group.model";
import {MatDatepickerInputEvent} from "@angular/material";
import {isNullOrUndefined} from "util";

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

  groups: Group[];

  selectedIdGroup = 0;

  constructor(
    private route: ActivatedRoute,
    private tasterService: TastersService,
    private marksService: MarksService,
    private beerService: BeerService,
    private groupService: GroupsService
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
        this.beerService.getBeers().subscribe(beers => {
          this.beers = beers;
          this.groupService.getGroups().subscribe(groups => {
            this.groups = groups;
            groups.push(new Group('none'));
            if (isNullOrUndefined(taster.groupByIdGroup)) {
              this.taster.groupByIdGroup = new Group("");
              this.taster.groupByIdGroup.idGroup = 0;
            }
            else this.selectedIdGroup = this.taster.groupByIdGroup.idGroup;
          })
        });
      });
    });
  }

  onSubmitAddMark(): void {
    this.beerService.getBeer(this.newBeerId).subscribe(beer => {
      this.marksService.addMark(new Mark(this.newMark, this.newComment, this.taster, beer)).subscribe(() =>
        window.location.reload())
    });
  }

  addEventDatPick(event: MatDatepickerInputEvent<Date>) {
    this.taster.birthDate = event.value;
  }

  onSubmitEditTaster() {
    if (this.selectedIdGroup > 0) {
      this.groupService.getGroup(this.selectedIdGroup).subscribe(group => {
        this.taster.groupByIdGroup = group;
        this.tasterService.editTaster(this.taster).subscribe();
      })
    } else {
      this.taster.groupByIdGroup = null;
      this.tasterService.editTaster(this.taster).subscribe();
    }
  }

}
