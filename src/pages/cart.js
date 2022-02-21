import footer from "../comboudun/footer";
import header from "../comboudun/header";
import Banner from "../comboudun/banner";
import { reRender } from "../utils/rerender";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";

const Cart = {
        render() {
            let cart = [];
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }
            return /* html */ `
        ${header.render()} ${Banner.render()}
        <div><h1 class="text-center">Giỏ Hàng</h1></div>
        <div class="flex flex-col m-10">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
               
                  <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tên
                 </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ảnh
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Giá
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Số lượng
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tổng Giá
                  </th>
                  </tr>
                  
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                ${cart.map((item) => /* html */`
                  <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">${item.name}</div>
                </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img class="h-10 w-10 rounded-full" src="${item.img}" alt="">
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                          ${item.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">${item.price}đ</div>

                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        XL
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button data-id="${item.id}" class="btn btn-increase">+</button>
                    ${item.quantity}
                    <button data-id="${item.id}" class="btn btn-decrease">-</button>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${item.quantity * item.price}.000 đ
                    </td>
                    <td>
                    
                    
                </td>
                <td>
                    <button data-id="${item.id}" class="btn btn-remove">Xóa</button>
                </td>
                  </tr>
                  `).join("")}
                  <!-- More people... -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <a href="/bill" class="no-underline m-[10px]">
      <button type="submit" class="mt-10  bg-black no-underline m-auto border border-transparent rounded-md py-3  px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thanh Toán</button>
      </a>
      ${footer.render()}
 `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((button) => {
            button.addEventListener("click", () => {
                const { id } = button.dataset;
                if (button.classList.contains("btn-increase")) {
                    increaseQuantity(id);
                    reRender(Cart, "#app");
                } else if (button.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(Cart, "#app");
                    });
                } else {
                    removeItemInCart(id, () => {
                        reRender(Cart, "#app");
                    });
                }
            });
        });
    },
};
export default Cart;