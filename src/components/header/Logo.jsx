import { useContext } from "react";
import siteLogo from "../../assets/logo.png";
import { NewsContext } from "../../context/newsContext";

export default function Logo() {
	const { setTerms } = useContext(NewsContext);
	function handleClick() {
		setTerms(() => ({ cat: null, search: "" }));
	}
	return (
		<button onClick={handleClick}>
			<img
				className="max-w-[100px] md:max-w-[165px]"
				src={siteLogo}
				alt="Lws"
			/>
		</button>
	);
}
