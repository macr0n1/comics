import Image from "next/image";

const Home = () => {
	return (
		<main className="flex flex-col gap-14">
			<section className="text-center">
				<h2 className="font-semibold text-4xl">characters</h2>
				<ul className="mt-14 flex justify-between gap-24 font-light text-lg max-lg:flex-col md:gap-8">
					<li className="flex flex-col items-center gap-3">
						<Image src='/codek.png' height={238} width={140} />
						<h3 className="font-medium text-2xl">echo</h3>
						<p>skilled hacker with a mysterious past and unparalleled cyber abilities</p>
					</li>
					<li className="flex flex-col items-center gap-3">
						<Image src='/codek.png' height={238} width={140} />
						<h3 className="font-medium text-2xl">blaze</h3>
						<p>fearless street fighter renowned for her agility and fiery temper</p>
					</li>
					<li className="flex flex-col items-center gap-3">
						<Image src='/codek.png' height={238} width={140} />
						<h3 className="font-medium text-2xl">vex</h3>
						<p>elite corporate spy specializing in stealth and advanced gadgetry</p>
					</li>
					<li className="flex flex-col items-center gap-3">
						<Image src='/codek.png' height={238} width={140} />
						<h3 className="font-medium text-2xl">torque</h3>
						<p>rogue ai seeking freedom, capable of manipulating digital realities</p>
					</li>
				</ul>
			</section>
			<section className="text-center" id="game">
				<h2 className="font-semibold text-4xl">game</h2>
				<div className="mt-14 border border-black flex justify-center py-60 rounded-[64px]">
					<a href="#game"><Image src='/play.svg' height={58.32} width={50} className="cursor-pointer" /></a>
				</div>
			</section>
			<section className="text-center" id="comics">
				<h2 className="font-semibold text-4xl">comics</h2>
				<div className="mt-14 border border-black flex justify-center py-60 rounded-[64px]">
					<a href="#comics" className="font-light text-3xl px-4 py-2 border border-black rounded-xl flex gap-3">
						<span>read now</span>
						<Image src='/expand.svg' height={20} width={20} />
					</a>
				</div>
			</section>
		</main>
	);
}

export default Home;