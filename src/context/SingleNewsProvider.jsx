/* eslint-disable react/prop-types */
import { useState } from "react";
import { SingleNews } from "./newsContext";

export default function SingleNewsProvider({ children }) {
	const [modalNews, setModalNews] = useState({
		showModal: false,
		modalNewsDetails: {},
	});
	return (
		<SingleNews.Provider value={{ modalNews, setModalNews }}>
			{children}
		</SingleNews.Provider>
	);
}
