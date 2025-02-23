export default eventHandler(async (event) => {
  return await queryCollection(event, 'posts')
    .where('isPublished', '=', true)
    .where('date', '<', new Date().toISOString())
    .order('date', 'DESC')
    .limit(10)
    .skip(0)
    .all();
})
