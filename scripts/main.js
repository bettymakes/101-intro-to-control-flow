$(document).ready(function(){
  /* STEP 1
    Create your variables here
    
    We'll need to create the following variables and assign them to the values
    as instructed below:

    - Monday Temperature      = 5
    - Tuesay Temperature      = 100
    - Wednesday Temperature   = 20
    - Thursday Temperature    = -4
    - Friday Temperature      = -30

    Ex. var monTemp = 5;
  */
  var mondayTemp = 5;




  /* STEP 2
    Make an array and call it tempList.
    Your tempList array should hold all the temperatures you've created in
    the previous step (above).
  
    Ex. var myArray = [monTemp, tuesTemp, wedTemp, thursTemp, friTemp];
  */




  /* Scroll to line 40 for STEP 3 */

  for(var item = 0; item < tempList.length; item++) {

    var currentItem = $('<li><span>' + tempList[item] + '&deg;C</span></li>');
    currentItem.appendTo('#temp-list');


    /* STEP 3
      IF/Else - Let's create some conditions!

      Create some if conditions:
      1) IF tempList[item] is GREATER THAN 10 ...
      2) ELSE IF tempList[item] is GREATER THAN -5 ...
      3) ELSE

      * Note, we're only creating the conditions.
        The blocks for each condition should be empty at the moment
    */







    /* STEP 4
      Once your conditions have been created, copy the following code
      in their corresponding blocks

      1) IF tempList[item] is GREATER THAN 10 ...
⌄⌄⌄⌄  Copy this code in the if block that you just created in the lines above: ⌄⌄⌄⌄
                        
                        currentItem.addClass('hot');



      2) ELSE IF tempList[item] is GREATER THAN -5 ...
⌄⌄⌄⌄  Copy this code in the else if block that you just created in the lines above: ⌄⌄⌄⌄
          
                        currentItem.addClass('normal');



      3) ELSE
⌄⌄⌄⌄  Copy this code in the else block that you just created in the lines above: ⌄⌄⌄⌄
          
                        currentItem.addClass('cold'); 

    */

  }
});