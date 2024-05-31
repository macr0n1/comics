import Image from "next/image";

const Header = () => {
	return (
		<header className="flex justify-between items-center max-lg:flex-col-reverse">
			<div className="lg:w-1/2 max-lg:text-center flex flex-col max-lg:flex-col-reverse">
				<div className="max-lg:mt-5 flex gap-3 max-lg:flex-col">
					<a href="#comics" className="font-medium text-3xl px-4 py-2 border border-black rounded-xl">start reading</a>
					<a href="#game" className="font-medium text-3xl px-4 py-2 border border-black rounded-xl">play game</a>
				</div>
				<p className="mt-5 text-xl font-light"><span className="font-medium">CodeK</span> - is a thrilling cyberpunk comics where you hack, fight, and survive in a dystopian future dominated by technology</p>
			</div>
            <Image src='/codek.png' height={150} width={255} />
		</header>
	);
}

export default Header;