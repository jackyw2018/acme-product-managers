// A function that receives an array of products and returns an array of product managers
export const getProductManagers = products => {
  return products.reduce((managers, product) => {
    if (!product.userId) return managers;
    if (!managers.some(manager => manager.id === product.userId)) {
      managers.push(product.user);
    }
    return managers;
  }, []);
};

// A function that receives an array of products and returns a Boolean whether there is an opening
export const hasOpening = products => {
  return products.some(product => product.userId === null);
};

// A function that receives an array of products and return a sorted array of products based on id
export const sortArrayOfObjectsById = arrObj => {
  return arrObj.sort((first, second) => {
    return first.id - second.id;
  });
};

// A function that receives an array of products and return a sorted array of products based on id
export const sortArrayOfObjectsByName = arrObj => {
  return arrObj.sort((first, second) => {
    if (first.name < second.name) return -1;
    if (first.name > second.name) return 1;
  });
};
