export interface MarkerTarget {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class MapClass {
  private googleMap: google.maps.Map;
  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(target: MarkerTarget): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: target.location.lat, lng: target.location.lng },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: target.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
