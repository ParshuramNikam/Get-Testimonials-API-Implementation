import "./styles.css";
import Testimonial from "./components/Testimonial";

export default function App() {
	return (
		<div className="App h-100 bg-indigo-100">
			<h1 className="text-4xl text-indigo-500 font-medium title-font text-gray-900 pt-4 mb-2 text-center">
				Testimonials Data Example
			</h1>
			<section className="text-gray-600 body-font lg:w-5/6 md:w-6/6 sm:w-full mx-auto p-2 md:p-4">
				<div className="flex flex-wrap -mx-2 mb-8 m-3">
					<Testimonial />
				</div>
			</section>
		</div>
	);
}