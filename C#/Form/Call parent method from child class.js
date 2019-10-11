//http://stackoverflow.com/a/32232145/1320686

//In child add:

public Action UpdateProgress;  // In place of event handler declaration
                               // declare an Action delegate
.
.
.
private LoadData() {
    this.UpdateProgress();    // call to Action delegate - MyMethod in
                              // parent
}


//In parent add:

// The 3 lines in the parent becomes:
ChildClass child = new ChildClass();
child.UpdateProgress = this.MyMethod;  // assigns MyMethod to child delegate