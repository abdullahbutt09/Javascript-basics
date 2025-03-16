//* FOR EACH LOOP

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

const Objarr = [
    {
        Name: 'Abdullah',
        class: "4th",
        job: "developer",
        workingin: "Google"
    },
    {
        Name: 'Numan',
        class: "4th",
        job: "developer",
        workingin: "youtube"
    },
    {
        Name: 'hameed',
        class: "4th",
        job: "developer",
        workingin: "netflix"
    },
];

const [{Name : GetName , class : MyClass , job: MyJob , workingin: Mywork}] = Objarr;

Objarr.forEach((obj) => {
    console.log(obj.Name , obj.class , obj.job , obj.workingin);  
})

