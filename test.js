// this is a test for the jquery
$(document).ready(()=>{
    const $allData = $(document).html();
    var newTab = window.open("");
    newTab.document.write($allData);

})