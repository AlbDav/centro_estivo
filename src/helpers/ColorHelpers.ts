export const isLight = (color: string): boolean => {
	if (color.length === 7) {
	  // convert #RRGGBB to R, G, B
	  const r = parseInt(color.substring(1, 3), 16);
	  const g = parseInt(color.substring(3, 5), 16);
	  const b = parseInt(color.substring(5, 7), 16);
	  // Calculate relative luminance
	  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
	  return yiq >= 200; // returns true if color is light, false otherwise
	} else {
	  throw new Error('Invalid color format. Expected #RRGGBB');
	}
  }