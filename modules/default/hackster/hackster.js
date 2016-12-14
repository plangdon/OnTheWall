/* global Module */

/* Magic Mirror
 * Module: Hackster
 *
 * By Paul Langdon
 * MIT Licensed.
 */

Module.register("hackster",{

	// Default module config.
	defaults: {
		text: "Hackster Rocks!"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
