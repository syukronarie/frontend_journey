import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { FlickrResponseType } from "src/utils/types/flickr";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Sizing from "src/styles/Sizing";
import GlobalColors from "src/styles/color/colors";
import ImageHomePage from "../ImageHome/ImageHomePage";
import ShareIcon from "src/assets/icons/ShareIcon";
import LeftArrowIcon from "src/assets/icons/LeftArrowIcon";

const ImageDetailStyled = styled.div`
	.imageDetailWrapper {
		display: flex;
		justify-content: center;
		max-width: 1200px;
		height: auto;
		margin: auto;
		@media screen and (min-width: 768px) {
			padding-top: ${Sizing.NAVBAR_HIGHT};
		}
	}

	.imageWrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		object-fit: cover;
		filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.1));
		z-index: -1;

		@media screen and (max-width: 768px) {
			flex-direction: column;
		}
	}

	.linkButtonLeftSide {
		color: white;
		border-radius: 30px;
		cursor: pointer;
		transition: filter 0.25s ease-in-out;

		&:hover {
			> img {
				filter: brightness(60%);
			}
			> span {
				opacity: 1;
			}
		}
	}

	.backButton {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		position: fixed;
		left: 40px;
		top: 100px;
		cursor: pointer;
	}

	.image {
		width: 500px;
		height: auto;
		border-radius: 30px 0 0 30px;
		transition: filter 0.25s ease-in-out;
		cursor: pointer;
		&:hover {
			filter: brightness(60%);
		}

		@media screen and (max-width: 768px) {
			max-width: 295px;
			margin-top: 20px;
			margin: auto;
			border-radius: 10px;
		}
	}

	.infoImage {
		display: flex;
		justify-content: center;
		align-content: center;
		flex-flow: column;
		position: relative;
		background-color: #fff;
		width: 500px;
		height: 99%;
		border-radius: 0 30px 30px 0;

		@media screen and (max-width: 768px) {
			width: 295px;
			border-radius: 10px;
			margin-top: 15px;
			padding: 5rem 0 2rem 0;

			svg {
				top: 18px;
				left: 22px;
			}
		}
	}

	.infoAuthor {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column;
		gap: 15px;
	}

	.moreImage {
		text-align: center;

		h3 {
			position: relative;
			top: 50px;
			font-size: 20px;
			font-weight: 700;
		}
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${GlobalColors.GREY};
		color: #fff;
		height: 2rem;
		width: 10rem;

		&:hover {
			background-color: ${GlobalColors.FONT_GREY};
		}
	}
`;

const ShareButton = styled(ShareIcon)`
	position: absolute;
	border-radius: 99px;
	top: 20px;
	left: 28px;
	font-size: 1.5rem;
	background-color: ${GlobalColors.WHITE_TRANSPARENT};
	padding: 10px;
	cursor: pointer;
`;

const BackButton = styled(LeftArrowIcon)`
	font-size: 2rem;
	position: fixed;
	left: 40px;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		left: 5px;
		top: 28px;
	}
`;

const DownloadButton = styled.a`
	position: absolute;
	right: 20px;
	top: 20px;
	padding: 10px 10px;
	border-radius: 40px;
	background-color: ${GlobalColors.RED};
	color: #fff;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;
	z-index: 1;

	&:hover {
		background-color: ${GlobalColors.RED_HOVER};
	}
`;

const ImageDetailPage: React.FC = () => {
	const history = useHistory();
	const location = useLocation<FlickrResponseType>();
	const handleGoBack = () => {
		history.goBack();
	};

	const formmatedPublishDate = `${
		location.state.published.split("T")[0]
	} at  ${location.state.published.split("T")[1].slice(0, -1)}`;
	const formmatedAuthor = `${location.state.author.replace(/[{("")}]/g, "")}`;

	// handle scroll top when user click new image
	useEffect(() => {
		if (!location.state) {
			window.location.replace("/");
		}
		window.scrollTo(0, 0);
	}, [location.state]);

	return (
		<>
			{!!location.state && (
				<ImageDetailStyled>
					<Helmet>
						<title>Details | Journey App</title>
						<meta name="description" content="Helmet application" />
					</Helmet>
					<div className="imageDetailWrapper">
						<div className="backButton" onClick={handleGoBack}>
							<BackButton />
						</div>
						<div className="imageWrapper">
							<a
								className="linkButtonLeftSide"
								href={location.state.link}
								target="_blank"
								rel="noreferrer"
								title="View on image Flikr"
								download>
								<img
									className="image"
									src={location.state.media.large}
									alt={`Author by ${location.state.author}`}
								/>
							</a>
							<div className="infoImage">
								<div className="infoAuthor">
									<p>Author: {formmatedAuthor}</p>
									{!!location.state.tags && <p>Tags: {location.state.tags}</p>}
									<p>Published: {formmatedPublishDate}</p>
									<a
										href={location.state.link}
										className="button"
										target="_blank"
										rel="noreferrer">
										View On Flickr
									</a>
								</div>
								<ShareButton />
								<DownloadButton
									href={location.state.media.large}
									download={location.state.media.large}
									title="Download This Image"
									target="_blank">
									Download
								</DownloadButton>
							</div>
						</div>
					</div>
					<div className="moreImage">
						<h3>More images ...</h3>
					</div>
					<ImageHomePage />
				</ImageDetailStyled>
			)}
		</>
	);
};

export default ImageDetailPage;
