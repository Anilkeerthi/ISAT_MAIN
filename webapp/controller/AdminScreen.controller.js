sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.isat.isatui5.controller.AdminScreen", {
        onInit: function() {

          
        },

        backToDashBoard:function(){
          var route = this.getOwnerComponent().getRouter();
          route.navTo("RouteDashboard")
      },

      
    
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
  