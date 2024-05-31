import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import "./globals.css";

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className="px-12 max-w-screen-xl m-auto py-24 flex flex-col gap-14">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;