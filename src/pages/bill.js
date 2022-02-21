import header from "../comboudun/header";
import Banner from "../comboudun/banner";
import footer from "../comboudun/footer";

const Bill = {
        render() {
            let cart = [];
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }
            console.log(cart);
            return /* html */ `

${header.render()} ${Banner.render()}
<h1 class="text-center">Thanh Toán</h1>
<div class="m-20 ">

    <div class="mt-10 sm:mt-0">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">Tên</label>
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium text-gray-700">Họ Tên Đệm</label>
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" name="email-address" id="email-address" autocomplete="email"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="gioiTinh" class="block text-sm font-medium text-gray-700">Giới Tính</label>
                  <select id="gioiTinh" name="gioiTinh" autocomplete="gioiTinh"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Giới tính của bạn ?</option>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khách</option>
                  </select>
                </div>

                <div class="col-span-6">
                  <label for="street-address" class="block text-sm font-medium text-gray-700">Địa Chỉ</label>
                  <input type="text" name="street-address" id="street-address" autocomplete="street-address"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Số Điện Thoại</label>
                <input type="number" name="phoneNumber" id="phoneNumber" autocomplete="phoneNumber"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="">
      <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
        <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
          <div class="flex items-start justify-between">
            <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
              Hóa Đơn
            </h2>
            <div class="ml-3 h-7 flex items-center">
              <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Close panel</span>

                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div class="mt-8">
          ${cart.map((item) => /* html */`
            <div class="flow-root">
              <div role="list" class="-my-6 divide-y divide-gray-200">
                <div class="py-6 flex">
                  <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                    <img src="${item.img}"
                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                      class="w-full h-full object-center object-cover">
                  </div>

                  <div class="ml-4 flex-1 flex flex-col">
                    
                    <div>
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#" class="no-underline text-black">
                          ${item.name}
                          </a>
                        </h3>
                        <p class="ml-4">
                        ${item.price}
                        </p>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">
                        Salmon
                      </p>
                    </div>
                    <div class="flex-1 flex items-end justify-between text-sm">
                      <p class="text-gray-500">
                      ${item.quantity}
                      </p>

                      <div class="flex">
                        <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">xóa</button>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            `).join("")}
          </div>
        </div>

        <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Tổng Tiền</p>
            <p>$262.00</p>
          </div>
          <p class="mt-0.5 text-sm text-gray-500">Thuế vận chuyển được tính khi thanh toán.</p>
          <div class="mt-6">
            <a href="/newstb"
              class="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black no-underline hover:bg-indigo-700">Thanh Toán</a>
          </div>
          <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
            <p>
              or <button type="button" class="text-black font-medium hover:text-indigo-500">Tiếp Tục Mua Sắm<span
                  aria-hidden="true"> &rarr;</span></button>
            </p>
          </div>
        </div>
      </div>
    </div>
  <div class="">
      
  </div>

</div>
${footer.render()}`;
    },
};
export default Bill;