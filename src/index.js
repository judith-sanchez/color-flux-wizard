class ColorConverter {
	constructor(color) {
		this.color = color;
	}

	validateColorFormat() {
		if (
			/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(this.color) ||
			/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(this.color) ||
			/^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/.test(
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

// module.exports = ColorConverter;

const colorFluxWizard = new ColorConverter('#FFFFFF');
colorFluxWizard.displayColors();
