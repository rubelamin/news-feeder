/* eslint-disable react/prop-types */
import { formattedDate } from "../../utils/date-utils";

import { useContext } from "react";
import noThumb from "../../assets/no-image.png";
import { SingleNews } from "../../context/newsContext";

export default function RightNewsWThumb({ news }) {
	const { setModalNews } = useContext(SingleNews);

	function handleClick() {
		setModalNews(() => ({
			showModal: true,
			modalNewsDetails: { ...news },
		}));
	}

	const thumb = news.urlToImage;
	return (
		<div className="col-span-12 mb-6 md:col-span-8">
			<img className="w-full" src={thumb ? thumb : noThumb} alt="thumb" />

			<div className="col-span-12 mt-6 md:col-span-4">
				<a onClick={handleClick}>
					<h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
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
