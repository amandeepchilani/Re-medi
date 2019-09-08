export class PatientAppointmentReport {
    firstName:String;
    lastName:String;
    age:String;
    gender:String;
    bloodGroup:String;
    symptoms:String;
    diabetics:boolean;
    bloodPressure:String;
    smoke:boolean;
    specialization:String;

    public setFirstName (firstName:String){
        this.firstName = firstName;
    }
    public setLastName (lastName:String){
        this.lastName = lastName;
    }
    public setAge (age:String){
        this.age = age;
    }
    public setGender (gender:String){
        this.gender = gender;
    }
    public setBloodGroup (bloodGroup:String){
        this.bloodGroup = bloodGroup;
    }
    public setSymtoms (symptoms:String){
        this.symptoms = symptoms;
    }
    public setSpecialization (specialization:String){
        this.specialization = specialization;
    }
    public setBloodPressure (bloodPressure:String){
        this.bloodPressure = bloodPressure;
    }
    public setDiabetics (diabetics:boolean){
        this.diabetics = diabetics;
    }
    public setSmoke (smoke:boolean){
        this.smoke = smoke;
    }

    public getFirstName (){
        return this.firstName;
    }
    public getLastName (){
        return this.lastName;
    }
    public getAge (){
        return this.age;
    }
    public getGender (){
        return this.gender;
    }
    public getBloodGroup (){
        return this.bloodGroup;
    }
    public getSymtoms (){
        return this.symptoms;
    }
    public getSpecialization (){
        return  this.specialization;
    }
    public getDiabetics (){
        return this.diabetics
    }
    public getSmoke (){
        return this.smoke;
    }
}