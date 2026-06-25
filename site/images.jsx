// images.jsx - shared real photography for the site.
// Source: Pexels (free to use, no attribution required). Hand-picked casual
// beach-volleyball scenes - warm sun, sand and sea, friends playing - chosen to
// sit naturally on the sand+sea palette. No stadium crowds, no competition halls.
// Each entry is a Pexels photo id; BV_IMG builds a width-optimised URL.
window.BV_IMG = (id, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

window.BV_PHOTOS = {
  heroAction: 6180426, // hit against a clear blue sky
  ballClose:  16069805, // colourful ball resting in the sand
  friends:    6180430, // four friends smiling by the net
  dive:       12169045, // diving save, sunny beach court
  serve:      6180404, // serve, sunglasses, blue sky
  jump:       27965328, // jump at the net
  menPlay:    6180392, // rally under a clear sky
  womanSky:   6180386, // player under blue sky
  lifestyle:  12169357, // walking off with the ball
  netReady:   6180409, // ready at the net
  duo:        12169213, // two players, sandy court
  coupleBall: 12169190, // playful fight for the ball
};

// Warm the cache for the shots that appear early so the page feels instant.
[window.BV_PHOTOS.dive, window.BV_PHOTOS.friends, window.BV_PHOTOS.heroAction, window.BV_PHOTOS.jump]
  .forEach((id) => { const i = new Image(); i.src = window.BV_IMG(id, 900); });
