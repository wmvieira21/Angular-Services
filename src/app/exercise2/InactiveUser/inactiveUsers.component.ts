import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";

@Component({
    selector: '[app-inactiveUsers]',
    templateUrl: './inactiveUsers.component.html',
    styleUrls: ['./inactiveUsers.component.css']
})

export class InactiveUsersComponent implements OnInit {

    inactiveUsersArray: { userName: string, userStatus: string }[] = [];

    constructor(private usersService: UsersService) { }

    ngOnInit(): void {
        this.inactiveUsersArray = this.usersService.inactiveUsers;
    }

    setToActive(id: number) {
        this.usersService.setToActive(id);
    }

}