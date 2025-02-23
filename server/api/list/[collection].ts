export default eventHandler(async (event) => {
  const { collection } = getRouterParams(event)
  return await queryCollection(event, collection).all();
})
