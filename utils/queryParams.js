const amauntOnPage = 3
const maximumRows = 500

module.exports = function(queryParams){
  const filter = queryParams.filter || ''
  const sortBy = queryParams.sortBy || 'employee_id'
  const order = queryParams.order || 'asc'
  const offset = (queryParams.page-1) * amauntOnPage || 0
  const limit = queryParams.page ? amauntOnPage : maximumRows

  return {filter, sortBy, order, offset, limit}
}