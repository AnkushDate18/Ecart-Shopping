Vue.createApp({
	data() {
		return {
			a: 1
		};
	},
	created() {
		// `this` points to the vm instance
		console.log("a is: " + this.a); // => "a is: 1"
	}
});
