const API = process.env - example.NEXT_PUBLIC_API_URL;
const VERSION = process.env - example.NEXT_PUBLIC_API_VERSION;
const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getProductsAll: `${API}/api/${VERSION}/products`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    postProduct: `${API}/api/${VERSION}/products`,
    putProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: (limit) => `${API}/api/${VERSION}/users?limit=${limit}`,
    getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    postUser: `${API}/apI/${VERSION}/users`,
    putUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    deleteUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    userIsAvailable: `${API}/api/${VERSION}/users/is-available`,
  },
  categories: {
    getCategories: (limit) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    postCategories: `${API}/api/${VERSION}/categories/`,
    putCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    deleteCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getProductsFromCategory: (id) => `${API}/api/${VERSION}/categories/${id}/products/`,
  },
  files: {
    getFilen: (filename) => `${API}/api/${VERSION}/files/${filename}`,
    postFile: `${API}/api/${VERSION}/files/upload/`,
  },
};

export default endPoints;
