import axios from "axios";
import { update, get } from "../../api/products";

const ProductsEdit = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`<div class="max-w-5xl mx-auto">
    <form action="#" method="POST">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="lg:flex lg:items-center lg:justify-between">
    <div class="flex-1 min-w-0">
        <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
        >
        Edit Tin Tức
        </h2>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <a href="/admin/news" class="sm:ml-3">
            <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <!-- Heroicon name: solid/check -->
                <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Quay Lại
            </button>
        </a>
    </div>
    </div>
</div>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <form action="#" method="POST" id="form-edit-products">
            <div class="shadow overflow-hidden sm:rounded-md">
            
                <div class="col-span-6 sm:col-span-3">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                    Tên Sản Phẩm
                    </span>
                    <input type="text" id="name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" value="${data.name}"/>
                </div>
                <div>
                <label class="block text-sm font-medium text-gray-700">
                  Ảnh
                </label>
                <img  width= "250px" src="${data.img}" alt="" srcset="" id="img">
              </div>
             
              <div
                class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
               
                <input
                id="img-product" type="file" class="mt-1 px-8 py-2 w-full bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder=""/>
            </div>
                <div class="col-span-6 sm:col-span-3">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
            Giá
                </span>
                <input type="number" id="priceSp" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" value="${data.price}" />
            </div>
            <div class="col-span-6 sm:col-span-3">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                Chi Tiết Sản Phẩm
            </span>
            <textarea id="detailSp" id="" cols="30" rows="10" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">${data.detail}</textarea>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Update
        </button>
      </div>
            </div>  
            </form>
            </div>
        </div>
        </div>
`;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit-products");
        const productImg = document.querySelector("#img");
        const imgProduct = document.querySelector("#img-product");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dev7lem1d/image/upload";
        const CLOUDINARY_PRESET = "k9yoyn7r";
        let productImageLink = "";

        // handle sự kiện change để xem ảnh trên local
        imgProduct.addEventListener("change", (e) => {
            productImg.src = URL.createObjectURL(e.target.files[0]);
        });

        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgProduct.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);

                const { data } = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                productImageLink = data.url;
            }

            update({
                id,
                name: document.querySelector("#name").value,
                img: productImageLink || productImg.src,
                price: document.querySelector("#priceSp").value,
                detail: document.querySelector("#detailSp").value,
            });
            window.location.href = "/admin/products";
        });
    },
};
export default ProductsEdit;