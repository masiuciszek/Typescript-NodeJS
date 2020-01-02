// mapboxgl.accessToken =
//   'pk.eyJ1IjoibWFzaXVtYXNpdSIsImEiOiJjazR3dWd3NnE1dnJhM25td2g4cTNsZ2dtIn0.7XqJo_p8LO40bTbpeDlRWw';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFzaXVtYXNpdSIsImEiOiJjazR3dWd3NnE1dnJhM25td2g4cTNsZ2dtIn0.7XqJo_p8LO40bTbpeDlRWw';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 12,
  center: [12.299, 57.372],
});

async function getStores() {
  const res = await fetch('/stores');
  const data = await res.json();

  const stores = data.data.map(store => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [
        store.location.coordinates[0],
        store.location.coordinates[1],
      ],
    },
    properties: {
      storeId: store.storeId,
      icon: 'shop',
    },
  }));

  loadMap(stores);
  console.log(stores);
}

// Load map with stores
function loadMap(stores) {
  map.on('load', function() {
    map.addLayer({
      id: 'points',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: stores,
        },
      },
      layout: {
        'icon-image': '{icon}-15',
        'icon-size': 1.5,
        'text-field': '{storeId}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.9],
        'text-anchor': 'top',
      },
    });
  });
}

getStores();
