class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data from website");
    }
};

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        console.log("Editing data to website");
    }
}

let userOne = new User("abc","abc@example.com");
let userTwo = new User("def","def@example.com");
let adminOne = new Admin("ghi","ghi@example.com");
let adminTwo = new Admin("jkl","jkl@example.com");

userOne.viewData();
userTwo.viewData();

adminOne.viewData();
adminOne.editData();
adminTwo.viewData();
adminTwo.editData();