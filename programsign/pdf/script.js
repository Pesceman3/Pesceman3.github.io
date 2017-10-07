/* Countdown seconds */
var count = 10;
/* Website to redirect */
var url = "https://docs.google.com/gview?url=https://docs.google.com/spreadsheets/d/1-wo71FH84F8pdS47QvKRNzFq7iibEyU-zqIPhGDfQTs/export?format=pdf&attachment=FALSE&size=Letter&fzr=FALSE&portrait=TRUE&fitw=TRUE&gridlines=FALSE&printtitle=FALSE&sheetnames=FALSE&pagenum=FALSE&embedded=false";
/* Call function at specific intervals */
var countdown = setInterval(function() { 
    /* Display Countdown with txt */
    $('#displayTimer').text("Loading... Please Wait: " + count--  + " seconds");
    /* If count is smaller than 0 ...*/
    if (count < 0) {
        $('#displayTimer').text("Redirecting now....");
        /* Clear timer set with setInterval */
        clearInterval(countdown);
        /* Redirect */
        $(location).attr("href", url);
   } 
    // milliseconds
}, 1000);