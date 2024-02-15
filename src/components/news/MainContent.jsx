import { useContext } from "react";
import { NewsContext, SingleNews } from "../../context/newsContext";
import FocusedNews from "./FocusedNews";
import LoadingError from "./LoadingError";
import NewsModal from "./NewsModal";
import NewsNoThumb from "./NewsNoThumb";
import NewsWithThumb from "./NewsWithThumb";
import RightSidebar from "./RightSidebar";

export default function MainContent() {
	const { newsFirstPart, newsSecondPart, loading, error } =
		useContext(NewsContext);
	const { modalNews } = useContext(SingleNews);

	if (loading.state) {
		return <LoadingError text={"Loading..."} message={loading.message} />;
	}

	if (error) {
		return <LoadingError text={"Fetching Error.."} message={error} />;
	}

	return (
		<>
			{modalNews.showModal && (
				<NewsModal newsDetails={modalNews.modalNewsDetails} />
			)}
			<main className="my-10 lg:my-14">
				<div className="container mx-auto grid grid-cols-12 gap-8">
					<div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
						{newsFirstPart?.length === 0 ? (
							<div className="col-span-12 grid grid-cols-1 text-center ">
								No data available
							</div>
						) : (
							newsFirstPart?.map((news, i) => {
								if (i === 0) {
									return (
										<FocusedNews
											key={news.publishedAt + i}
											news={news}
										/>
									);
								} else if (i === 1) {
									return (
										<NewsWithThumb
											key={news.publishedAt + i}
											news={news}
										/>
									);
								} else {
									return (
										<NewsNoThumb
											key={news.publishedAt + i}
											news={news}
										/>
									);
								}
							})
						)}
					</div>

					<RightSidebar newsSecondPart={newsSecondPart} />
				</div>
			</main>
		</>
	);
}
