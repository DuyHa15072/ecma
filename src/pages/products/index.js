import { getAll } from "../../api/products";

const productsPage = {
        async render() {
            const response = await getAll();
            return /* html */ `
        <h2 class="font-semibold text-2xl uppercase my-4">Sản Phẩm</h2>            
        <div class="grid grid-cols-3 gap-8">
            ${response.data.map((roducts) => `
                    <div class="border p-3">
                        <a href="/news/${roducts.id}">
                            <img src="${roducts.img}" alt="" />
                        </a>
                        <h3 class="my-3"><a href="/roducts/${roducts.id}" class="font-semibold text-lg text-orange-500 ">${roducts.name}</a></h3>
                        <p>${roducts.price}</p>
                        <p>${roducts.desc}</p>
                    </div>
            `).join("")}
        </div>
        `;
    },
};
export default productsPage;