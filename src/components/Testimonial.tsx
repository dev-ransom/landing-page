interface TestimonialCardProps {
	logo: string;
	quote: string;
	author: string;
}

const TestimonialCard = ({ logo, quote, author }: TestimonialCardProps) => {
	return (
		<div className="flex flex-col items-center p-6 border rounded-lg shadow-lg text-center bg-white gap-5">
			<img src={logo} alt={author} className="w-[100px]" />

			<p className="text-textColor mb-4">&quot;{quote}&quot;</p>

			<p className="text-blue-600 font-semibold">- {author}</p>
		</div>
	);
};

export default TestimonialCard;
