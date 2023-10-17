class ColorConverter {
	constructor(color) {
		this.color = color;
	}

	validateColorFormat() {
		if (
			/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(this.color) ||
			/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(this.color) ||
			/^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(1|0(\.\d+)?)\s*\)$/.test(
				this.color,
			)
		) {
			return true;
		} else {
			console.log(
				'Invalid color format. Accepted formats are: Hex, RGB, or RGBA.',
			);
			console.log('Examples: #RRGGBB or #RGB, rgb(R, G, B), rgba(R, G, B, A)');
			return false;
		}
	}

	identifyColorFormat() {
		if (this.color.startsWith('#')) {
			return 'Hex';
		} else if (this.color.startsWith('rgb(')) {
			return 'RGB';
		} else if (this.color.startsWith('rgba(')) {
			return 'RGBA';
		}
	}

	toHex() {
		if (this.color.startsWith('rgb(') || this.color.startsWith('rgba(')) {
			const values = this.color.match(/\d+/g);
			const hex = `#${values
				.map(value => {
					const hexValue = parseInt(value, 10).toString(16);
					return hexValue.length === 1 ? '0' + hexValue : hexValue;
				})
				.join('')}`;
			return `Hex: ${hex}`;
		} else {
			return `Hex: ${this.color}`;
		}
	}

	toRgb() {
		if (this.color.startsWith('#')) {
			const hex = this.color.replace('#', '');
			const r = parseInt(hex.substring(0, 2), 16);
			const g = parseInt(hex.substring(2, 4), 16);
			const b = parseInt(hex.substring(4, 6), 16);
			return `RGB: rgb(${r}, ${g}, ${b})`;
		} else if (this.color.startsWith('rgba(')) {
			return `RGB: ${this.color
				.replace(/rgba/, 'rgb')
				.replace(/,\s*[\d.]+\)/, ')')}`;
		} else {
			return `RGB: ${this.color}`;
		}
	}

	toRgba() {
		if (this.color.startsWith('#')) {
			return `RGBA: rgba(${this.toRgb().match(/\d+/g).join(', ')}, 1)`;
		} else if (this.color.startsWith('rgb(')) {
			return `RGBA: ${this.color
				.replace(/rgb/, 'rgba')
				.replace(/\)$/, ', 1)')}`;
		} else if (this.color.startsWith('rgba(')) {
			return `RGBA: ${this.color}`;
		} else {
			return `RGBA: ${this.color}`;
		}
	}

	displayColors() {
		// console.log(this.color);
		if (this.validateColorFormat()) {
			const colorFormat = this.identifyColorFormat();
			console.log(`Identified color format: ${colorFormat}`);

			const hex = this.toHex();
			const rgb = this.toRgb();
			const rgba = this.toRgba();

			console.log(hex);
			console.log(rgb);
			console.log(rgba);
		}
	}
}

module.exports = ColorConverter;

const testHEX = new ColorConverter('#681F83');
testHEX.displayColors();

const testRGB = new ColorConverter('rgb(104, 31, 131)');
testRGB.displayColors();

const testRGBA = new ColorConverter('rgba(104, 31, 131, 1)');
testRGBA.displayColors();

/* 
// Test Cases

// Hex to RGB Conversion
const hexToRgb1 = new ColorConverter('#FFA500');
hexToRgb1.displayColors(); // Should convert to RGB: rgb(255, 165, 0)

const hexToRgb2 = new ColorConverter('#ABC');
hexToRgb2.displayColors(); // Should convert to RGB: rgb(170, 187, 204)

const hexToRgb3 = new ColorConverter('#00FF00');
hexToRgb3.displayColors(); // Should convert to RGB: rgb(0, 255, 0)

// RGB to Hex Conversion
const rgbToHex1 = new ColorConverter('rgb(255, 165, 0)');
rgbToHex1.displayColors(); // Should convert to Hex: #FFA500

const rgbToHex2 = new ColorConverter('rgb(0, 255, 0)');
rgbToHex2.displayColors(); // Should convert to Hex: #00FF00

const rgbToHex3 = new ColorConverter('rgb(100, 100, 100)');
rgbToHex3.displayColors(); // Should convert to Hex: #646464

// Hex to RGBA Conversion
const hexToRgba1 = new ColorConverter('#FFA500');
hexToRgba1.displayColors(); // Should convert to RGBA: rgba(255, 165, 0, 1)

const hexToRgba2 = new ColorConverter('#ABC');
hexToRgba2.displayColors(); // Should convert to RGBA: rgba(170, 187, 204, 1)

const hexToRgba3 = new ColorConverter('#00FF00');
hexToRgba3.displayColors(); // Should convert to RGBA: rgba(0, 255, 0, 1)

// RGB to RGBA Conversion
const rgbToRgba1 = new ColorConverter('rgb(255, 165, 0)');
rgbToRgba1.displayColors(); // Should convert to RGBA: rgba(255, 165, 0, 1)

const rgbToRgba2 = new ColorConverter('rgb(0, 255, 0)');
rgbToRgba2.displayColors(); // Should convert to RGBA: rgba(0, 255, 0, 1)

const rgbToRgba3 = new ColorConverter('rgb(100, 100, 100)');
rgbToRgba3.displayColors(); // Should convert to RGBA: rgba(100, 100, 100, 1)

// RGBA to Hex Conversion
const rgbaToHex1 = new ColorConverter('rgba(255, 165, 0, 0.5)');
rgbaToHex1.displayColors(); // Should convert to Hex: #FFA500

const rgbaToHex2 = new ColorConverter('rgba(0, 255, 0, 0.75)');
rgbaToHex2.displayColors(); // Should convert to Hex: #00FF00

const rgbaToHex3 = new ColorConverter('rgba(100, 100, 100, 0.2)');
rgbaToHex3.displayColors(); // Should convert to Hex: #646464
 */
