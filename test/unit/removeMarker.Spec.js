describe('Given the removeMarker Module', function () {

  var removeMarker, markerMock;

  beforeEach(function () {

    var global = {};
    var that = {};

    markerMock = function(uid) {
      this.setMap =  function(arg){
        this.map = arg;
      };
      this.map = 'myMap';
      this.data = {uid: uid};
      return this;
    };

    removeMarker = require('map-tools/removeMarker')(global, that);
  });

  it('should remove a Marker from the Map', function () {

    var marker = new markerMock(1);
    removeMarker(marker);
    expect(marker.map).to.equal(null);
  });

  it('should remove multiples markers from the Map', function () {
    var markers = [new markerMock(1), new markerMock(2)];
    removeMarker(markers);
    expect(markers[0].map).to.equal(null);
    expect(markers[1].map).to.equal(null);
  });

});
