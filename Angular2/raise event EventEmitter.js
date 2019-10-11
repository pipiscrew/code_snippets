@Output() fetching = new EventEmitter();
.
.
//somewhere in a method raise the event

this.fetching.next();


---

on the parent class

    this.postdata.fetching.subscribe(e =>  {
      this.divStyle = 0.3; 
    })