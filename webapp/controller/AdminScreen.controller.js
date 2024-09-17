sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.isat.isatui5.controller.AdminScreen", {
        onInit: function() {

          
        },

      //   onEntityChange: function(oEvent) {
      //     // Get the ComboBox instance
      //     var oComboBox = oEvent.getSource();
          
      //     // Get the selected key from the ComboBox
      //     var selectedKey = oComboBox.getSelectedKey();
      
      //     // Debugging: Check if selectedKey is available
      //     if (!selectedKey) {
      //         console.warn("No item selected in ComboBox.");
      //         return;
      //     }
      
      //     // Hide all tables initially
      //     this.byId("idProductsTablea").setVisible(false);
      //     this.byId("idProductsTableb").setVisible(false);
      //     this.byId("idProductsTablec").setVisible(false);
      
      //     // Show and bind the appropriate table based on the selected key
      //     if (selectedKey === "CustomersData") {
      //         this.byId("idProductsTablea").setVisible(true);
      //         this.byId("idProductsTablea").bindItems({
      //             path: "/EntitySet/CustomersData",
      //             template: this.byId("idProductsTablea").getBindingInfo("items").template
      //         });
      //     } else if (selectedKey === "ProjectsData") {
      //         this.byId("idProductsTableb").setVisible(true);
      //         this.byId("idProductsTableb").bindItems({
      //             path: "/EntitySet/ProjectsData",
      //             template: this.byId("idProductsTableb").getBindingInfo("items").template
      //         });
      //     } else if (selectedKey === "Users") {
      //         this.byId("idProductsTablec").setVisible(true);
      //         this.byId("idProductsTablec").bindItems({
      //             path: "/EntitySet/Users",
      //             template: this.byId("idProductsTablec").getBindingInfo("items").template
      //         });
      //     } else {
      //         console.warn("Unexpected key selected:", selectedKey);
      //     }
      // }
      
    
            onEntityChange: function(oEvent) {
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
              }
    
      
      });
    }
  );
  