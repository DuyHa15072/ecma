import { reRender } from "../utils/rerender";

const header = {
        render() {
            return /* html */ `<div class="vapare">
        <header class=" sticky-top w-full">
            <div class="inner-header container ">
                <div class="logo">
                    <a href=""><img src="https://mcdn.nhanh.vn/store/16762/logo_1637162795_logo%20png-03.png" alt="" class="w-[200px]"></a>
                </div>

                <nav>
                    <ul class="main-menu">
                        <li><a href="/">Trang Chủ</a></li>
                        <li><a href="#">Giới thiệu</a></li>
                        <li><a href="#/sanpham">Sản Phẩm</a></li>
                        <li><a href="#">Blong</a></li>
                        <li><a href="#">Liên Hệ</a></li>
                    </ul>
                    
                </nav>
                <div class="icon">
                    <!-- <a href=""><i class="fas fa-user-lock" style="color: white !important;"></i></a> -->
                    <a href="" class="p-1"><i class="fas fa-search " style="color: white !important;"></i></a>
                    <a href="#/cart" class="p-1"><i class="fas fa-shopping-bag" style="color: white !important;"></i></a>
                    <a href="/signup" class="p-1"><i class="fas fa-fingerprint" style="color: white !important;"></i></a>
                    <a href="/signin" class="p-1"><i class="fas fa-user" style="color: white !important;"></i></a>
                    
                </div>
                ${localStorage.getItem("user") ? `
                <a href="/admin/dashboard"><div class="flex items-center"><span class="block py-3 px-4 text-white" id="email"></span></div></a>
                <div><a href="/" class="block py-3 px-4 text-white text-center  hover:bg-blue-500" id="logout">Logout</a></div>
                ` : ""}
            </div>

        </header> 
        <!-- -------------------------------------------- -->
`;
    },
    afterRender() {
        // lấy thông tin từ localStorage
        // JSON.parse chuyển từ chuỗi sang objec
        const email = document.querySelector("#email");
        const logout = document.querySelector("#logout");
        if (email) {
            email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
        }
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(header, "#app");
            });
        }
    },
};
export default header;