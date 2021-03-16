import { Helmet } from "react-helmet";
import Logo from "src/assets/logo/LogoIcon";
import styled from "styled-components";

const InfoAppStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	max-width: 1200px;
	margin: auto;
	padding-top: 2rem;
	gap: 2rem;

	@media screen and (max-width: 768px) {
		gap: 1rem;
	}

	.logoHeader {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1.5rem;

		@media screen and (max-width: 768px) {
			gap: 1rem;
		}
	}

	.description {
		@media screen and (max-width: 768px) {
			width: 300px;
		}
	}

	h1 {
		font-size: 30px;
		font-weight: 700;
		letter-spacing: 4px;

		@media screen and (max-width: 768px) {
			font-size: 20px;
		}
	}

	p {
		font-size: 16px;
		line-height: 25px;
		color: rgba(41, 41, 41, 1);
		@media screen and (max-width: 768px) {
			font-size: 12px;
		}
	}

	a {
		font-size: 16px;
		font-weight: 600;
		color: #066db1;

		@media screen and (max-width: 768px) {
			font-size: 12px;
		}
	}
`;

const LogoIcon = styled(Logo)`
	height: 7rem;
`;

const InfoAppPage: React.FC = () => {
	return (
		<InfoAppStyled>
			<Helmet>
				<title>Info | Journey App</title>
				<meta name="description" content="Detail Page" />
			</Helmet>
			<div className="logoHeader">
				<LogoIcon />
				<h1 aria-label="Apps Name">Journey</h1>
			</div>
			<div className="description" aria-label="description">
				<p>
					Journey is my result test which I have built web apps called
					"Journey", the web application is responsive on desktop, ipad, and
					phone, and stacks of my project are:
				</p>
				<br />
				<p>
					1. Backend: Express.js <br /> ====== Repo &nbsp;
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/syukronarie/backend_journey">
						https://github.com/syukronarie/backend_journey
					</a>
					<br />
					====== deploy: Heroku
				</p>
				<br />
				<p>
					2. Front end: React.js Using Typescript, custom hooks, and
					styled-components <br />
					====== Repo &nbsp;
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/syukronarie/frontend_journey">
						https://github.com/syukronarie/frontend_journey
					</a>{" "}
					<br />
					====== deploy: Vercel
				</p>
				<br />
				<p>3. Unit testing for Back-end: Mocha and Chai</p>
				<br />
				<p>
					Usefull link: <br />
					===== Production <br />
					*** front-end: &nbsp;
					<a
						target="_blank"
						rel="noreferrer"
						href="https://frontend-journey.vercel.app/">
						https://frontend-journey.vercel.app/
					</a>
					<br />
					*** back-end -- baseURL: &nbsp;
					<a
						target="_blank"
						rel="noreferrer"
						href="https://backend-journey.herokuapp.com/">
						https://backend-journey.herokuapp.com/
					</a>
				</p>
				<br />
				<p>
					~~~ documentation RESTful API ~~~
					<br /> 1. fetch images flickr:
					https://backend-journey.herokuapp.com/flickr
					<br />
					2. search images by tags:
					https://backend-journey.herokuapp.com/flickr?search="query"
					<br /> <br />
					Thanks!
				</p>

				<br />
				<p>
					Made with ❤ by&nbsp;
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/ariesyukron/">
						M Arie Syukron
					</a>
				</p>
			</div>
		</InfoAppStyled>
	);
};

export default InfoAppPage;
