/* eslint-disable react/prop-types */

export default function LoadingError({ text, message }) {
	console.log(message);
	return (
		<div className="col-span-12 grid grid-cols-12 ">
			<div className="flex my-12 col-span-12 lg:col-span-12 justify-center items-center">
				<p className="text-base text-[#e42929]">{text}</p>
			</div>
		</div>
	);
}
