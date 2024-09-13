// sap.ui.define([
//   "sap/ui/core/mvc/Controller",
//   "sap/ui/model/json/JSONModel",
//   "sap/ui/model/Filter",
//   "sap/ui/model/FilterOperator"
// ], function (Controller, JSONModel, Filter, FilterOperator) {
//   "use strict";

//   return Controller.extend("com.isat.isatui5.controller.Dashboard", {
//       onInit: function () {
          // Set up the JSON model
          // var oModel = new JSONModel(sap.ui.require.toUrl("com/isat/isatui5/model/data.json"));
          // this.getView().setModel(oModel, "projectData");

          // // Set default filter for all projects
          // this._applyProjectFilter();
      //},

      // // Event handler for the project filter
      // onProjectFilter: function (oEvent) {
      //     var sSelectedProject = oEvent.getSource().getSelectedKey();

      //     // Apply filter based on project selection
      //     this._applyProjectFilter(sSelectedProject);
      // },

      // // Apply filter logic
      // _applyProjectFilter: function (sProject) {
      //     var oCard = this.getView().byId("barChartCard"); // Assuming the card ID
      //     var aFilters = [];

      //     if (sProject) {
      //         aFilters.push(new Filter("projectName", FilterOperator.EQ, sProject));
      //     }

      //     var oBinding = oCard.getBinding("items");
      //     oBinding.filter(aFilters);
      // }
//   });
// });




// sap.ui.define([
//   "sap/ui/core/mvc/Controller",
//   "sap/ui/model/json/JSONModel",
//   "sap/viz/ui5/controls/common/feeds/FeedItem",
//   "sap/viz/ui5/data/FlattenedDataset"
// ], function (Controller, JSONModel, FeedItem, FlattenedDataset) {
//   "use strict";

//   return Controller.extend("project1.controller.View1", {
//       onInit: function () {
//           // Load JSON Data (you can replace this with your OData service as needed)
//           var oData = {
//               scenariosByRelease: [
//                   { phase: "Phase 1", count: 13 },
//                   { phase: "Phase 2", count: 18 },
//                   { phase: "Phase 3", count: 46 },
//                   { phase: "Phase 4", count: 36 },
//                   { phase: "Phase 5", count: 21 },
//                   { phase: "Phase 6", count: 22 }
//               ],
//               scenariosByPortfolio: [
//                   { portfolio: "BTP", count: 34 },
//                   { portfolio: "CX", count: 11 },
//                   { portfolio: "Digital Core", count: 69 },
//                   { portfolio: "HXM", count: 3 },
//                   { portfolio: "Industries", count: 51 }
//               ],
//               scenariosByInitiative: [
//                   { initiative: "Rise with SAP", percentage: 21.0 },
//                   { initiative: "Industry Cloud", percentage: 27.2 },
//                   { initiative: "BTP", percentage: 29.5 },
//                   { initiative: "Sustainability", percentage: 7.0 },
//                   { initiative: "Others", percentage: 15.3 }
//               ]
//           };

//           // Create a JSONModel and set the data
//           var oModel = new JSONModel(oData);
//           this.getView().setModel(oModel);

//           // Call method to bind the charts
//           this._bindCharts();
//       },

//       _bindCharts: function () {
//           // Bind data for Scenarios by Release (Bar Chart)
//           var oVizFrameRelease = this.getView().byId("barChartRelease");
//           var oDatasetRelease = new FlattenedDataset({
//               dimensions: [{
//                   name: "Phase",
//                   value: "{phase}"
//               }],
//               measures: [{
//                   name: "Count",
//                   value: "{count}"
//               }],
//               data: {
//                   path: "/scenariosByRelease"
//               }
//           });
//           oVizFrameRelease.setDataset(oDatasetRelease);
//           oVizFrameRelease.setModel(this.getView().getModel());

//           oVizFrameRelease.addFeed(new FeedItem({
//               uid: "valueAxis",
//               type: "Measure",
//               values: ["Count"]
//           }));

//           oVizFrameRelease.addFeed(new FeedItem({
//               uid: "categoryAxis",
//               type: "Dimension",
//               values: ["Phase"]
//           }));



//            // Bind data for Scenarios by Portfolio (Bar Chart)
//           var oVizFramePortfolio = this.getView().byId("barChartPortfolio");
//           var oDatasetPortfolio = new FlattenedDataset({
//               dimensions: [{
//                   name: "Portfolio",
//                   value: "{portfolio}"
//               }],
//               measures: [{
//                   name: "Count",
//                   value: "{count}"
//               }],
//               data: {
//                   path: "/scenariosByPortfolio"
//               }
//           });
//           oVizFramePortfolio.setDataset(oDatasetPortfolio);
//           oVizFramePortfolio.setModel(this.getView().getModel());

//           oVizFramePortfolio.addFeed(new FeedItem({
//               uid: "valueAxis",
//               type: "Measure",
//               values: ["Count"]
//           }));

//           oVizFramePortfolio.addFeed(new FeedItem({
//               uid: "categoryAxis",
//               type: "Dimension",
//               values: ["Portfolio"]
//           }));



          
//            // Bind data for Scenarios by Initiative (Pie Chart)
//           var oVizFrameInitiative = this.getView().byId("pieChartInitiative");
//           var oDatasetInitiative = new FlattenedDataset({
//               dimensions: [{
//                   name: "Initiative",
//                   value: "{initiative}"
//               }],
//               measures: [{
//                   name: "Percentage",
//                   value: "{percentage}"
//               }],
//               data: {
//                   path: "/scenariosByInitiative"
//               }
//           });
//           oVizFrameInitiative.setDataset(oDatasetInitiative);
//           oVizFrameInitiative.setModel(this.getView().getModel());

//           oVizFrameInitiative.addFeed(new FeedItem({
//               uid: "size",
//               type: "Measure",
//               values: ["Percentage"]
//           }));

//           oVizFrameInitiative.addFeed(new FeedItem({
//               uid: "color",
//               type: "Dimension",
//               values: ["Initiative"]
//           }));
//       }
//   });
// });


sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("com.isat.isatui5.controller.Dashboard", {
        onInit: function () {

            // Set up view model
            var oViewModel = new JSONModel({
                userName: "Venkata Narasimha Raju",
                scenariosByRelease: [
                    { release: "Phase 1", count: 13 },
                    { release: "Phase 2", count: 18 },
                    { release: "Phase 3", count: 46 },
                    { release: "Phase 4", count: 36 },
                    { release: "Phase 5", count: 21 },
                    { release: "Phase 6", count: 22 },
                    { release: "Phase 7", count: 21 },
                    { release: "Phase 8", count: 35 }
                ],
                scenariosByPortfolios: [
                    { portfolio: "BTP", count: 34 },
                    { portfolio: "CX", count: 11 },
                    { portfolio: "Digital Core", count: 69 },
                    { portfolio: "HXM", count: 3 },
                    { portfolio: "Industries", count: 51 },
                    { portfolio: "Concur", count: 3 },
                    { portfolio: "SF", count: 8 }
                ],
                scenariosByInitiative: [
                    { initiative: "Rise with SAP", percentage: 21 },
                    { initiative: "Industry Cloud", percentage: 27.2 },
                    { initiative: "BTP", percentage: 7 },
                    { initiative: "Sustainability", percentage: 29.5 },
                    { initiative: "Others", percentage: 15.3 }
                ],
                portfolios: [
                    { key: "All", text: "All" },
                    { key: "BTP", text: "BTP" },
                    { key: "CX", text: "CX" },
                    { key: "DigitalCore", text: "Digital Core" },
                    { key: "HXM", text: "HXM" },
                    { key: "Industries", text: "Industries" },
                    { key: "Concur", text: "Concur" },
                    { key: "SF", text: "SF" }
                ],
                initiatives: [
                    { key: "All", text: "All" },
                    { key: "RiseWithSAP", text: "Rise with SAP" },
                    { key: "IndustryCloud", text: "Industry Cloud" },
                    { key: "BTP", text: "BTP" },
                    { key: "Sustainability", text: "Sustainability" },
                    { key: "Others", text: "Others" }
                ]
            });
            this.getView().setModel(oViewModel, "viewModel");

            // Set up calendar model
            var oCalendarModel = new JSONModel({
                startDate: new Date(2024, 8, 1), // September 1, 2024
                appointments: [
                    {
                        start: new Date(2024, 8, 2),
                        end: new Date(2024, 8, 2),
                        title: "Event 1",
                        type: "Type01"
                    }
                    // Add more appointments as needed
                ]
            });
            this.getView().setModel(oCalendarModel, "calendar");
        },

        onAfterRendering: function() {
            this._setChartProperties();
        },

        _setChartProperties: function() {
            var chartProperties = {
                plotArea: {
                    dataLabel: {
                        visible: true,
                        showTotal: false
                    }
                },
                valueAxis: {
                    title: {
                        visible: false
                    }
                },
                categoryAxis: {
                    title: {
                        visible: false
                    }
                },
                title: {
                    visible: false
                }
            };

            this.getView().byId("idScenariosReleaseChart").setVizProperties(chartProperties);
            this.getView().byId("idScenariosPortfoliosChart").setVizProperties(chartProperties);
            
            var donutChartProperties = {
                plotArea: {
                    dataLabel: {
                        visible: true,
                        showTotal: false
                    },
                    drawingEffect: "glossy"
                },
                legend: {
                    visible: true,
                    position: "bottom"
                },
                title: {
                    visible: false
                }
            };
            this.getView().byId("idScenariosInitiativeChart").setVizProperties(donutChartProperties);
        },
        onClick:function(){
            var Route = this.getOwnerComponent().getRouter();
            Route.navTo("RouteHomeScreen")
        },
        
        

            
        

       

    });
});