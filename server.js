const express = require ("express")
const {faker} = require ("@faker-js/faker")

const app = express()



class User {
    constructor(){
        this.password=faker.internet.password()
        this.phoneNumber=faker.phone.number("(###) ###-####")
        this.lastName=faker.name.lastName()
        this.firstName=faker.name.firstName()
        this._id=faker.datatype.uuid()//learn how to make it with the first Name
        this.email=faker.internet.email(this.firstName,this.lastName,"gmail.com")
        

    }
}
class Company{
    constructor(){
        this._id=faker.datatype.uuid()
        this.name=faker.company.companyName()
        this.address= {
            street: faker.address.street(),
            state: faker.address.state(),
            city: faker.address.city(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}


app.get("/api/user/new", (req, res) => {

    res.json( new User() );

});
    

app.get("/api/company/new", (req, res) => {

    res.json( new Company() );
    
});
        
app.get("/api/user/company", (req, res) => {
    const user= new User() 
    const company= new Company()

    res.json({user, company});

    
    
});

app.listen(8000, () => console.log(`Listening on port:8000`) );
