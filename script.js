$( document ).ready(function() {

  var positive = 0;
  var negative = 0;

//working on voting bar
  function getPercentageChange(p, n){
    var decreaseValue = p - n;

    return (decreaseValue / p) * 100;
  };

  function storeIP(data) {
    $.ajax({
      type: 'post',
      url: '/',
      data: data,
      xhrFields: {
          withCredentials: false
      },
      headers: {

      },
      success: function (data) {
          console.log('Success');
          console.log(data);
      },
      error: function () {
          console.log('We are sorry but our servers are having an issue right now');
      },
    })
  };

    $('.row.secondary').hide();



//collecting negative feelings
    $('.col.left').on('click', function() {
      $( ".row.secondary" ).slideDown( "slow", function() {

      $.get( "http://ip-api.com/json", function( data ) {
        storeIP(data.query);
        negative++;
      });

      });
      $('#negative').html(negative).css('color', 'rgba(224, 86, 88)')
      $('#question').text('Do you want to feel better?');
    })

//collecting positive feelings
    $('.col.right').on('click', function() {
      positive++;
      $( ".row.secondary" ).slideDown( "slow", function() {

      $.get( "http://ip-api.com/json", function( data ) {
        storeIP(data.query);
        positive++;
      });

      });
      $('#positive').html(positive).css('color', 'rgba(61, 247, 102)')
      $('#question').text('Awesome!');
    })
});