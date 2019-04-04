import "./config";

import "@dojo/framework/shim/Promise";

import App from "./widgets/App";

/**
 * Initialize application
 */
export const app = new App({
  appName: "CLI Map Viewer App",
  container: document.getElementById("app") as HTMLElement
});
