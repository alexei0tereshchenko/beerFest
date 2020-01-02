import {Component, OnInit} from "@angular/core";
import {TastersService} from "../../services/tasters.service";
import {Taster} from "../../models/taster.model";
import {GroupsService} from "../../services/groups.service";
import {Group} from "../../models/group.model";
import {MatDatepickerInputEvent} from "@angular/material";

@Component({
  selector: "tasters",
  templateUrl: "tasters.component.html"
})
export class TastersComponent implements OnInit {

  tasters: Taster[];

  groups: Group[];

  newTasterFirstName: string;
  newTasterSecondName: string;
  newTasterFullName: string;
  newTasterPhoneNumber: string;
  newGroupId: number;
  newBirthDate: Date;

  constructor(private tasterService: TastersService,
              private groupService: GroupsService
  ) {
  }

  ngOnInit(): void {
    this.tasterService.getTasters().subscribe(tasters => {
      this.tasters = tasters;
      this.groupService.getGroups().subscribe(groups => this.groups = groups);
    });
  }

  addEventDatPick(event: MatDatepickerInputEvent<Date>) {
    this.newBirthDate = event.value;
  }

  onSubmitAddTaster(): void {
    if (this.newGroupId != null) {
      this.groupService.getGroup(this.newGroupId).subscribe(group => {
        this.tasterService.addTaster(new Taster(this.newTasterFirstName,
          this.newTasterSecondName,
          this.newTasterFullName, this.newTasterPhoneNumber, this.newBirthDate, group)).subscribe(() =>
          window.location.reload()
        )
      })
    } else {
      this.tasterService.addTaster(new Taster(this.newTasterFirstName,
        this.newTasterSecondName,
        this.newTasterFullName, this.newTasterPhoneNumber, this.newBirthDate, null)).subscribe(() =>
        window.location.reload());
    }
  }

  deleteTaster(taster: Taster) {
    this.tasterService.deleteTaster(taster).subscribe(() => window.location.reload());
  }
}
