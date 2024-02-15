/* eslint-disable react/prop-types */
import { useContext } from "react";
import noThumb from "../../assets/no-image.png";
import { SingleNews } from "../../context/newsContext";
import { formattedDate } from "../../utils/date-utils";

export default function NewsWithThumb({ news }) {
	const { setModalNews } = useContext(SingleNews);

	function handleClick() {
		setModalNews(() => ({
			showModal: true,
			modalNewsDetails: { ...news },
		}));
	}

	const thumbImg = news?.urlToImage;

	return (
		<div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
			<div className="col-span-12 md:col-span-6">
				<a onClick={handleClick}>
					<h3 className="mb-2.5 text-[22px] font-bold ">
						{news?.title}
					</h3>
				</a>
				<p className="text-base text-[#292219]">{news?.description}</p>
				<p className="mt-5 text-base text-[#5C5955]">
					{formattedDate(news?.publishedAt, "short")}
				</p>
			</div>

			<div className="col-span-12 md:col-span-6">
				<img
					className="w-full"
					src={thumbImg ? thumbImg : noThumb}
					alt="thumb"
				/>
			</div>
		</div>
	);
}
