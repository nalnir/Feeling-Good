$( document ).ready(function() {

  var positive = 0;
  var negative = 0;

    $('.col.left').on('click', function() {
      postive++;
      console.log(postive);
    })

    $('.col.right').on('click', function() {
      negative++;
      console.log(negative);
    })
});