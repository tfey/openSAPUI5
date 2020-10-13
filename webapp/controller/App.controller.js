sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/base/Log",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Log, JSONModel, formatter, filter, FilterOperator) {
	"use strict";

	return Controller.extend("opensap.movies.controller.App", {
		
		formatter: formatter,
		
		onInit: function () {
			Log.info("Controller has been initialized!");
		},
		
		onBefore: function () {
			Log.info("The view will be shortly rendered!");
		},
		
		onAfterRendering: function () {
			Log.info("The view has been rendered!");
		},
		
		onPress: function (sValue) {
			sap.ui.require(["sap/m/MessageToast"], function (oMessage) {
				oMessage.show("Searching..." + " " + sValue);
			});
		},
		
		onExit: function () {
			Log.info("Controller will shortly be destroyed");
		}
	});
});