class Graph {
  constructor(){
    this.verticies = [];
    
  }

  greet(greeting){
    console.log(greeting + " " +  this.name + "!" );
  }
}

const test = new Person("James");
test.greet("Hello");
console.log(test.val);
