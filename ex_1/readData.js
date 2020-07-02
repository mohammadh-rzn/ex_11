let fs = require("fs");
//reading file
fs.readFile("./names.txt" , "utf8" , function(err , data){
    if(err){
        console.log(err);
        return 1;
    }
    else{
        let names = data;
        //reading file
        fs.readFile("./numbers.txt","utf8" ,function(err , data){
            if(err){
                log(err);
                return 1;
            }
            else{
                //getting data clean
                let numbers = data;
                let numbersArr = numbers.split("-");
                let namesArr = names.split("-");
                numbers = numbersArr.join(" ");
                names = namesArr.join(" ");
                numbersArr = numbers.split("\r\n");
                namesArr = names.split("\r\n");
                for(let i = 0; i < numbersArr.length; i++){
                    numbersArr[i] = numbersArr[i].split(" ");
                }
                for(let i = 0; i < namesArr.length; i++){
                    namesArr[i] = namesArr[i].split(" ");
                }
                //constructor
                function human(id , name){
                    this.name = name;
                    this.id = id;
                    this.numbers = [];
                }
                let humans = [];
                for(let i = 0; i < namesArr.length ; i++){
                    let a = new human(namesArr[i][0] , namesArr[i][1]);
                    humans.push(a);
                }
                for(let i = 0; i < numbersArr.length ; i++){
                    for(let j = 0 ; j < humans.length; j++){
                        if(numbersArr[i][0] === humans[j].id){
                            humans[j].numbers.push(numbersArr[i][1]);
                        }
                    }
                }
                let s = "";
                //preparing the response
                for(let i = 0; i < humans.length; i++){
                    if(humans[i].numbers.length === 0){
                        s += humans[i].name + " has'nt any number \n";
                    }
                    if(humans[i].numbers.length === 1){
                        s += humans[i].name + "'s phone number is " + humans[i].numbers[0] + "\n";
                    }
                    if(humans[i].numbers.length >= 2){
                        s += humans[i].name + "'s phone numbers are ";
                        for(let j = 0 ; j < humans[i].numbers.length ; j++){
                            s += humans[i].numbers[j]  + " ";
                        }
                        s+= "\n";
                    }
                }
                fs.writeFile("resault.txt" , s , function(err){
                    if(err){
                        console.log(err);
                        return 1;
                    }
                })
            }
        })
    }
})