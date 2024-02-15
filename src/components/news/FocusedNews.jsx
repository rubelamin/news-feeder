/* eslint-disable react/prop-types */
import { useContext } from "react";
import thumbLarg from "../../assets/thumb_lg.png";
import { SingleNews } from "../../context/newsContext";
import { formattedDate } from "../../utils/date-utils";

export default function FocusedNews({ news }) {
	const { setModalNews } = useContext(SingleNews);
	const thumb = news?.urlToImage;

	function handleClick() {
		setModalNews(() => ({
			showModal: true,
			modalNewsDetails: { ...news },
		}));
	}
	return (
		<div className="col-span-12 grid grid-cols-12 gap-4">
			<div className="col-span-12 lg:col-span-4">
				<a onClick={handleClick}>
					<h3 className="mb-2.5  font-bold text-[22px]">
						{news?.title}
					</h3>
				</a>
				<p className="text-base text-[#5C5955]">{news?.description}</p>
				<p className="mt-5 text-base text-[#5C5955]">
					{formattedDate(news?.publishedAt, "short")}
				</p>
			</div>

			<div className="col-span-12 lg:col-span-8">
				<img
					className="w-full"
					src={thumb ? thumb : thumbLarg}
					alt="thumb"
				/>
				<p className="mt-5 text-base text-[#5C5955]">{news?.author}</p>
			</div>
		</div>
	);
}
