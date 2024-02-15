import { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { NewsContext } from "../../context/newsContext";
import useDebounce from "../../hooks/useDebounce";

export default function Search() {
	const { setTerms } = useContext(NewsContext);
	const [text, setText] = useState("");

	const doSearch = useDebounce((serachText) => {
		setTerms((prev) => ({ ...prev, search: serachText }));
	}, 1000);

	function handleChange(e) {
		const value = e.target.value;
		setText(value);
		doSearch(value);
	}

	return (
		<div className="flex items-center space-x-3 lg:space-x-8">
			{/* <IoSearch size={22} color="#060606" onClick={handleClick} /> */}
			<form
				className="max-w-sm px-4"
				onSubmit={(e) => e.preventDefault()}
			>
				<div className="relative  ">
					<IoSearch
						size={18}
						color="#060606"
						className="absolute top-0 bottom-0 w-6 h-6 my-auto left-3 -z-[1]"
					/>

					<input
						type="text"
						placeholder="Search"
						value={text}
						onChange={handleChange}
						className="w-[30px] focus:w-[200px] bg-transparent py-3 pl-12 pr-4 text-gray-500 focus:border rounded-md outline-none focus:bg-white focus:border-[#00d991]"
					/>
				</div>
			</form>
		</div>
	);
}
