$(document).ready(function () {
  const dictamenity = {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(":checked")) {
      dictamenity[$(this).attr('data-name')] = $(this).attr('data-id');
    } else {
      delete dictamenity[$(this).attr('data-name')];
    }
    const name_amenity = Object.keys(dictamenity);
    $('.amenities h4').text(name_amenity.sort().join(', '));
  });

  $(function () {
    $.get('http://localhost:5001/api/v1/status/', function (data, txt_status) {
      if (txt_status === 200 || data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });
  })
});
