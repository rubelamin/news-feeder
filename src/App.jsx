import Page from "./components/Page";
import NewsProvider from "./context/NewsProvider";
import SingleNewsProvider from "./context/SingleNewsProvider";

function App() {
	return (
		<NewsProvider>
			<SingleNewsProvider>
				<Page />
			</SingleNewsProvider>
		</NewsProvider>
	);
}

export default App;
