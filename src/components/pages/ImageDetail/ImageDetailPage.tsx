import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import LeftArrowIcon from "src/assets/icons/LeftArrowIcon";
import ShareIcon from "src/assets/icons/ShareIcon";
import GlobalColors from "src/styles/color/colors";
import { FlickrResponseType } from "src/utils/types/flickr";
import styled from "styled-components";
import ImageHomePage from "../ImageHome/ImageHomePage";

const ImageDetailWrapper = styled.div`
	display: flex;
	justify-content: center;
	max-width: 1200px;
	height: auto;
	margin: auto;
`;

const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	object-fit: cover;
	filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.1));
`;

const Image = styled.img`
	width: 500px;
	height: auto;
	border-radius: 30px 0 0 30px;
	transition: filter 0.25s ease-in-out;
	cursor: pointer;
	&:hover {
		filter: brightness(60%);
	}
`;

const InfoImage = styled.div`
	position: relative;
	background-color: #fff;
	width: 500px;
	height: 99%;
	border-radius: 0 30px 30px 0;
`;

const ShareButton = styled(ShareIcon)`
	position: absolute;
	border-radius: 99px;
	top: 20px;
	left: 28px;
	font-size: 1.5rem;
	background-color: grey;
	padding: 10px;
	cursor: pointer;
`;

const BackButton = styled(LeftArrowIcon)`
	font-size: 2rem;
	position: fixed;
	left: 40px;
	top: 100px;
	cursor: pointer;
`;

const DownloadButton = styled.span`
	position: absolute;
	right: 20px;
	top: 20px;
	padding: 10px 10px;
	border-radius: 40px;
	background-color: red;
	color: #fff;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;
	z-index: 1;

	&:hover {
		background-color: ${GlobalColors.RED};
	}
`;

const LinkButton = styled.a`
	position: absolute;
	top: 90px;
	left: 20px;
	color: black;
	border-radius: 30px;
	padding: 10px;
	cursor: pointer;
	transition: filter 0.25s ease-in-out;

	&:hover {
		> img {
			filter: brightness(60%);
		}
	}
`;

const LinkButtonLeftSide = styled.a`
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
`;

// const LinkSpan = styled.span`
// 	opacity: 0;
// 	position: absolute;
// 	color: white;
// 	top: 50%;
// 	left: 20%;
// 	font-size: 16px;
// 	font-weight: 700;
// 	z-index: 1;
// 	transition: filter 0.25s ease-in-out;
// `;

const ImageDetailPage: React.FC = () => {
	const history = useHistory();
	const location = useLocation<FlickrResponseType>();
	const handleGoBack = () => {
		history.goBack();
	};

	useEffect(() => {
		if (!location.state) {
			window.location.replace("/");
		}
		window.scrollTo(0, 0);
	}, [location.state]);

	return (
		<>
			{!!location.state && (
				<>
					<ImageDetailWrapper>
						<BackButton onClick={handleGoBack} />
						<ImageWrapper>
							<a href={location.state.link} target="_blank" rel="noreferrer">
								<LinkButtonLeftSide>
									<Image src={location.state.media.large} />
								</LinkButtonLeftSide>
							</a>
							<InfoImage>
								<LinkButton>{location.state.link}</LinkButton>
								<ShareButton />
								<a
									href={location.state.media.large}
									download={location.state.media.large}
									title="ImageName">
									<DownloadButton>Download</DownloadButton>
								</a>
							</InfoImage>
						</ImageWrapper>
					</ImageDetailWrapper>
					<ImageHomePage />
				</>
			)}
		</>
	);
};

export default ImageDetailPage;
