var pens;
pens = [{name:"red"}, {name:"blue"}, {name:"green"}, {name:"orange"}];
console.log("Before: ",pens);
console.log("Array length: ",pens.length);
//reverse the array
//pens.reverse();
//console.log("After reverse: ",pens);
//remove the first value of array
//pens.shift();
//console.log("After first value removed: ",pens);
//remove last element of array
//pens.pop();
//console.log("After last value removed: ",pens);
//adds value in front
//pens.unshift("black","Grey");
//console.log("Added new values in front: ",pens);
//add value in end
//pens.push("Magenta","Purple");
//console.log("Added new values in front: ",pens);

//normal for loop
console.log("normal for loop")
for(let i=0;i<pens.length;i++){
	console.log(pens[i]);
}
//for each loop style 1
console.log("for each loop")
pens.forEach(function(item,index,array){
	console.log(index,item);
});

//for each loop style 1
pens.forEach(output);
function output(item,index,array){
	console.log(index,item);
}

//map method to inject new variable length in object
let newArray = pens.map((item)=>{
	item.rate=item.name.length
	return item;
});
console.log(newArray);

//method to filter
let filetred = newArray.filter(function(item){
return item.rate>4?item:null;
})
console.log(filetred);