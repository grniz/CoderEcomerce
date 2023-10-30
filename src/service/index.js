import User from "../dao/User.js"
import Product from "../dao/Product.js"
import Cart from "../dao/Cart.js"

import userRepository from "../repository/UserRepository.js"
import productRepository from "../repository/ProductRepository.js"
import cartRepository from "../repository/CartRepository.js"


export const UserService = new userRepository(new User());
export const ProductService = new productRepository(new Product());
export const CartService = new cartRepository(new Cart());