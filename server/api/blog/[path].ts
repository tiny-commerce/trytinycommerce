export default eventHandler(async (event) => {
  const { path } = getRouterParams(event)
  return await queryCollection(event, 'posts').path(path).first();
})
