/* eslint-disable react/prop-types */
import RightNewsNoThumb from "./RightNewsNoThumb";
import RightNewsWThumb from "./RightNewsWThumb";

export default function RightSidebar({ newsSecondPart }) {
	return (
		<div className="col-span-12 self-start xl:col-span-4">
			<div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
				{newsSecondPart?.length === 0 ? (
					<div className="col-span-12 grid grid-cols-1 text-center ">
						No data available
					</div>
				) : (
					newsSecondPart?.map((news, i) => {
						if (i === 0) {
							return (
								<RightNewsWThumb
									key={news.publishedAt + i}
									news={news}
								/>
							);
						} else {
							return (
								<RightNewsNoThumb
									key={news.publishedAt + i}
									news={news}
								/>
							);
						}
					})
				)}
			</div>
		</div>
	);
}
