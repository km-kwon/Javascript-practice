var human = function(name, old, height){
    this.name = name;
    this.old = old;
    this.height = height;
}

var kyoungmin = new human("kyoungmin", 23, 177);

var kyoungmin2 = {
    name:"kyoungmin",
    old:23,
    height:177
};

console.log(kyoungmin["name"]);

