angular.module("myApp")

.controller("pixelController", ["$scope", function ($scope) {
		$scope.tech = {
			name: "Google Pixel",
			description: "It has the highest rated smartphone camera. Ever. A battery that lasts all day. Unlimited storage for all your photos and videos. And it’s the first phone with the Google Assistant built in.",
			img: "/img/pixel.png"
		};
}])
	.controller("laptopController", ["$scope", function ($scope) {
		$scope.tech = {
			name: "Razor Blade Pro",
			description: "Setting a new standard for desktop replacement notebooks, the Razer Blade Pro delivers on the promise of a true desktop experience in an incredibly thin form factor. With all-new NVIDIA Pascal™ based GeForce® GTX 1080 desktop class graphics, the world’s first ultra-low-profile mechanical keyboard powered by Razer Chroma™, and sporting a stunning 17-inch 4K IGZO G-SYNC display, the new Razer Blade Pro is the ultimate portable powerhouse.",
			img: "/img/bladepro.png"
		};
}])