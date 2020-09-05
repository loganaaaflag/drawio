/**
 * Copyright (c) 2006-2020, JGraph Ltd
 * Copyright (c) 2006-2020, draw.io AG
 */
// Overrides of global vars need to be pre-loaded
window.EXPORT_URL = 'REPLACE_WITH_YOUR_IMAGE_SERVER';
window.PLANT_URL = 'REPLACE_WITH_YOUR_PLANTUML_SERVER';
window.DRAWIO_BASE_URL = null; // Replace with path to base of deployment, e.g. https://www.example.com/folder
window.DRAWIO_VIEWER_URL = null; // Replace your path to the viewer js, e.g. https://www.example.com/js/viewer.min.js
window.DRAW_MATH_URL = 'math';
window.DRAWIO_CONFIG = { // Replace with your custom draw.io configurations. For more details, https://desk.draw.io/support/solutions/articles/16000058316
    plugins: [
        (function () {
            var env = urlParams['aaa-env'];
            switch (env) {
                case 'PROD':
                    return "https://production.aaaflag.com/resources/diagram-plugin.js?__WB_REVISION__=5cc705a3bd5f81bc808317a7a2656bdb";
                case 'LOCAL':
                    return "https://itdev-pc.aaaflag.net:82/resources/diagram-plugin.js?__WB_REVISION__=5cc705a3bd5f81bc808317a7a2656bdb";
                case 'DEVICE':
                    return "capacitor://localhost/resources/diagram-plugin.js?__WB_REVISION__=5cc705a3bd5f81bc808317a7a2656bdb";
                default:
                    return "https://production-dev.aaaflag.com/resources/diagram-plugin.js?__WB_REVISION__=5cc705a3bd5f81bc808317a7a2656bdb";

            }
        })()
    ]
};
urlParams['sync'] = 'manual';
