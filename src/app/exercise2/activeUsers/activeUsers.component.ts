import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";

@Component({
    selector: '[app-activeUsers]',
    templateUrl: './activeUsers.component.html',
    styleUrls: ['./activeUsers.component.css']
})

export class ActiveUsersComponent implements OnInit {
    activeUsersArray: { userName: string, userStatus: string }[] = [];

    constructor(private userSevice: UsersService) {
    }

    ngOnInit(): void {
        this.activeUsersArray = this.userSevice.activeUsers;
    }

    setToInactive(id: number) {
        this.userSevice.setToInactive(id);
    }

    getEmptyArray(): boolean {
        return this.activeUsersArray.length === 0;
    }
}