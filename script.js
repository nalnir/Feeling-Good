$( document ).ready(function() {

  var positive = 0;
  var negative = 0;

  function getPercentageChange(p, n){
    var decreaseValue = p - n;

    return (decreaseValue / p) * 100;
  }

    $('.row.secondary').hide();

    $('.col.left').on('click', function() {
      negative++;
      $( ".row.secondary" ).slideDown( "slow", function() {

      $.get( "http://ip-api.com/json", function( data ) {
        console.log(data);
      });

      });
      $('#negative').html(negative).css('color', 'rgba(224, 86, 88)')
      console.log(getPercentageChange(negative, positive));
    })

    $('.col.right').on('click', function() {
      positive++;
      $( ".row.secondary" ).slideDown( "slow", function() {

      $.get( "http://ip-api.com/json", function( data ) {
        console.log(data);
      });

      });
      $('#positive').html(positive).css('color', 'rgba(61, 247, 102)')
      console.log(getPercentageChange(positive, negative));
    })
});