const banner = document.querySelector('#page-banner');

console.log(banner.nodeType);
console.log(banner.hasChildNodes());

// Cloning the banner node
const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);