let watcher;

Vue.createApp({
	data() {
		return {
			total: 0,
			results: [],
			//products: [],
			listLength: 0,
			cart: [],
			search: "cat",
			lastSearch: "",
			loading: false,
		};
	},
	methods: {
		addToCart(product) {
			this.total += product.price;
			const item = this.cart.find((item) => item.id === product.id);
			if (item) {
				item.qty++;
			} else {
				this.cart.push({
					id: product.id,
					title: product.title,
					price: product.price,
					qty: 1,
				});
			}
		},
		currency(price) {
			return "₹ ".concat(price.toFixed(2));
		},
		inc(item) {
			//console.log("inc", item);
			item.qty++;
			this.total += item.price;
		},
		dec(item) {
			//console.log("dec", item);
			item.qty--;
			this.total -= item.price;
			if (item.qty <= 0) {
				const i = this.cart.indexOf(item);
				this.cart.splice(i, 1);
			}
		},
		onSubmit() {
			this.results = [];
			//this.products = [];
			this.listLength = 0;
			this.loading = true;
			fetch(`/search?q=${this.search}`)
				.then((response) => response.json())
				.then((body) => {
					this.lastSearch = this.search;
					this.results = body;
					// this.products = body;
					this.appendResult();
					this.loading = false;
				});
		},
		appendResult() {
			console.log("Adding product items to products");
			if (this.products.length < this.results.length) {
				this.listLength += 4;
			}
		},
	},
	created() {
		this.onSubmit();
	},
	updated() {
		const sensor = document.querySelector("#product-list-bottom");
		watcher = scrollMonitor.create(sensor);
		watcher.enterViewport(this.appendResult);
	},
	beforeUpdate() {
		if (watcher) {
			watcher.destroy();
			watcher = null;
		}
	},
	computed: {
		products() {
			return this.results.slice(0, this.listLength);
		},
	},
}).mount("#app");
