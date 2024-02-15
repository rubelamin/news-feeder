import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function FooterSocial() {
	return (
		<div className="flex space-x-6">
			<a>
				<FaInstagram size={24} color="white" />
			</a>
			<a>
				<FaFacebook size={24} color="white" />
			</a>
			<a>
				<FaYoutube size={24} color="white" />
			</a>
		</div>
	);
}
