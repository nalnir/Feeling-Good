$( document ).ready(function() {

  var positive = 0;
  var negative = 0;

    $('.row.secondary').hide();

    $('.col.left').on('click', function() {
      negative++;
      $( ".row.secondary" ).slideDown( "slow", function() {

      });
      $('#negative').html(negative).css('color', 'rgba(224, 86, 88)')
      console.log(negative);
    })

    $('.col.right').on('click', function() {
      positive++;
      $( ".row.secondary" ).slideDown( "slow", function() {

      });
      $('#positive').html(positive).css('color', 'rgba(61, 247, 102)')
      console.log(positive);
    })
});