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

  $.ajax({
    type: 'POST',
    url: 'http://localhost:5001/api/v1/places_search',
    data: JSON.stringify({ amenities: Object.values(dictamenity) }),
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      $('SECTION.places').empty();
      $('SECTION.places').append(data.map(place => {
        return `<article>
                  <div class="title_box">
                    <h2>${place.name}</h2>
                    <div class="price_by_night">$${place.price_by_night}</div>
                  </div>
                  <div class="information">
                    <div class="max_guest">${place.max_guest} Guests</div>
                    <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                    <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                  </div>
                  <div class="description">
                    ${place.description}
                  </div>
                </article>`
      }));
    }
  });

  $('button[type="button"]').click(function () {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:5001/api/v1/places_search',
      data: JSON.stringify({ amenities: Object.values(dictamenity) }),
      dataType: 'json',
      contentType: 'application/json',
      success: function (data) {
        $('SECTION.places').empty();
        $('SECTION.places').append(data.map(place => {
          return `<article>
                    <div class="title_box">
                      <h2>${place.name}</h2>
                      <div class="price_by_night">$${place.price_by_night}</div>
                    </div>
                    <div class="information">
                      <div class="max_guest">${place.max_guest} Guests</div>
                      <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                      <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                    </div>
                    <div class="description">
                      ${place.description}
                    </div>
                  </article>`
        }));
      }
    });
  });
});
