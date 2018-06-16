$( document ).ready(function() {

  var positive = 0;
  var negative = 0;

    $('.row.secondary').hide();

    $('.col.left').on('click', function() {
      negative++;
      $( ".row.secondary" ).slideToggle( "slow", function() {

      });
      console.log(negative);
    })

    $('.col.right').on('click', function() {
      positive++;
      $( ".row.secondary" ).slideToggle( "slow", function() {

      });
      console.log(positive);
    })
});