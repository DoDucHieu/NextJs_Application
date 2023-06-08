import Link from "next/link";

const NavBar = (): React.ReactElement => {
    return (
        <div className=" w-full h-16 bg-gray-200 text-red-500 flex justify-center items-center ">
            <Link href={"/"}>Home page</Link>
            <Link href={"/new"}>New</Link>
        </div>
    );
};

export default NavBar;
