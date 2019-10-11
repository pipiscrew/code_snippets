//http://www.codeproject.com/Articles/699468/Monitoring-a-folder-for-changes-in-files-and-folde

// Require the file system
  fs = require("fs");
// Watch the sim directory
fs.watch("c:\\sim", { persistent: true }, function (event, fileName) {
  console.log("Event: " + event);
  console.log(fileName + "\n");
});