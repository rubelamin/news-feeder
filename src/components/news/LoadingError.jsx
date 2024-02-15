/* eslint-disable react/prop-types */

export default function LoadingError({ text, message }) {
	console.log(message);
	return (
		<div className="col-span-12 grid grid-cols-12 ">
			<div className="flex col-span-12 lg:col-span-12 justify-center items-center">
				<p className="text-base text-[#5C5955]">{text}</p>
				<p className="mt-5 text-base text-[#5C5955]">Something...</p>
			</div>
		</div>
	);
}
