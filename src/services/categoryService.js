import Category from '../models/category';

export default (() => {

  let all = () => {
    return Category.all();
  };

  let find = (id) => {
    return Category.findById(id);
  };

  let create = (data) => {
    let category = new Category(data);
    return category.create();
  };

  let update = (id, data) => {
    let category = new Category(data);
    return category.update(id);
  };

  return {
    all,
    find,
    create,
    update
  };
})();