let foods = {
    foodItems:[
        {
            name:"Biriyani",
            categoryID:"1234"
        },
        {
            name:"Paneer",
            categoryID:"3456"
        }
    ],
    categories:[
        {
            name:"Veg",
            id:"3456"
        },
        {
            name:"Non-Veg",
            id:"1234"
        }
    ]
};

var foodItemsA=foods["foodItems"]
var categoriesA=foods["categories"]

var x=[];
for(var i in foodItemsA){
    for(var j in categoriesA){
        if(foodItemsA[i]["categoryID"]==categoriesA[j]["id"]){
            x.push({
                name:foodItemsA[i]["name"],
                categoryId:foodItemsA[i]["categoryID"],
                categoryName:categoriesA[j]["name"]
            })
        }
    }
}

console.log(x)
