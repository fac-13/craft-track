export default () => {
	const options = ["white" ,"black", "navy", "sandybrown", "darkred", "lightsalmon", "steelblue", "lightseagreen", "palevioletred"];
	return options[Math.floor(Math.random() * options.length)];
};