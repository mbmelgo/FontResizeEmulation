import {Letters} from '/lib/collections';



export default function(){
  if(Letters.find().count() < 1){

    let dimensionX = 5;
    let dimensionY = 7;
    //=======A======//
    let name = "A";
    let fillUpIndexes = ["0,1","0,2","0,3",
                         "1,0","1,4",
                         "2,0","2,4",
                         "3,0","3,1","3,2","3,3","3,4",
                         "4,0","4,4",
                         "5,0","5,4",
                         "6,0","6,4"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======B======//
    name = "B";
    fillUpIndexes = ["0,0","0,1","0,2","0,3",
                     "1,0","1,4",
                     "2,0","2,4",
                     "3,0","3,1","3,2","3,3",
                     "4,0","4,4",
                     "5,0","5,4",
                     "6,0","6,1","6,2","6,3"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======C======//
    name = "C";
    fillUpIndexes = ["0,1","0,2","0,3",
                     "1,0","1,4",
                     "2,0",
                     "3,0",
                     "4,0",
                     "5,0","5,4",
                     "6,1","6,2","6,3"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======D======//
    name = "D";
    fillUpIndexes = ["0,0","0,1","0,2","0,3",
                     "1,0","1,4",
                     "2,0","2,4",
                     "3,0","3,4",
                     "4,0","4,4",
                     "5,0","5,4",
                     "6,0","6,1","6,2","6,3"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======E======//
    name = "E";
    fillUpIndexes = ["0,0","0,1","0,2","0,3","0,4",
                     "1,0",
                     "2,0",
                     "3,0","3,1","3,2","3,3",
                     "4,0",
                     "5,0",
                     "6,0","6,1","6,2","6,3","6,4"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======F======//
    name = "F";
    fillUpIndexes = ["0,0","0,1","0,2","0,3","0,4",
                     "1,0",
                     "2,0",
                     "3,0","3,1","3,2","3,3",
                     "4,0",
                     "5,0",
                     "6,0"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======G======//
    name = "G";
    fillUpIndexes = ["0,1","0,2","0,3",
                     "1,0",
                     "2,0",
                     "3,0",
                     "4,0","4,3","4,4",
                     "5,0","5,4",
                     "6,1","6,2","6,3"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======H======//
    name = "H";
    fillUpIndexes = ["0,0","0,4",
                     "1,0","1,4",
                     "2,0","2,4",
                     "3,0","3,1","3,2","3,3","3,4",
                     "4,0","4,4",
                     "5,0","5,4",
                     "6,0","6,4"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======I======//
    name = "I";
    fillUpIndexes = ["0,1","0,2","0,3",
                     "1,2",
                     "2,2",
                     "3,2",
                     "4,2",
                     "5,2",
                     "6,1","6,2","6,3"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======J======//
    name = "J";
    fillUpIndexes = ["0,2","0,3","0,4",
                     "1,3",
                     "2,3",
                     "3,3",
                     "4,3",
                     "5,0","5,3",
                     "6,1","6,2"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======K======//
    name = "K";
    fillUpIndexes = ["0,0","0,4",
                     "1,0","1,3",
                     "2,0","2,2",
                     "3,0","3,1",
                     "4,0","4,2",
                     "5,0","5,3",
                     "6,0","6,4"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======L======//
    name = "L";
    fillUpIndexes = ["0,0",
                     "1,0",
                     "2,0",
                     "3,0",
                     "4,0",
                     "5,0",
                     "6,0","6,1","6,2","6,3","6,4"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======M======//
    name = "M";
    fillUpIndexes = ["0,0","0,4",
                     "1,0","1,1","1,3","1,4",
                     "2,0","2,2","2,4",
                     "3,0","3,2","3,4",
                     "4,0","4,4",
                     "5,0","5,4",
                     "6,0","6,4"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======N======//
    name = "N";
    fillUpIndexes = ["0,0","0,4",
                     "1,0","1,4",
                     "2,0","2,1","2,4",
                     "3,0","3,2","3,4",
                     "4,0","4,3","4,4",
                     "5,0","5,4",
                     "6,0","6,4"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======O======//
    name = "O";
    fillUpIndexes = ["0,1","0,2","0,3",
                     "1,0","1,4",
                     "2,0","2,4",
                     "3,0","3,4",
                     "4,0","4,4",
                     "5,0","5,4",
                     "6,1","6,2","6,3"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======P======//
    name = "P";
    fillUpIndexes = ["0,0","0,1","0,2","0,3",
                     "1,0","1,4",
                     "2,0","2,4",
                     "3,0","3,1","3,2","3,3",
                     "4,0",
                     "5,0",
                     "6,0"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======Q======//
    name = "Q";
    fillUpIndexes = ["0,1","0,2","0,3",
                     "1,0","1,4",
                     "2,0","2,4",
                     "3,0","3,4",
                     "4,0","4,2","4,4",
                     "5,0","5,3",
                     "6,1","6,2","6,4"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======R======//
    name = "R";
    fillUpIndexes = ["0,0","0,1","0,2","0,3",
                     "1,0","1,4",
                     "2,0","2,4",
                     "3,0","3,1","3,2","3,3",
                     "4,0","4,2",
                     "5,0","5,3",
                     "6,0","6,4"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======S======//
    name = "S";
    fillUpIndexes = ["0,1","0,2","0,3","0,4",
                     "1,0",
                     "2,0",
                     "3,1","3,2","3,3",
                     "4,4",
                     "5,4",
                     "6,0","6,1","6,2","6,3"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======T======//
    name = "T";
    fillUpIndexes = ["0,0","0,1","0,2","0,3","0,4",
                     "1,2",
                     "2,2",
                     "3,2",
                     "4,2",
                     "5,2",
                     "6,2"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======U======//
    name = "U";
    fillUpIndexes = ["0,0","0,4",
                     "1,0","1,4",
                     "2,0","2,4",
                     "3,0","3,4",
                     "4,0","4,4",
                     "5,0","5,4",
                     "6,1","6,2","6,3"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======V======//
    name = "V";
    fillUpIndexes = ["0,0","0,4",
                     "1,0","1,4",
                     "2,0","2,4",
                     "3,0","3,4",
                     "4,1","4,3",
                     "5,1","5,3",
                     "6,2"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======W======//
    name = "W";
    fillUpIndexes = ["0,0","0,4",
                     "1,0","1,4",
                     "2,0","2,4",
                     "3,0","3,2","3,4",
                     "4,0","4,2","4,4",
                     "5,0","5,2","5,4",
                     "6,1","6,3"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======X======//
    name = "X";
    fillUpIndexes = ["0,0","0,4",
                     "1,0","1,4",
                     "2,1","2,3",
                     "3,2",
                     "4,1","4,3",
                     "5,0","5,4",
                     "6,0","6,4"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======Y======//
    name = "Y";
    fillUpIndexes = ["0,0","0,4",
                     "1,0","1,4",
                     "2,1","2,3",
                     "3,2",
                     "4,2",
                     "5,2",
                     "6,2"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});
    //=======Z======//
    name = "Z";
    fillUpIndexes = ["0,0","0,1","0,2","0,3","0,4",
                     "1,4",
                     "2,3",
                     "3,2",
                     "4,1",
                     "5,0",
                     "6,0","6,1","6,2","6,3","6,4"];
    Letters.insert({name, fillUpIndexes, dimensionX, dimensionY});

  }

}
