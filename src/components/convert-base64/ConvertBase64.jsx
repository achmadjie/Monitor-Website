import imageToBase64 from "image-to-base64/browser"

const ConvertBase64 = async (fileURL) => {
	const resConvert = await imageToBase64(fileURL);
	return resConvert;
};
export default ConvertBase64;
