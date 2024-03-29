import { useEffect, useState } from "react";

const useNewsQuery = () => {
	const [newsData, setNewsData] = useState([]);
	const [loading, setLoading] = useState({
		state: false,
		message: "",
	});

	const [error, setError] = useState(null);
	const [terms, setTerms] = useState({
		cat: null,
		search: "",
	});

	useEffect(() => {
		console.log(terms.search);
		setLoading({
			state: true,
			message: "Loading news...",
		});

		const fetchNewsData = async (cat, search) => {
			try {
				setLoading({
					state: true,
					message: "Fetching news...",
				});

				let qUrl;
				if (cat === null && search === "") {
					qUrl = import.meta.env.VITE_NEWS_FULL;
				} else if (cat !== null && search === "") {
					qUrl = `${import.meta.env.VITE_NEWS_FULL}?category=${cat}`;
				} else if (cat === null && search !== "") {
					qUrl = `${import.meta.env.VITE_NEWS_SEARCH}=${search}`;
				}

				console.log(qUrl);

				const response = await fetch(`${qUrl}`);

				if (!response.ok) {
					throw new Error("There something wrong!");
				}

				const data = await response.json();

				if (search !== "") {
					setNewsData(data?.result);
				} else {
					setNewsData(data?.articles);
				}
			} catch (err) {
				setError(err);
			} finally {
				setLoading({
					state: false,
					message: "",
				});
			}
		};

		fetchNewsData(terms.cat, terms.search);
	}, [terms.cat, terms.search]);

	const midleIndex = Math.floor(newsData?.length / 2);
	const [newsFirstPart, newsSecondPart] = [
		newsData?.slice(0, midleIndex),
		newsData?.slice(midleIndex),
	];

	return {
		error,
		loading,
		newsData,
		newsFirstPart,
		newsSecondPart,
		setTerms,
	};
};

export default useNewsQuery;
