import { useContext } from "react";
import { NewsContext } from "../../context/newsContext";

export default function NavBar() {
	const { setTerms } = useContext(NewsContext);

	function handleClick(value) {
		setTerms(() => ({ cat: value, search: "" }));
	}
	return (
		<ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
			<li>
				<button onClick={() => handleClick("general")}>General</button>
			</li>
			<li>
				<button onClick={() => handleClick("business")}>
					Business
				</button>
			</li>
			<li>
				<button onClick={() => handleClick("entertainment")}>
					Entertainment
				</button>
			</li>
			<li>
				<button onClick={() => handleClick("health")}>Health</button>
			</li>
			<li>
				<button onClick={() => handleClick("science")}>Science</button>
			</li>
			<li>
				<button onClick={() => handleClick("sports")}>Sports</button>
			</li>
			<li>
				<button onClick={() => handleClick("technology")}>
					Technology
				</button>
			</li>
		</ul>
	);
}
