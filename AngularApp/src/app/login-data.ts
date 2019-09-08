export class LoginData {
    userName:String;
    password:String;
    getUserName(){
        return this.userName;
    }
    getPassword(){
        return this.password;
    }
    setUserName(userName:String){
        this.userName = userName;
    }
    setPassword(password:String){
        this.password = password;
    }   
}
