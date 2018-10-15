/**
 ** Arrange Function //! Which will arrange letters in a circle
 */

export function arrange({ fwidth, fheight }) {
	var radius = 200;
	let width = 300;
	let height = 300;
	let angle = 0;
	let step = (2 * Math.PI) / fields.length;
	fields.each(function() {
		let x = Math.round(width / 2 + radius * Math.cos(angle) - fwidth / 2);
		var y = Math.round(height / 2 + radius * Math.sin(angle) - fheight / 2);

		$(this).css({
			left: x + "px",
			top: y + "px"
		});
		angle += step;
	});
}
