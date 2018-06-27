$( document ).ready(function() {

//working on voting bar
  function getPercentageChange(p, n){
    var decreaseValue = p - n;

    return (decreaseValue / p) * 100;
  };

  function storeIP(data, url, callback) {
    $.ajax({
      type: 'post',
      url: url,
      data: data,

      success: function (data) {
          console.log('Success');
          console.log(data);
          callback(data);
      },
      error: function () {
          console.log('We are sorry but our servers are having an issue right now');
      },
    })
  };

  function storeClicks(clicks, url) {
    $.ajax({
      type: 'post',
      url: url,
      data: {badClicks: clicks},

      success: function (data) {
          console.log('Success');
          console.log(data);
      },
      error: function () {
          console.log('We are sorry but our servers are having an issue right now');
      },
    })
  }

    $('.row.secondary').hide();


//collecting negative feelings
    $('.col.left').on('click', function() {
      $( ".row.secondary" ).slideDown( "slow", function() {

      $.get( "http://ip-api.com/json", function( data, res ) {
        var ip = data.query;

        storeIP(ip,'/ipsN', function(result) {
          $('#negative').html(result).css('color', 'rgba(224, 86, 88)');
        });

      });

      });

      $('#question').text('Thank you for your answer!');
    })

//collecting positive feelings
    $('.col.right').on('click', function() {
      $( ".row.secondary" ).slideDown( "slow", function() {

      $.get( "http://ip-api.com/json", function( data ) {
        var ip = data.query;
        storeIP(ip, '/ipsP', function(result) {
          $('#positive').html(result).css('color', 'rgba(61, 247, 102)')
        });
      });

      });
      $('#question').text('Thank you for your answer!');
    })
});