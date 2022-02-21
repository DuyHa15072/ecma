import axios from "axios";
import {get, update } from "../../api/posts";
import NavAdmin from "../../components/NavAdmin";

const editNews = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        <div class="min-h-full">
        ${NavAdmin.render()}
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-xl mx-auto font-bold text-gray-900">
                    Sửa Tin Tức
                </h1>
            </div>
        </header>
        <main>
        <div class="max-w-5xl mx-auto">
        <div class="-my-0 sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <form id="form-edit-news" action="#" method="POST" class=" ">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label class="block">
                        <span
                          class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                          Tên Tin Tức
                        </span>
                        <input
                          id="tieuDe"
                          type="text"
                          name=""
                          class="mt-1 px-8 py-2 w-full bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          placeholder=""
                          value = "${data.title}"
                          />
                      </label>
                    </div>
                    <div>
                   
                    </div>
                    <div class="col-span-3 sm:col-span-2">
                    <label class="block">
                      <span
                        class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        Nội Dung
                      </span>
                      <input
                        id="noiDung"
                        type="text"
                        name=""
                        class="mt-1 px-8 py-2 w-full bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder=""
                        value = "${data.title}"
                        />
                    </label>
                  </div>
                    <div class="col-span-3 sm:col-span-2">
                  </div>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                      Ngày Viết
                  </span>
                  <input type="date" id="ngayDang" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" value="${data.date}" />
                  </div>
                  <div>
                    <label
                      for="about"
                      class="block text-sm font-medium text-gray-700">
                      Chi Tiết
                    </label>
                    <div class="mt-1">
                      <textarea
                        id="chiTiet"
                        name="about"
                        rows="3"
                        class="mt-1 w-full px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="">${data.content}</textarea>
                    </div>
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
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </main>
        </div>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit-news");
        const productImg = document.querySelector("#img");
        const imgProduct = document.querySelector("#img-product");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/project-js/image/upload";
        const CLOUDINARY_PRESET = "kt3opnmh";
        let productImageLink = "";

        // handle sự kiện change để xem ảnh trên local
        imgProduct.addEventListener("change", (e) => {
            productImg.src = URL.createObjectURL(e.target.files[0]);
        });

        formEdit.addEventListener("submit", async(e) => {
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
                title: document.querySelector("#tieuDe").value,
                img: productImageLink || productImg.src,
                content: document.querySelector("#noiDung").value,
                date: document.querySelector("#ngayDang").value,
                desc: document.querySelector("#chiTiet").value,
            });
            window.location.href = "/admin/news";
        });
    },
};
export default editNews;