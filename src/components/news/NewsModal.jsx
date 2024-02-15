import { useContext } from "react";
import thumbLarg from "../../assets/thumb_lg.png";
import { SingleNews } from "../../context/newsContext";
import { formattedDate } from "../../utils/date-utils";

export default function NewsModal() {
	const { modalNews, setModalNews } = useContext(SingleNews);

	const thumb = modalNews.modalNewsDetails?.urlToImage;

	function handleClick() {
		setModalNews(() => ({
			showModal: false,
			modalNewsDetails: {},
		}));
	}

	return (
		<div className="bg-black bg-opacity-70 fixed inset-0 z-50 h-full overflow-y-auto min-h-screen">
			<div className="mx-auto absolute z-10 top-6 left-1/4 my-3 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#f1f1f1] p-9 max-md:px-4 lg:my-20 lg:p-11">
				<div className="col-span-12 grid grid-cols-12 gap-4">
					<div className="flex absolute top-3 right-3 bg-slate-700 size-7 justify-center items-center border rounded-full">
						<button className="text-white" onClick={handleClick}>
							X
						</button>
					</div>
					<div className="col-span-12 lg:col-span-12">
						<img
							className="w-full"
							src={thumb ? thumb : thumbLarg}
							alt="thumb"
						/>
						<p className="mt-5 text-base text-[#5C5955]">
							{modalNews.modalNewsDetails?.author}
						</p>
						<p className="mt-5 text-base text-[#5C5955]">
							{formattedDate(
								modalNews.modalNewsDetails?.publishedAt,
								"short"
							) +
								" " +
								formattedDate(
									modalNews.modalNewsDetails?.publishedAt,
									"hour"
								)}
						</p>
					</div>

					<div className="col-span-12 lg:col-span-12">
						<h3 className="mb-2.5  font-bold text-[22px]">
							{modalNews.modalNewsDetails.title}
						</h3>

						<p className="text-base text-[#5C5955]">
							{modalNews.modalNewsDetails?.description}
						</p>
						<p className="text-base text-[#5C5955] mt-3">
							{modalNews.modalNewsDetails?.content}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
