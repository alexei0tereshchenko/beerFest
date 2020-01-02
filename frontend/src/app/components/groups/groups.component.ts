import {Component, OnInit} from "@angular/core";
import {Group} from "../../models/group.model";
import {GroupsService} from "../../services/groups.service";

@Component({
  selector: 'groups',
  templateUrl: 'groups.component.html'
})
export class GroupsComponent implements OnInit {

  groups: Group[];

  newGroupName: string;

  constructor(private groupService: GroupsService) {
  }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups =>
      this.groups = groups);
  }

  onSubmitAddGroup(): void {
    this.groupService.addGroup(new Group(this.newGroupName)).subscribe(() => {
      this.newGroupName = null;
      window.location.reload();
    })
  }

  deleteGroup(group: Group) {
    this.groupService.deleteGroup(group).subscribe(() => window.location.reload());
  }
}
