$(document).ready(function () {
  const dictamenity = {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(":checked")) {
      dictamenity[$(this).attr('data-name')] = $(this).attr('data-id');
    } else {
      delete dictamenity[$(this).attr('data-name')];
    }
    const name_amenity = Object.keys(dictamenity);
    $('.amenities h4').text(names.sort().join(', '));
  });
});
