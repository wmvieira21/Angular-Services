export class UsersService {

    activeUsers: { userName: string, userStatus: string }[] = [{
        userName: 'server1', userStatus: 'Active'
    }, {
        userName: 'server2', userStatus: 'Active'
    }, {
        userName: 'server3', userStatus: 'Active'
    }];



    inactiveUsers: { userName: string, userStatus: string }[] = [{
        userName: 'server001', userStatus: 'Inactive'
    },
    { userName: 'server002', userStatus: 'Inactive' },

    { userName: 'server003', userStatus: 'Inactive' }];

    setToInactive(id: number) {
        this.activeUsers[id].userStatus = 'Inactive'
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }

    setToActive(id: number) {
        this.inactiveUsers[id].userStatus = 'Active'
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }
}