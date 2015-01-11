$('#appNameData').on('show.bs.collapse', function () {
  $('#collapseAppName').html('-');
});

$('#appNameData').on('hide.bs.collapse', function () {
  $('#collapseAppName').html('+');
});