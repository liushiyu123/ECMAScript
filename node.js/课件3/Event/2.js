const EventEmmiter = require('events');
class Person extends EventEmmiter{
  constructor(name) {
      super();
      this.name=name;
      this.age=0;
      this.GetGroup();
  }

  GetGroup(){
       setInterval(()=>{
         this.age++;
         this.emit('GetGroup');
       },1000);
  }
}


const p1 = new Person('童斌');
p1.addListener('GetGroup',function(){
    console.log(this.name+'长大了一岁,今年'+this.age);
    
})