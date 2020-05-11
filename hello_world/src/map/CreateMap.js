import React, { Component } from "react";
import ReactDOM from "react-dom";

class CreateMap extends Component {
  constructor(props) {
    super(props);
    // Create a ref to associate defined map to the <div> tag
    this.mapRef = React.createRef();
    // Create a state of the map so that we can dispose the map after page is closed to prevent memory leaks.
    this.state = {
      map: null,
    };
  }
  // The realization of the map component should be done when the page is rendered so that all the HERE related script is loaded for usage.
  componentDidMount() {
    // Use the window object to bring us the H library from HERE
    const H = window.H;
    // Initialize the API to platform, so that we can access all the functionalities from platform variable.
    let platform = new H.service.Platform({
      apikey: "yd4tYCP4GzsU-GFrcWddKy4aqV3v4DpZvpKkId4EWJw",
    });
    // Define a map layer
    const defaultLayer = platform.createDefaultLayers();
    // Define a map object, which accept three parameters: the <div> ref, the layer definition, the parameters such as location, zoom etc. After the map object is declared, the <div> is associated with the map.
    const defaultMap = new H.Map(
      this.mapRef.current,
      //Swtich between raster tiles or vector tiles
      //defaultLayer.raster.normal.map,
      defaultLayer.vector.normal.map,
      {
        center: { lat: 50, lng: 5 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1,
      }
    );
    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    // This variable is unused and is present for explanatory purposes
    const behavior = new H.mapevents.Behavior(
      new H.mapevents.MapEvents(defaultMap)
    );
    // Create the default UI components to allow the user to interact with them
    // This variable is unused
    const ui = H.ui.UI.createDefault(defaultMap, defaultLayer, "zh-CN");
    // We set the state to the created map object
    this.setState({ map: defaultMap });
  }
  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();
  }
  render() {
    // Redirect the map object by Portal to the associated tag in index.html. Note, we need to specify the ref of the <div> as well as the size of it.
    return ReactDOM.createPortal(
      <div ref={this.mapRef} style={{ height: "100vh" }}></div>,
      document.getElementById("map_container")
    );
  }
}

export default CreateMap;
