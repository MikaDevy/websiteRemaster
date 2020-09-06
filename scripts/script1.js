function main() {
  closedFolder();
}



function closedFolder() {
  var a;
  a = document.getElementById("folder");
  a.innerHTML = "&#xf114;";
}


function openfolder() {
  var a;
  a = document.getElementsById("folder");
  a.innerHTML = "&#xf115;";
}
