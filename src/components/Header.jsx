import Nofal from '../assets/jendelaMedia.png';

function Header() {
    return (
        <header className="flex items-center justify-between bg-gradient-to-r from-[#213890] to-black relative px-4 py-4">
        {/* Logo */}
        <div className="container mx-auto">
            <img src="/public/jendelaMedia.png" alt="logo" width="180" />
            {/* <img src={Nofal} alt="logo" width="180" /> */}
        </div>

        {/* Tombol Login */}
        <button className="flex flex-row px-[20px] rounded-[5px] h-[35px] cursor-pointer transition-all duration-300 bg-[#213890] text-white items-center absolute right-[125px] top-5 hover:shadow-md hover:ring-2 hover:ring-white hover:bg-white hover:text-black">
            <i className="fas fa-sign-in-alt text-[12px] mr-2"></i>
            <span>Login</span>
        </button>

        {/* Tombol Register */}
        <button className="flex flex-row px-[10px] rounded-[5px] h-[35px] cursor-pointer transition-all duration-300 bg-[#213890] text-white items-center absolute right-[20px] top-5 hover:shadow-md hover:ring-2 hover:ring-white hover:bg-white hover:text-black">
            <i className="fas fa-user-plus text-[12px] mr-2"></i>
            <span>Register</span>
        </button>
        </header>
    );
}

export default Header;
