import { add, get } from "../../api/users";

const editUser = {
    async render() {
        const { data } = await get(5);
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
        <div class="shadow overflow-hidden sm:rounded-md">
        <form action="" id="form-edit-products">
            <div class="col-span-6 sm:col-span-3">
                <span
                    class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                    Tên Sản Phẩm
                </span>
                <input type="text" id="tieuDe"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    value="${data.title}" />
            </div>
            <div class="col-span-6 sm:col-span-3">
                <img  id="img" src="${data.img}" alt="">
                <input type="file" name="hinhanh"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    value=""/>
    
            </div>
            <div class="col-span-6 sm:col-span-3">
                <span
                    class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                    Chi Tiết Sản Phẩm
                </span>
                <textarea id="chiTet" id="" cols="30" rows="10"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">${data.desc}</textarea>
            </div>

            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save Edit </button>
            </div>
           </form>
        </div>
    </form>
</div>
`;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-edit-products");
        formAdd.addEventListener("submit", (e) => {
            e.preventDefault();
            const postFake = {

                title: document.querySelector("#tieuDe").value,
                img: document.querySelector("#img").value,
                detail: document.querySelector("#chiTet").value,
            };
            add(postFake)
                .then((result) => console.log(result.data))
                .catch((error) => console.log(error));
            // axios.post("https://5e79b4b817314d00161333da.mockapi.io/posts", postFake);
        });
    },
};
export default editUser;