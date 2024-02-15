import { useContext } from "react";
import { SingleNews } from "../../context/newsContext";
import { formattedDate } from "../../utils/date-utils";

/* eslint-disable react/prop-types */
export default function NewsNoThumb({ news }) {
	const { setModalNews } = useContext(SingleNews);

	function handleClick() {
		setModalNews(() => ({
			showModal: true,
			modalNewsDetails: { ...news },
		}));
	}
	return (
		<div className="col-span-12 md:col-span-6 lg:col-span-4">
			<div className="col-span-12 md:col-span-4">
				<a onClick={handleClick}>
					<h3 className="mb-2.5 text-[22px] font-bold ">
						{news?.title}
					</h3>
				</a>
				<p className="text-base text-[#292219]">{news?.description}</p>
				<p className="mt-5 text-base text-[#94908C]">
					{formattedDate(news?.publishedAt, "short")}
				</p>
			</div>
		</div>
	);
}
