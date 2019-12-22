import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Taster} from "../../models/taster.model";
import {Group} from "../../models/group.model";
import {GroupsService} from "../../services/groups.service";
import {TastersService} from "../../services/tasters.service";

@Component({
  selector: "tasters-by-group",
  templateUrl: "tastersByGroup.component.html"
})
export class TastersByGroupComponent implements OnInit{
  group: Group;

  tasters: Taster[];

  constructor(
    private route: ActivatedRoute,
    private tasterService: TastersService,
    private groupService: GroupsService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.groupService.getGroup(+params.get('id'))
      )).subscribe(group => {
      this.group = group;
      this.tasterService.getTastersByGroup(group.idGroup).subscribe((tasters) => {
        this.tasters = tasters;
      });
    });
  }

}
