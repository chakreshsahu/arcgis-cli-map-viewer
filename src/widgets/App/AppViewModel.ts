import Accessor from "esri/core/Accessor";
import { whenOnce } from "esri/core/watchUtils";
import FeatureLayer from "esri/layers/FeatureLayer";
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";

// Esri Default Widgets
import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import BasemapGallery from "esri/widgets/BasemapGallery";
import BasemapToggle from "esri/widgets/BasemapToggle";
import CoordinateConversion from "esri/widgets/CoordinateConversion";
import Expand from "esri/widgets/Expand";
import Home from "esri/widgets/Home";
import LayerList from "esri/widgets/LayerList";
import Legend from "esri/widgets/Legend";
import Locate from "esri/widgets/Locate";
import Print from "esri/widgets/Print";
import ScaleBar from "esri/widgets/ScaleBar";
import Search from "esri/widgets/Search";

export interface AppParams {
  appName: string;
  map: EsriMap;
  featureLayer: FeatureLayer;
  view: MapView;
}

@subclass("widgets.App.AppViewModel")
class AppViewModel extends declared(Accessor) {
  @property() appName: string;

  @property() map: EsriMap;

  @property() featureLayer: FeatureLayer;

  @property() view: MapView;

  constructor(params?: Partial<AppParams>) {
    super(params);
    whenOnce(this, "view").then(this.onload.bind(this));
  }

  onload() {
    // Add the home button to the top left corner of the view
    const homeBtn = new Home({
      view: this.view
    });

    this.view.ui.add(homeBtn, "top-left");

    // Add the Locate button to the top left corner of the view
    const locateBtn = new Locate({
      view: this.view
    });

    this.view.ui.add(locateBtn, "top-left");

    // Add the CoordinateConversion widget to the bottom left corner of the view
    const coordinateConversionWidget = new CoordinateConversion({
      view: this.view
    });

    this.view.ui.add(coordinateConversionWidget, "bottom-left");

    // Add the Locate button to the bottom left corner of the view
    const scaleBar = new ScaleBar({
      view: this.view,
      unit: "metric"
    });

    this.view.ui.add(scaleBar, "bottom-left");

    // Add Search, Legend, Layerlist, Basemap Gallery, Print Widgets
    // to the top rigth corner of the view in div container

    // Search Widget
    const search = new Search({
      view: this.view,
      container: document.createElement("div")
    });

    const searchExpand = new Expand({
      view: this.view,
      content: search,
      expandIconClass: "esri-icon-search",
      group: "top-right",
      autoCollapse: true
    });

    // Legend Widget
    const legendExpand = new Expand({
      view: this.view,
      content: new Legend({ view: this.view }),
      group: "top-right",
      autoCollapse: true
    });

    // LayerList Widget
    const layerListExpand = new Expand({
      view: this.view,
      content: new LayerList({ view: this.view }),
      expandIconClass: "esri-icon-layers",
      group: "top-right",
      autoCollapse: true
    });

    // Basemap Gallery Widget
    const basemapGallery = new BasemapGallery({
      view: this.view
    });

    const basemapGalleryExpand = new Expand({
      view: this.view,
      content: basemapGallery,
      expandIconClass: "esri-icon-basemap",
      group: "top-right",
      autoCollapse: true
    });

    // Print Widget
    const printExpand = new Expand({
      view: this.view,
      content: new Print({
        view: this.view,
        // specify your own print service
        printServiceUrl:
          "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
      }),
      expandIconClass: "esri-icon-printer",
      group: "top-right",
      autoCollapse: true
    });

    this.view.ui.add(
      [
        searchExpand,
        legendExpand,
        layerListExpand,
        basemapGalleryExpand,
        printExpand
      ],
      "top-right"
    );

    // Add basemap toggle widget to the top bottom right of the view
    const basemapToggle = new BasemapToggle({
      view: this.view,
      nextBasemap: "satellite"
    });

    this.view.ui.add(basemapToggle, "bottom-right");

    this.featureLayer.when(() => {
      this.view.goTo({ target: this.featureLayer.fullExtent });
    });
  }
}

export default AppViewModel;
