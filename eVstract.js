var htmlcode = document.body.innerHTML; // this points to the html for the focused webpage

var newPage = window.open();
newPage.document.open();
newPage.document.write("hello"); // test to open new page and write text to it