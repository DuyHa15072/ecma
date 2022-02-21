import axios from "axios";
import NavAdmin from "../../components/NavAdmin";
import { add } from "../../api/products";

const ProductsAddPage = {
    render() {
        return /* html */ `
        
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-xl mx-auto font-bold text-gray-900">
                        Thêm mới tin tức
                    </h1>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        <form action="#" method="POST" id="form-add-products">
                        <div class="shadow overflow-hidden sm:rounded-md">
                         
                            <div class="col-span-6 sm:col-span-3">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                                   Tên Sản Phẩm
                                </span>
                                <input type="text" id="name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                               Hình Ảnh
                            </span>
                            
                            <div class="grid grid-cols-2 gap-8">
                            <div>
                                <input type="file"  
                                    class="border border-black"
                                    id="img"
                                >
                            </div>
                            <div><img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png" id="previewImage" /></div>
                        </div>
                        </div>
                            <div class="col-span-6 sm:col-span-3">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                           Giá
                            </span>
                            <input type="number" id="priceSp" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Chi Tiết Sản Phẩm
                        </span>
                        <textarea id="detailSp" id="" cols="30" rows="10" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"></textarea>
                    </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Thêm Sản Phẩm                       </button>
                            </div>
                        </div>  
                        </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    
                    `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add-products");
        const CLOUDINARY_PRESET = "k9yoyn7r";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dev7lem1d/image/upload";
        formAdd.addEventListener("submit", async(e) => {
            e.preventDefault();
            // Lấy giá trị của input file
            const file = document.querySelector("#img").files[0];
            // Gắn vào đối tượng formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary, để upload ảnh lên
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call API thêm bài viết
            add({
                name: document.querySelector("#name").value,
                img: data.url,
                price: document.querySelector("#priceSp").value,
                detail: document.querySelector("#detailSp").value,
            });
            document.location.href = "/admin/products";
        });
    },
};
export default ProductsAddPage;