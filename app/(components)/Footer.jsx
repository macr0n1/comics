import Image from "next/image";

const Footer = () => {
	return (
		<footer className='flex justify-between items-center max-lg:flex-col gap-5'>
			<Image src='/codek.png' height={120} width={204} />
			<p className="font-light text-3xl">knutd college project ©</p>
			<ul className="flex gap-4">
				<li><a href="#"><Image src='/yt.svg' height={30} width={30} /></a></li>
				<li><a href="#"><Image src='/ig.svg' height={30} width={30} /></a></li>
				<li><a href="#"><Image src='/tg.svg' height={30} width={30} /></a></li>
				<li><a href="#"><Image src='/ds.svg' height={30} width={30} /></a></li>
			</ul>
		</footer>
	);
}

export default Footer;