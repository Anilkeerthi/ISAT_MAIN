sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
    "sap/ui/layout/form/SimpleForm",
    "sap/m/Label",
    "sap/m/Input",
  ],
  function (Controller,Fragment, MessageToast,Dialog, Button, Text, SimpleForm, Label, Input) {
    "use strict";

    return Controller.extend("com.isat.isatui5.controller.AdminScreen", {
      onInit: function () {

        var Model = this.getOwnerComponent().getModel("CustomerData");
        this.getView().setModel(Model, "jsonModel")
        console.log(Model)
        
        // Default visibility setup: Show only the Customers table
        this.getView().byId("idCustomersTable").setVisible(true);
        this.getView().byId("idProjectsTable").setVisible(false);
        this.getView().byId("idUsersTable").setVisible(false);

        // Set default selected key in the ComboBox
        this.getView().byId("entityComboBox").setSelectedKey("CustomersData");

      //    // Initialize the dialog
      //    this._oDialog = new Dialog({
      //     title: "Customer Details",
      //     content: new SimpleForm({
      //         content: [
      //             new Label({ text: "Customer ID" }),
      //             new Text({ text: "{CustomerData>custid}" }),
      //             new Label({ text: "Description" }),
      //             new Text({ text: "{CustomerData>description}" }),
      //             new Label({ text: "Location" }),
      //             new Text({ text: "{CustomerData>location}" }),
      //             new Label({ text: "Name" }),
      //             new Text({ text: "{CustomerData>name}" })
      //         ]
      //     }),
      //     beginButton: new Button({
      //         text: "Close",
      //         press: function() {
      //             this._oDialog.close();
      //         }.bind(this)
      //     })
      // });

    //  this.getView().addDependent(this._oDialog);
  },



    //   onShowDetails: function(oEvent) {
    //     // Get the binding context of the clicked button
    //     var oSelectedItem = oEvent.getSource().getParent();
    //     var oContext = oSelectedItem.getBindingContext("CustomerData");

    //     // Set the context to the dialog
    //     this._oDialog.setBindingContext(oContext, "CustomerData");

    //     // Open the dialog
    //     this._oDialog.open();
    // },


      //Routing back to dashBoard
      backToDashBoard: function () {
        var route = this.getOwnerComponent().getRouter();
        route.navTo("RouteDashboard")
      },

      onShowDetails: function (oEvent) {
        // Get the selected row's data
        var oSelectedItem = oEvent.getSource().getParent();
        var oContext = oSelectedItem.getBindingContext("jsonModel");
        var oData = oContext.getObject();
       
        // Store the context path to update the original model later
        this._originalContextPath = oContext.getPath();
   
        // Add a new property 'editable' to control the edit mode
        oData.editable = false;
        oData.buttonText = "Edit"; // Button starts as 'Edit'
   
        // Create a new JSON model to bind the dialog content
        var oDialogModel = new sap.ui.model.json.JSONModel();
        oDialogModel.setData(oData);
       
        // Bind the dialog with the selected row data
        this.getView().setModel(oDialogModel, "dialogModel");
       
        // Open the dialog
        this.byId("detailsDialog").open();
    },
   
    onToggleEdit: function () {
        // Get the dialog model
        var oDialogModel = this.getView().getModel("dialogModel");
        var oData = oDialogModel.getData();
   
        // Toggle the 'editable' property and button text
        if (oData.editable) {
            // Currently in edit mode, save changes
            oData.editable = false;
            oData.buttonText = "Edit";
   
            // Save the changes to the backend and update the original model
            this._saveChanges(oData);
        } else {
            // Enable edit mode
            oData.editable = true;
            oData.buttonText = "Save";
        }
   
        // Update the model
        oDialogModel.setData(oData);
    },
   
    _saveChanges: function (oData) {
        // Get the original model
        var oJsonModel = this.getView().getModel("jsonModel");
   
        // Update the original model's data using the stored context path
        oJsonModel.setProperty(this._originalContextPath, oData);
   
        // You can implement backend save logic here if necessary
        // Example: Sending the updated data to the backend
        console.log("Saving changes:", oData);
   
        // Close the dialog after saving
        this.onCloseDialog();
    },
   
    onCloseDialog: function () {
        // Close the dialog
        this.byId("detailsDialog").close();
    },
   


     


    //   onEntityChange: function(oEvent) {
    //     // Get selected key
    //     var selectedKey = oEvent.getSource().getSelectedKey();
    //     var oVBox = this.byId("tablePlaceholder");
    
    //     // Clear previous content
    //     oVBox.removeAllItems();
    
    //     // Load the appropriate view based on the selected key
    //     if (selectedKey === "CustomersData") {
    //         // Load Customer Table View
    //         var oCustomerView = sap.ui.xmlview({
                
    //             viewName: "com.isat.isatui5.view.Customer"
    //         });
    //         oVBox.addItem(oCustomerView);
    //     } else if (selectedKey === "ProjectsData") {
    //         // Load Projects Table View (create and add accordingly)
    //         // var oProjectsView = sap.ui.xmlview({ viewName: "com.isat.isatui5.view.Tables.Projects" });
    //         // oVBox.addItem(oProjectsView);
    //     } else if (selectedKey === "Users") {
    //         // Load Users Table View (create and add accordingly)
    //         // var oUsersView = sap.ui.xmlview({ viewName: "com.isat.isatui5.view.Tables.Users" });
    //         // oVBox.addItem(oUsersView);
    //     }
    // },

  //   onEntityChange: function(oEvent) {
  //     var sSelectedKey =  oEvent.getSource().getSelectedKey();
  //     var oVBox = this.byId("tablePlaceholder");
  
  //     // Clear existing content
  //     oVBox.destroyItems();
  
  //     // Load the appropriate view based on the selected key
  //     var sViewName;
  //     switch (sSelectedKey) {
  //         case "CustomersData":
  //             sViewName = "com.isat.isatui5.view.Tables.Customer"; // Adjust view name
  //             break;
  //         case "ProjectsData":
  //             sViewName = "com.isat.isatui5.view..ProjectsTable"; // Adjust view name
  //             break;
  //         case "Users":
  //             sViewName = "com.isat.isatui5.view.UsersTable"; // Adjust view name
  //             break;
  //         default:
  //             break;
  //     }
  
  //     if (sViewName) {
  //       // Load the view dynamically
  //       var oView = new sap.ui.core.mvc.XMLView({
  //           viewName: sViewName
  //       });
  //       oVBox.addItem(oView);
  //   }
  // },
  
    

      //ComboBox code 
      onEntityChange: function (oEvent) {
        var oComboBox = oEvent.getSource();
        var selectedKey = oComboBox.getSelectedKey();

        // Hide all tables initially
        this.getView().byId("idCustomersTable").setVisible(false);
        this.getView().byId("idProjectsTable").setVisible(false);
        this.getView().byId("idUsersTable").setVisible(false);

        // Show the table corresponding to the selected key
        switch (selectedKey) {
          case "CustomersData":
            this.getView().byId("idCustomersTable").setVisible(true);
            break;
          case "ProjectsData":
            this.getView().byId("idProjectsTable").setVisible(true);
            break;
          case "Users":
            this.getView().byId("idUsersTable").setVisible(true);
            break;
          default:
            console.warn("Unexpected key selected:", selectedKey);
        }

      },

      //NEW Button Fragment(DialogBox)
      onAdminButtonPress: function () {
        if (!this.oChangeDialog) {
          this.oChangeDialog = this.loadFragment({
            name: "com.isat.isatui5.view.AdminScreen"
          });
        }


        this.oChangeDialog.then(function (oDialog) {
          this.oDialog = oDialog;

          this.oDialog.open();
        }.bind(this));
      },



    });
  }
);
