/* eslint-disable react/prop-types */
import { useContext } from "react";
import { SingleNews } from "../../context/newsContext";
import { formattedDate } from "../../utils/date-utils";

export default function RightNewsNoThumb({ news }) {
	const { setModalNews } = useContext(SingleNews);

	function handleClick() {
		setModalNews(() => ({
			showModal: true,
			modalNewsDetails: { ...news },
		}));
	}

	return (
		<div className="col-span-12 md:col-span-8">
			<div className="col-span-12 md:col-span-4">
				<a onClick={handleClick}>
					<h3 className="my-2.5 text-xl font-bold lg:text-[20px]">
						{news.title}
					</h3>
				</a>
				<p className="text-base text-[#292219]">
					{news?.description ? news?.description.slice(0, 53) : null}
				</p>
				<p className="mt-5 text-base text-[#94908C]">
					{formattedDate(news.publishedAt, "short")}
				</p>
			</div>
		</div>
	);
}
