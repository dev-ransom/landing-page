import Section1 from "./Section1";
import Section2 from "./Section2";

const HowItWorks = () => {
	return (
		<div className="h-full w-full relative flex flex-col items-center bg-[#202942] pb-9">
			<div className="flex flex-col w-full pt-16 text-center items-center">
				<div className="flex gap-3 flex-col text-center lg:w-[600px] pb-12 w-full">
					<h1 className="text-[30px] text-white">How It Works?</h1>
					<p className="text-textColor">
						Start working with{" "}
						<span className="text-baseColor font-semibold">Landrick</span> that
						can provide everything you need to generate awareness, drive
						traffic, connect.
					</p>
				</div>
			</div>
			<Section1 />
			<Section2 />
		</div>
	);
};

export default HowItWorks;
