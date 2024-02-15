import { TbWorld } from "react-icons/tb";
import { formattedDate } from "../../utils/date-utils";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Search from "./Search";

export default function Header() {
	const cdate = new Date();
	return (
		<nav className="border-b border-black py-6 md:py-8">
			<div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
				<div className="flex items-center space-x-4">
					<TbWorld size={22} color="#00d991" />
					<span>{formattedDate(cdate, "long")}</span>
				</div>

				<Logo />

				<Search />
			</div>
			<div className="container mx-auto mt-6">
				<NavBar />
			</div>
		</nav>
	);
}
