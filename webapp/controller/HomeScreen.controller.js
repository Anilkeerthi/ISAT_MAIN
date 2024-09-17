sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/f/library",
	"sap/m/MessageToast"

],
function (Controller,JSONModel,fioriLibrary,MessageToast) {
    "use strict";

    return Controller.extend("com.isat.isatui5.controller.HomeScreen", {
        onInit: function () {

			    this.oFlexibleColumnLayout = this.byId("flexibleColumnLayout");

                var oModel = this.getOwnerComponent().getModel("comboJsonModel");
                this.getView().getModel(oModel)
                console.log(oModel)

				var Model = this.getOwnerComponent().getModel("dataJsonModel");
                this.getView().setModel(Model,"jsonModel")
                console.log(Model)

				var OModel = this.getOwnerComponent().getModel("CustomerData");
                this.getView().getModel(OModel)
                console.log(OModel)

				
                
                
        },
		backToDashBoard:function(){
            var route = this.getOwnerComponent().getRouter();
            route.navTo("RouteDashboard")
        },

		onAdminButtonPress:function(){
			var routee = this.getOwnerComponent().getRouter();
			routee.navTo("RouteAdminScreen")
		},
        // handleSelectionChange: function(oEvent) {
		// 	var changedItem = oEvent.getParameter("changedItem");
		// 	var isSelected = oEvent.getParameter("selected");

		// 	var state = "Selected";
		// 	if (!isSelected) {
		// 		state = "Deselected";
		// 	}

		// 	MessageToast.show("Event 'selectionChange': " + state + " '" + changedItem.getText() + "'", {
		// 		width: "auto"
		// 	});
		// },

		// handleSelectionFinish: function(oEvent) {
		// 	var selectedItems = oEvent.getParameter("selectedItems");
		// 	var messageText = "Event 'selectionFinished': [";

		// 	for (var i = 0; i < selectedItems.length; i++) {
		// 		messageText += "'" + selectedItems[i].getText() + "'";
		// 		if (i != selectedItems.length - 1) {
		// 			messageText += ",";
		// 		}
		// 	}

		// 	messageText += "]";

		// 	MessageToast.show(messageText, {
		// 		width: "auto"
		// 	});
		// },


		onAddButtonPress: function () {
			
			if (!this.ChangeDialog) {
				this.ChangeDialog = this.loadFragment({
					name: "com.isat.isatui5.view.Add" // Update the path to your fragment
				});
			}

			// Open the dialog and bind the selected data to the dialog's SimpleForm
			this.ChangeDialog.then(function (Dialog) {
				this.Dialog = Dialog;

				this.Dialog.open();
			}.bind(this));
		},



		onListItemPress: function (oEvent) {
			var oItem = oEvent.getSource();
                var oContext = oItem.getBindingContext("jsonModel");

				var oFlexibleColumnLayout = this.getView().byId("flexibleColumnLayout");
                    oFlexibleColumnLayout.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);

			// Navigate to mid column to show ObjectPageLayout
			// this.oFlexibleColumnLayout.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);

			// // Bind the selected item to the ObjectPageLayout in mid column
			// ;
			// var oMidColumnPage = this.byId("flexibleColumnLayout");
			// oMidColumnPage.bindElement({
			// 	path: oCtx.getPath(),
			// 	model: "jsonModel"
			// });
		},

		ItemPress: function (oEvent) {
			var oItem = oEvent.getSource();
                var oContext = oItem.getBindingContext("jsonModel");

				var oFlexibleColumnLayout = this.getView().byId("flexibleColumnLayout");
                    oFlexibleColumnLayout.setLayout(fioriLibrary.LayoutType.ThreeColumnsMidExpanded);

			// Navigate to mid column to show ObjectPageLayout
			// this.oFlexibleColumnLayout.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);

			// // Bind the selected item to the ObjectPageLayout in mid column
			// ;
			// var oMidColumnPage = this.byId("flexibleColumnLayout");
			// oMidColumnPage.bindElement({
			// 	path: oCtx.getPath(),
			// 	model: "jsonModel"
			// });
		},


		
		handleFullScreen: function () {
			this.oFlexibleColumnLayout.setLayout(fioriLibrary.LayoutType.MidColumnFullScreen);
		},

		handleExitFullScreen: function () {
			this.oFlexibleColumnLayout.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
		},

		handleClose: function () {
			this.oFlexibleColumnLayout.setLayout(fioriLibrary.LayoutType.OneColumn);
		}
	});

    });

