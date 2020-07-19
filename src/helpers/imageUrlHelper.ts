function imageUrlHelper(imageName: String)
{
    return require(process.env.REACT_APP_IMAGES_PATH! + imageName)
}
export default imageUrlHelper;