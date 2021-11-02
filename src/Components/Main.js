import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Loginpage from './Loginpage'
import Registerpage from './Registerpage';
import Welcomepage from "./Welcomepage";
import AllUsers from "./AllUsers";
import Editprofile from "./Editprofile";
import PageNotFound from "./PageNotFound";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            usersList: [
                {
                    id: 0,
                    userEmail: "praveen@gmail.com",
                    password: "Prav*123",
                    firstName: "Praveen",
                    lastName: "V",
                    profileLink: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDQ0NDxAPDw8ODQ4ODQ8PDw8PDw0PFREWFhURFRUYHSggGBolGxYVITUhJSkrLjovFx8zODMtNygtLisBCgoKDg0OGRAQGi0dHR0vMCswLy0tNy0tLSsrLy0rLS0tLS8tLSstLS8rNy0tLS0tLS0tKzctKy0rLSstLS0rLf/AABEIAIsBaQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EAD8QAAICAQIEAwYCBwYGAwAAAAABAgMRBBIFITFRBhNBFGFxgZGhBzIVIiNSscHRZXKTo7LhYmRzg5KUFlNU/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAlEQEBAAIDAAIBAwUAAAAAAAAAAQIRAxIhEzFBImGxUXGR0eH/2gAMAwEAAhEDEQA/APh2592G592IAHufdhufdiAB7n3Ybn3YgAe592G592IAHufd/UNz7v6iACW5939Q3PuyIwHufd/UMvuxAA8vv9wy/eIAHl+8W592PcwST9wC3Puw3PuxyWCID3Pux7n3ZEaYDy+7DL7sQAPL7sMvu/qIaQBl939R5fd/UeCW0CGX3f1Hz7v6k9gbQIc+7+o+fd/UltHtAjz7saz3ZJIeAI4fdhh92TwGAIc+7+oufdk8BgCHP3/UWX3f1LMCwBDL7v6iy+7+pLaLAEcvu/qG5939SWBAG5+8Wfe/qwwGAKwAAAAAAAAAAAAAaQ0iagwKwLNjFsYEAJbQwBECeAwBACeCSigK0sk1S8ZLY47FqmBicWI3cmQlUmBkA0eQg9nAWlo3v4Fs4bZ7eSWM/l3eg6IOLyjRJbpqedsksdE0BCmpSytyl06R24I2V4eDVCxp/rNSWPSOHn6me57nkCvYLYWpDwBTsDaXbROIFO0eCzAsAQ2hgngWAINCwTwLAEMBglgWAIhgkLAEcCwTwICDQsFgsAV+Uv3vsRnHHR5BrmyIFlFO/wBcF/sL7/Yz0zw8myOpAr9hl3QnoZe77l/tQ/agM3sU/d9yMtJNLOM/A1+1B7WBhjZywLe/TkXKjzJy28uW4ctDNdmBCN79Vn5E1qF6orlp5r0fyINNdfuBpVsH6MknW/UyDis9E/lkDZ5cX6oPZ0Y0NSfcDW9KRemKo3SXr9y6Grl64YRH2dh5LL1rF+79yS1Uez+wGdVMnGplntcOzF7ZDswBVjUCL1kezIS1fZDQvUB7TLG+TZrrT9QFtE4F2AwFUbQSLVEHECvA9pLaNICpxIuBowJxAzOIsGhxIuIFOBYLXEi4gV4FgsaFgCtoWCbQYArwLBPAmgI4ESEBnl1fxIsYmA49SZCHUmAAAAAsjEBs4W/15f3f5nU5HI0MsSl8P5nQjYVm1f5aIyoTCMycZhNs09DF+n05FE+HL0bX3OopEki6Ts4NujlH0z8ChrB6byyMtMn1SY0d3mxpncnw2D9MfAonwrs/qNHeOXkXM6EuHSX+wlomNHeMCiSUDpexLPLOPTPX7F0NEhpO7kqplkdM2diOkSLY0Iuk7ubRpcGpVmxVLH8sdReUTSd2TYJxNbqF5Q0vdkUA2mp1CdYXszbSO00usi4BeyjaGC1wE4kXsqwJxLMCwNLtU4kXEuaItEVS4kXEuaINBVLRFotaINAQZFk2RYERDYAZSLJEWA4dSwrh1LAgAAKEAABKuWGaoWGMtgys1sjMuhYYos9l4c4BHbG6+O6UlmMH+WK9G16sMatvjiUQnL8sZS/uxlL+BZzTw00+zWH9D2M+P6OmXluzLjyarhKSj7spY+h09I9Jr62lsuS5STTjOHv5818RtLhv6rwEZFsTT4h4S9HeoZ3Qmt1TbW7Hqmu67mGueWkubfRLm2dJHmyysuq0KJJQI5a5NOL7NNP7lkZF053kLyhOhGiqLk9sU5N9Ek238kWyqlF7ZRlGXaUWn9GXqz8rD7OHkm/yX6xfN4XJ832JSokllxkl3cWkOp8znqr3ElWdKfDrlHzHTaodd7rmoY77sYOn4Qvrp1tdludmyxPbCVj5xeP1Ypt8yaanJuyXx5tVj8s9p451NWpt03s8bJNQtTi6La5PnFrCcVu9eh539Gaj/wCi/wDwbP6CRcstWyeuZ5YvLOr+itR/+e//AAbf6GWypxbjJOMk8OLTTT7NP1Gk+SsbrIOs7P6E1Thv9nv29c+VPp8MGerh181uhTbNZazGuclldVyXUmm5nXLdZB1nUq4ddNNwptmk3FuNcpJSXVcl1I0cLvtz5dVk1FtSai8Jrqvj7iabmVcpwEqZPmot/BNm2/SzhPy5wlGfJbZRak89OR63w3pJw07jZCUGrZYUk4vGFz5mb464W5XTwMoe4g4nW4hpranYpQlGErZbXKLSfN4w/gjnNDTXZncSLLpIrkRqZKmQZORXKRK6SoSIMcmVykRQyDE5EWwBhkjuFuAqIsYmAJktxAYEtwbiI8FEkySIJE0GaU/QIyC30+ZBMH4dHhkFO+mD6Ssin71nme18Sa+VWlxF4ds1XldVHDb+yx8zwOkv8uyuz9ycZfR8z3HE6FqtNtg03ysqeeTeP5psJryvJwkdDhnELdPYraZbZpOOeqaa6Nev+xypqUJOM04yXVSWGdzwzwWersWd0KFnfYl17Rjnq8m9uFxu/E9Bp7tbqq6t0p23Tw5ybk0urk/clln1mjT6DhOnUpbYLknZJbrrp/Lm/guSPIeF+F/o/itKsshON1N0aWv1Z7sJ84+nLJo/FWE5S0lyy6Ywsg2ukLG0+fbKx/4k3u6WY9Mblr17LhvE+H8UjOlbbcLMq7YbZpfvLP8AFHhuNeFJ08Sp0VTbhqmnROXNxi3+spd3HDfwwYvw0osnxSidaeypWSukvyxg65RSb97a5f0PpfGdXXHi3BoSxvftmOfOO6rbH6vKLvrfGLjOXCXLy7ba6NDwfSqUsVxWIubW66+fy5yfXl0RDhPiPh3ErYUpPzYSVlMboKMnKD3ZhJN81jpnpk87+L9Fjr0d0U3VXK2NmMtQlLbtb7Zw1n+p47wVTbdxLRxqzmGortm1nEK4SUpyb9FhNfNL1LMZZtnk5ssOSYYzx9X8e14p0L/tLS/xZ3OOy09NEtRqYqVdElaljc/M/LHC9XmXI4v4izS02jf9paX+Mif4pzxwqz/r0f6jM91HXPK4/JlPxP8Aa7w14q0/ELJ0QhZXOMHNRs2tThnDw0/TK5e840+DQ0niLSeVFRr1Nd1iiuSjPZNSS7Lo/meb/C25fpar303/AOg934imlxzgnvjrF/lm7OuVk/o8/HyXl4sc8vuZT+YweOtVHS63hWqmpSjVLU7lDG5pwiuWWu5XD8QtNOUYQ0+rlKclGMVGpuUn0SW8r/F5OUdAopylK22MVFZcm1HCS9WbPBfhaGhr9r1O32hwbe5rbpYY5rPTdjq/l8ZrHrLWrly/Pljh5PLf8R6KclGvzLP2SUN897X7NYy8tcuR47wrwunUajV8UxvjZqbFpd8fyxXWzD6Nvl8veee8deMfbJvT0SxpoS5v11Ek/wAz/wCHsvn8PVfhvqYz4ZGCfOu26E16rMty+0iXG447bx5seXl6z2T+WLivjjTU3SpjXZbsk4znFxUcrqo5/N9js8O1NOopjfTjZY3J8sPd0akv3uR8k4zw+3S32U2xkmpNRk08WRzylF+uT6H4D0dlGh/apxdtsrYwksOMWkllemcZ+YyxknicHNyZ52ZT/jP4Pj+y1cf3dfqI/dHL4r4sr0+olp4U7oVS2zkpKP63WW2OO/f1On4RliXE49uJaj7nzvxI8a7Vr/mLPu8iSW1rLPLHjx09z4k09d2k9oSy6ox1FUuj2rEmvnHJVwnikdXCc4wcNk9rTaeeSeeROqW7hEffoMf5RwPAdy8vUx7Trl8mmv5GdeOvb9U/dh8VcVjY5afY4uq7825NPCa6fM81JnV8T6eyOqvm4S2SmpKe17HlL16dTiSman05ZW9rs5MqlIU7CidhGsTlIpnIU5lM5ma64pSmVykQlIg2R0SciLZFsWQJZDJAAEAAADyIAHkMiAB7mPcyIANyyAgAkmdng3HJUJVzTlX6Y/ND4d0cUYR7+jjmkmk5Tr/7kcNfVF9/i/T1RxW/Nkl+rGKah85dMfA+dZJKRSuxqOM32ahapzatjJODXSvD5KK7H0Tg3jvTW1qGpxVNrE1KLnVP3p4eF7mfJlMnGwrl7H2z/wCc8O0tbVLhJ9VVp69qk/e8KKPn3FPEV+q1ftspbbIyg6tvSlQeYpfB8/i2eYjYa9FqYwtrnOCshGac622lOOeayjU8c+TeXj7VwH8RdLdTGOs/YWNOM90JSota67Wk8enJ9/U3UeMOGU21afRRrnZqL6q2tPVsgt00nOUsJPCbfLPQ87XfoOI6WFSjB1ww4Qhiuyh+5L8v8C7gnAtFo7PaI75TintndOLVeVhtYSSePUz466z8+v7u9+JWujHR6aUnhR4hp5Pq+Udzf2OX498aaHV8Psoouc7HbVJR8q6HJSy+copHjvH3iiOrnXRTLdTS3JzXSy18uXuS9fezyatN4z6efmzu7J9V7HwJxqrScQqvvnsrjC2MpKMpYbg0uUU31PXcb8a6G3ifCtTC5urTe0edLyrVs3wSjyccv5HyHzQ841dW7efC5YY9Z9b2+xeIPG+hu1XDLa7XKOm1M7Ln5Vq2wcMZw48/kdef4j8Max5s2u3kW/0Pg3nB55OsdZz8ktup6+5S/ELhfpKX/rz/AKHkdR43VXFLtVpsz090ao2VyThv2xSyu0lz5+8+d+eLzxMZEy5eTLX40+0L8QtBKClKVkZYzslVJyT+Kyvuc+r8RtNJ2eZC2CUkqsRUpSjjm5c8J59D5N55F3k6x0+bkfQ+D+L9NRZrpSVrjqNVK6vbBN7X358meT43r43aq+6GVGyxyjuWHjC6nGd5B3DyM3tlNV7rTeLaIaKGmlG1yjR5TajHbnbjv0PNcJ4xPS2eZFKScds4t4Ul/U48rit3E8df1XX7PW8a8TV6jTyqUJxlJxfPa4rEk+uTzErTM7St2Eb1b7WiVhTKwplYQcybbmKyUytyIOQsmW5DchZEAUAIAGAgAAAAAAAAAAAAAAAAABoBABIBBkCWRpkMjyXaaWKRJTKshkbZ6tMLmmmm010aeGvmXT1k5rE5zku0pSkvuYcj3F2zcG1WklaYVMkpl2z8bb5oeaY/MDzC7T4mzzReaZPMF5g2fE1+aLzTJ5gt5Oy/E1u0i7TLuFuJtr42p2kXaZtwZJtrpF7sIOwryLI2uk3MTkQAm10eQyIAoABAMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8iAB5DIgAe4e4iAEtwbiIAS3BuIgA9wZEADyGRAA8hkQAPICABiAAAAAAAAAAAAAAAAAAA/9k=",
                    description: "Full Stack Engg",
                    todo_list: ["Read book", "take a nap"]
                },
            ]
        }
        this.addUser = this.addUser.bind(this)
        this.addTodoUser = this.addTodoUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
    }
    
    

    addUser(newUser) {
        this.setState({ usersList: this.state.usersList.concat([newUser]) })
    }

    addTodoUser(todo) {
        const id = todo.id;
        const todoData = todo.data;
        console.log(todo, "inside main")
        let newtodosetuser = this.state.usersList.filter(user => user.id === id)
        console.log(newtodosetuser, "new todo to add")
        newtodosetuser[0].todo_list.concat([...newtodosetuser[0].todo_list, todoData])
        console.log(newtodosetuser, "new todo to added after")
        this.deleteUser(id);
        this.addUser(newtodosetuser)
    }

    deleteUser(userId) {
        this.setState((state) => ({
            usersList: state.usersList.filter(user => user.id !== Number(userId))
        }))
    }


    render() {
        return (
            <Switch>
                <Route path="/" exact render={({ history }) => (
                    <div>
                        <Loginpage usersList={this.state.usersList} history={history} />
                        {console.log(this.state.usersList)}
                    </div>
                )} />
                <Route path="/Loginpage" render={({ history }) => (
                    <Loginpage usersList={this.state.usersList} history={history} />
                )} />
                <Route path="/Registerpage" exact render={({ history }) => (
                    <Registerpage history={history} onAddUser={(newUser) => {
                        this.addUser(newUser)
                        history.push("/")
                    }} />
                )} />
                <Route path="/Welcomepage" render={({ history, location }) => (
                    <Welcomepage usersList={this.state.usersList} history={history} location={location} />
                )} />
                <Route path="/AllUsers" render={({ history, location }) => (
                    <AllUsers usersList={this.state.usersList} addTodoUser={this.addTodoUser} history={history} location={location} />
                )} />
                <Route path="/Editprofile" render={({ history }) => (
                    <Editprofile usersList={this.state.usersList} history={history} onAddUser={(newUser => this.addUser(newUser))} onDeleteUserForUpdate={(userId) => this.deleteUser(userId)} onDeleteUser={(userId) => {
                        this.deleteUser(userId)
                        history.push("/")
                    }} />
                )} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        )
    }
}

export default Main