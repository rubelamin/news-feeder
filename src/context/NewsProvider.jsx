/* eslint-disable react/prop-types */
import useNewsQuery from "../hooks/useNewsQuery";
import { NewsContext } from "./newsContext";

export default function NewsProvider({ children }) {
	const {
		newsData,
		newsFirstPart,
		newsSecondPart,
		loading,
		error,
		setTerms,
	} = useNewsQuery();
	return (
		<NewsContext.Provider
			value={{
				newsData,
				newsFirstPart,
				newsSecondPart,
				loading,
				error,
				setTerms,
			}}
		>
			{children}
		</NewsContext.Provider>
	);
}
