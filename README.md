# ArcGIS CLI based Map Viewer with Esri default widget using the ArcGIS API for JavaScript 4.x

## Usage

This application is written in [TypeScript](http://www.typescriptlang.org/) and utilizes the [`@arcgis/webpack-plugin`](https://github.com/Esri/arcgis-webpack-plugin).

You can develop, test, and build the application using various commands.

Run the application in development mode with a local development server.
```sh
npm start
```

Run the unit tests for the application. Unit tests are written with [Intern](https://theintern.io/).
```sh
npm test
```

Build the application for deployment.
```sh
npm run build
```

Run a production build of the application, but serve it up locally to see how the built app will behave.
```sh
npm run serve
```

Use `npm run serve` to full test that Service Workers are working correctly with `webpack-dev-server` self signed certifcates. Refer to [this article](https://deanhume.com/testing-service-workers-locally-with-self-signed-certificates/) on how to run Chrome with proper flags enabled for development purposes.

## Description 

The Map Viewer application is built by using [`@arcgis/cli`](https://github.com/Esri/arcgis-js-cli). 

![Map Viewer](https://github.com/chakreshsahu/arcgis-cli-map-viewer/blob/master/screenshots/AppSnap.JPG)

The Map Viewer have following esri widgets. 

- Home Widget

  ![Home](https://github.com/chakreshsahu/arcgis-cli-map-viewer/blob/master/screenshots/Home.JPG)

- Locate Widget

  ![Home](https://github.com/chakreshsahu/arcgis-cli-map-viewer/blob/master/screenshots/Locate.JPG)

- Coordinate Conversion Widget

  ![Home](https://github.com/chakreshsahu/arcgis-cli-map-viewer/blob/master/screenshots/CoordinateConversion.JPG)

- Scalebar

  ![Home](https://github.com/chakreshsahu/arcgis-cli-map-viewer/blob/master/screenshots/Scalebar.JPG)
  
- Search Widget

  ![Home](https://github.com/chakreshsahu/arcgis-cli-map-viewer/blob/master/screenshots/Search.JPG)

- Legend Widget

  ![Home](https://github.com/chakreshsahu/arcgis-cli-map-viewer/blob/master/screenshots/Legend.JPG)

- Layerlist Widget

  ![Home](https://github.com/chakreshsahu/arcgis-cli-map-viewer/blob/master/screenshots/LayerList.JPG)

- Basemap Gallery Widget

  ![Home](https://github.com/chakreshsahu/arcgis-cli-map-viewer/blob/master/screenshots/BasemapGallery.JPG)

- Print Widget

  ![Home](https://github.com/chakreshsahu/arcgis-cli-map-viewer/blob/master/screenshots/Print.JPG)
  
- Basemap Toggle Widget

  ![Home](https://github.com/chakreshsahu/arcgis-cli-map-viewer/blob/master/screenshots/BasemapToggle.JPG)



## Reference 
1. [Introducing a cli for the ArcGIS API for JavaScript](https://www.esri.com/arcgis-blog/products/js-api-arcgis/mapping/introducing-a-cli-for-the-arcgis-api-for-javascript/)

2. [`@arcgis/cli`](https://github.com/Esri/arcgis-js-cli)
