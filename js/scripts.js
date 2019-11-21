var add = function(number1, number2) {
  return number1 + number2;
};


$(document).ready(function() {
  $("form#celebs").submit(function() {
    event.preventDefault();
    var name1 = ($("#input1").val());
    var name2 = ($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    console.log("1st name: " + name1);  // for debugging
    console.log("2nd name: " + name2);  // for debugging
    console.log("operator: " + operator);  // for debugging
    var result = add(name1, name2);
    $("#output").text(result);
  });
});
