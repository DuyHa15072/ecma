const Header = {
    render() {
        return /* html */`<nav class="max-w-5xl mx-auto bg-orange-500">
            <ul class="flex">
                <li><a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Home Page</a></li>
                <li><a href="/about" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">About Page</a></li>
                <li><a href="/product" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Product Page</a></li>
            </ul>
            
        </nav>`;
    },
};
export default Header;