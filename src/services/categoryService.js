import {
  categories
} from '../store/mockData';
import {
  API_ROOT
} from '../store/constants';

module.exports = (() => {
  let getCategories = () => {
    categories.forEach(category => {
      category._link = API_ROOT + category.id;
    });
    return categories;
  };

  let getCategory = id => categories.filter(
    function(category) {
      return category.id === id;
    })[0];

  return {
    getCategories: getCategories,
    getCategory: getCategory
  };
})();