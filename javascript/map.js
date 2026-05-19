let map;
let mapInitialized = false;
let markersById = {};

// City data with lat/lng coordinates and regions
const cityRegions = [
    { id: 'pr-ad', label: 'Adjuntas', lat: 18.16274, lng: -66.72212, region: 'Central' },
    { id: 'pr-ag', label: 'Aguada', lat: 18.37939, lng: -67.18824, region: 'West' },
    { id: 'pr-aa', label: 'Aguadilla', lat: 18.42745, lng: -67.15407, region: 'West' },
    { id: 'pr-ab', label: 'Aguas Buenas', lat: 18.2569, lng: -66.10294, region: 'Central' },
    { id: 'pr-ai', label: 'Aibonito', lat: 18.13996, lng: -66.266, region: 'Central' },
    { id: 'pr-an', label: 'Añasco', lat: 18.28273, lng: -67.13962, region: 'West' },
    { id: 'pr-al', label: 'Arecibo', lat: 18.47245, lng: -66.71573, region: 'North' },
    { id: 'pr-ar', label: 'Arroyo', lat: 17.9658, lng: -66.06128, region: 'South' },
    { id: 'pr-bc', label: 'Barceloneta', lat: 18.4505, lng: -66.53851, region: 'North' },
    { id: 'pr-bq', label: 'Barranquitas', lat: 18.18662, lng: -66.30628, region: 'Central' },
    { id: 'pr-bm', label: 'Bayamón', lat: 18.39856, lng: -66.15572, region: 'Metropolitan' },
    { id: 'pr-cr', label: 'Cabo Rojo', lat: 18.08663, lng: -67.14573, region: 'West' },
    { id: 'pr-cg', label: 'Caguas', lat: 18.23412, lng: -66.0485, region: 'East' },
    { id: 'pr-cm', label: 'Camuy', lat: 18.48383, lng: -66.8449, region: 'North' },
    { id: 'pr-cv', label: 'Canóvanas', lat: 18.3751, lng: -65.89934, region: 'East' },
    { id: 'pr-ca', label: 'Carolina', lat: 18.38078, lng: -65.95739, region: 'Metropolitan' },
    { id: 'pr-ct', label: 'Cataño', lat: 18.44134, lng: -66.11822, region: 'Metropolitan' },
    { id: 'pr-cj', label: 'Cayey', lat: 18.11191, lng: -66.166, region: 'Central' },
    { id: 'pr-cb', label: 'Ceiba', lat: 18.26412, lng: -65.6485, region: 'East' },
    { id: 'pr-ci', label: 'Ciales', lat: 18.33606, lng: -66.46878, region: 'Central' },
    { id: 'pr-cd', label: 'Cidra', lat: 18.17579, lng: -66.16128, region: 'Central' },
    { id: 'pr-co', label: 'Coamo', lat: 18.07996, lng: -66.35795, region: 'South' },
    { id: 'pr-cm2', label: 'Comerío', lat: 18.21801, lng: -66.226, region: 'Central' },
    { id: 'pr-cz', label: 'Corozal', lat: 18.34106, lng: -66.31684, region: 'Central' },
    { id: 'pr-cl', label: 'Culebra', lat: 18.30301, lng: -65.30099, region: 'East' },
    { id: 'pr-do', label: 'Dorado', lat: 18.45883, lng: -66.26767, region: 'North' },
    { id: 'pr-fj', label: 'Fajardo', lat: 18.32579, lng: -65.65238, region: 'East' },
    { id: 'pr-fl', label: 'Florida', lat: 18.36245, lng: -66.56128, region: 'North' },
    { id: 'pr-gc', label: 'Guánica', lat: 17.97163, lng: -66.90795, region: 'West' },
    { id: 'pr-ga', label: 'Guayama', lat: 17.98413, lng: -66.11378, region: 'South' },
    { id: 'pr-gy', label: 'Guayanilla', lat: 18.01913, lng: -66.79184, region: 'South' },
    { id: 'pr-gb', label: 'Guaynabo', lat: 18.35745, lng: -66.111, region: 'Metropolitan' },
    { id: 'pr-gm', label: 'Gurabo', lat: 18.2544, lng: -65.97294, region: 'East' },
    { id: 'pr-ha', label: 'Hatillo', lat: 18.48633, lng: -66.82545, region: 'North' },
    { id: 'pr-ho', label: 'Hormigueros', lat: 18.13968, lng: -67.1274, region: 'West' },
    { id: 'pr-hm', label: 'Humacao', lat: 18.14968, lng: -65.82738, region: 'East' },
    { id: 'pr-ise', label: 'Isabel Segunda', lat: 18.14913, lng: -65.44266, region: 'East' },
    { id: 'pr-is', label: 'Isabela', lat: 18.50078, lng: -67.02435, region: 'West' },
    { id: 'pr-jy', label: 'Jayuya', lat: 18.21857, lng: -66.59156, region: 'Central' },
    { id: 'pr-jd', label: 'Juana Díaz', lat: 18.05246, lng: -66.50656, region: 'South' },
    { id: 'pr-jc', label: 'Juncos', lat: 18.22746, lng: -65.921, region: 'East' },
    { id: 'pr-lj', label: 'Lajas', lat: 18.04996, lng: -67.05934, region: 'West' },
    { id: 'pr-lm', label: 'Lares', lat: 18.29467, lng: -66.87712, region: 'West' },
    { id: 'pr-lr', label: 'Las Marías', lat: 18.2519, lng: -66.99212, region: 'West' },
    { id: 'pr-lp', label: 'Las Piedras', lat: 18.18301, lng: -65.86627, region: 'East' },
    { id: 'pr-lz', label: 'Loíza', lat: 18.43134, lng: -65.88016, region: 'East' },
    { id: 'pr-lq', label: 'Luquillo', lat: 18.37245, lng: -65.71655, region: 'East' },
    { id: 'pr-mc', label: 'Manatí', lat: 18.42745, lng: -66.49212, region: 'North' },
    { id: 'pr-mr', label: 'Maricao', lat: 18.18079, lng: -66.9799, region: 'West' },
    { id: 'pr-mb', label: 'Maunabo', lat: 18.00719, lng: -65.89933, region: 'East' },
    { id: 'pr-mg', label: 'Mayagüez', lat: 18.20107, lng: -67.13962, region: 'West' },
    { id: 'pr-mo', label: 'Mona Island', lat: 18.0867, lng: -67.8894, region: 'West' },
    { id: 'pr-mc3', label: 'Moca', lat: 18.39467, lng: -67.11324, region: 'West' },
    { id: 'pr-mv', label: 'Morovis', lat: 18.32578, lng: -66.40656, region: 'Central' },
    { id: 'pr-ng', label: 'Naguabo', lat: 18.21162, lng: -65.73488, region: 'East' },
    { id: 'pr-nt', label: 'Naranjito', lat: 18.30079, lng: -66.24489, region: 'Central' },
    { id: 'pr-or', label: 'Orocovis', lat: 18.2269, lng: -66.391, region: 'Central' },
    { id: 'pr-pt', label: 'Patillas', lat: 18.00635, lng: -66.01572, region: 'South' },
    { id: 'pr-pe', label: 'Peñuelas', lat: 18.05635, lng: -66.72156, region: 'South' },
    { id: 'pr-po', label: 'Ponce', lat: 18.01108, lng: -66.61406, region: 'South' },
    { id: 'pr-qb', label: 'Quebradillas', lat: 18.47383, lng: -66.93851, region: 'West' },
    { id: 'pr-rc', label: 'Rincón', lat: 18.34023, lng: -67.2499, region: 'West' },
    { id: 'pr-rg', label: 'Río Grande', lat: 18.38023, lng: -65.83127, region: 'East' },
    { id: 'pr-sb', label: 'Sabana Grande', lat: 18.07774, lng: -66.96045, region: 'West' },
    { id: 'pr-sl', label: 'Salinas', lat: 17.97747, lng: -66.29795, region: 'South' },
    { id: 'pr-sg', label: 'San Germán', lat: 18.08163, lng: -67.0449, region: 'West' },
    { id: 'pr-sj', label: 'San Juan', lat: 18.46633, lng: -66.10572, region: 'Metropolitan' },
    { id: 'pr-sl2', label: 'San Lorenzo', lat: 18.1894, lng: -65.961, region: 'East' },
    { id: 'pr-ss', label: 'San Sebastián', lat: 18.33662, lng: -66.99018, region: 'West' },
    { id: 'pr-si', label: 'Santa Isabel', lat: 17.96608, lng: -66.40489, region: 'South' },
    { id: 'pr-ta', label: 'Toa Alta', lat: 18.38828, lng: -66.24822, region: 'North' },
    { id: 'pr-tb', label: 'Toa Baja', lat: 18.44384, lng: -66.25961, region: 'Metropolitan' },
    { id: 'pr-tr', label: 'Trujillo Alto', lat: 18.35467, lng: -66.00739, region: 'Metropolitan' },
    { id: 'pr-ut', label: 'Utuado', lat: 18.26551, lng: -66.70045, region: 'Central' },
    { id: 'pr-va', label: 'Vega Alta', lat: 18.41217, lng: -66.33128, region: 'North' },
    { id: 'pr-vb', label: 'Vega Baja', lat: 18.44439, lng: -66.38767, region: 'North' },
    { id: 'pr-vi', label: 'Vieques', lat: 18.12718, lng: -66.49212, region: 'East' },
    { id: 'pr-vl', label: 'Villalba', lat: 18.12718, lng: -66.49212, region: 'South' },
    { id: 'pr-yb', label: 'Yabucoa', lat: 18.05052, lng: -65.87933, region: 'East' },
    { id: 'pr-yc', label: 'Yauco', lat: 18.03496, lng: -66.8499, region: 'West' }
];

// Color palette for regions
const regionColors = {
    'North': '#FF6B6B',// Red
    'South': '#4ECDC4',// Teal
    'East': '#45B7D1',// Blue
    'West': '#FFA07A',// Light Salmon
    'Central': '#FFD93D',// Yellow
    'Metropolitan': '#95E1D3'// Mint
};

function getRegionColor(region) {
    return regionColors[region] || '#808080';
}

function getColor(index) {
    const palette = ['#800026', '#BD0026', '#E31A1C', '#FC4E2A', '#FD8D3C', '#FEB24C'];
    return palette[index % palette.length];
}

function updateMapInfo(region) {
    const nameEl = document.getElementById('map-region-name');
    const descEl = document.getElementById('map-region-description');

    if (nameEl) {
        nameEl.innerText = region.label;
    }

    if (descEl) {
        descEl.innerText = `Region: ${region.region}`;
    }
}

function initializeMap() {
    if (mapInitialized) {
        return;
    }

    const mapContainer = document.getElementById('puerto-rico-map');
    if (!mapContainer) {
        return;
    }

    // Initialize Leaflet map centered on Puerto Rico
    map = L.map(mapContainer).setView([18.2208, -66.5901], 10);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);

    // Create markers for each city
    cityRegions.forEach(region => {
        const markerColor = getRegionColor(region.region);
        
        // Create custom icon with region color
        const markerIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background-color: ${markerColor}; width: 24px; height: 24px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-size: 12px; color: white; font-weight: bold;"></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
            popupAnchor: [0, -12]
        });

        const marker = L.marker([region.lat, region.lng], {
            icon: markerIcon,
            title: region.label
        }).bindPopup(`<strong>${region.label}</strong><br>Region: ${region.region}`);

        // Click event to show info
        marker.on('click', () => {
            updateMapInfo(region);
        });

        marker.addTo(map);
        markersById[region.id] = { marker, region };
    });

    createRegionButtons();
    mapInitialized = true;
}

function selectRegionById(regionId) {
    const regionData = markersById[regionId];
    if (!regionData) {
        return;
    }

    const { marker, region } = regionData;
    updateMapInfo(region);
    marker.openPopup();
    map.panTo(marker.getLatLng());
}

function createRegionButtons() {
    const buttonsContainer = document.getElementById('map-region-buttons');
    if (!buttonsContainer) {
        return;
    }

    buttonsContainer.innerHTML = '';

    // Create a scrollable grid for all municipalities
    const buttonGrid = document.createElement('div');
    buttonGrid.style.display = 'grid';
    buttonGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
    buttonGrid.style.gap = '8px';
    buttonGrid.style.maxHeight = '300px';
    buttonGrid.style.overflowY = 'auto';
    buttonGrid.style.padding = '10px';
    buttonGrid.style.backgroundColor = '#ffabc0';
    buttonGrid.style.borderRadius = '8px';

    cityRegions.forEach(region => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn-primary-site';
        button.textContent = region.label;
        button.style.fontSize = '0.85rem';
        button.style.padding = '8px 6px';
        button.addEventListener('click', () => selectRegionById(region.id));
        buttonGrid.appendChild(button);
    });

    buttonsContainer.appendChild(buttonGrid);
}

function loadMapContent() {
    initializeMap();

    const nameEl = document.getElementById('map-region-name');
    const descEl = document.getElementById('map-region-description');

    if (nameEl) {
        nameEl.innerText = 'Explore Puerto Rico';
    }

    if (descEl) {
        descEl.innerText = 'Click a pin on the map or choose a city below to explore. Pins are color-coded by region.';
    }
}
