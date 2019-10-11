//On function callbacks, the class variables is not accessible, in the following example will 
export class AppComponent {
  private canvas;

    load_json(){
            var self = this;
            
            this.canvas.loadFromJSON(json, function(){
                self.canvas.renderAll();
                //otherwise the this.canvas is null, here
                alert ("My lord, loaded!");
            });
    }
