import Navigo from "navigo"; // navigo là 1 class, đối tượng
import homePage from "./pages/home";
import Introduce from "./pages/introduce";
import Products from "./pages/AllProducts";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import ProductDetail from "./pages/productdetails";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Cart from "./pages/cart";
import Bill from "./pages/bill";
import NewsTb from "./pages/newstb";
import productsPage from "./pages/products/index";

import StatisticalPage from "./admin/statistical";
import AddNewsPage from "./admin/news/add";
import newsPage from "./admin/news/index";
import editNews from "./admin/news/edit";

import UserPage from "./admin/user";
import AddUserPage from "./admin/user/add";
import editUser from "./admin/user/edit";

import ProductsAddPage from "./admin/products/add";
import ProductsPage from "./admin/products";
import ProductsEdit from "./admin/products/edit";

const router = new Navigo("/", { linksSelector: "a", hash: true }); // router thừa kế các thuộc tính của NAvigo, link để không load trang

const print = async(content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({ // phương thức on nằm trong navigo để duyệt qua tất cả các đường dẫn
    // () => : đây là arrow function rút ngắn lại của function expression
    "/": () => {
        print(homePage);
    },
    "/gioithieu": () => {
        print(Introduce);
    },
    "/sanpham": () => {
        print(Products);
    },
    "/blog": () => {
        print(Blog);
    },
    "/lienhe": () => {
        print(Contact);
    },
    "/signin": () => {
        print(Signin);
    },
    "/cart": () => {
        print(Cart);
    },
    "/bill": () => {
        print(Bill);
    },
    "/signup": () => {
        print(Signup);
    },
    "/newstb": () => {
        print(NewsTb);
    },
    "/allproducts": () => {
        print(Products);
    },
    "#/products": () => {
        print(productsPage);
    },
    "/products/:id": ({ data }) => {
        print(ProductDetail, data.id);
    },
    "/admin/dashboard": () => {
        print(StatisticalPage);
    },
    "/admin/news": () => {
        print(newsPage);
    },
    "/admin/news/add": () => {
        print(AddNewsPage);
    },
    "/admin/news/:id/edit": ({ data }) => {
        print(editNews, data.id);
    },
    "/admin/user": () => {
        print(UserPage);
    },
    "/admin/user/add": () => {
        print(AddUserPage);
    },
    "/admin/user/:id/edit": () => {
        print(editUser);
    },
    "/admin/products": () => {
        print(ProductsPage);
    },
    "/admin/products/add": () => {
        print(ProductsAddPage);
    },
    "/admin/products/:id/edit": ({ data }) => {
        print(ProductsEdit, data.id);
    },

});
router.resolve(); // kích hoạt thằng router để chạy