import lightLogo from "../../assets/logo_light.png";
import FooterList from "./FooterList";
import FooterSocial from "./FooterSocial";
import FooterSubscribe from "./FooterSubscribe";

export default function Footer() {
	const date = new Date();

	return (
		<footer className="bg-neutral-800 pb-8 pt-20 text-white sm:pt-24">
			<div className="container mx-auto">
				<div className="xl:grid xl:grid-cols-12 xl:gap-8">
					<div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:col-span-7 xl:grid-cols-5">
						<img
							className="max-md:col-span-2"
							src={lightLogo}
							alt="lws"
						/>
						<FooterList />

						<FooterSocial />
					</div>
					<FooterSubscribe />
				</div>
			</div>
			<div className="container mt-6 lg:mt-12">
				<p className="text-center">
					Copyright &copy;{date.getFullYear()} | All rights reserved
					by Learn with Sumit
				</p>
			</div>
		</footer>
	);
}
