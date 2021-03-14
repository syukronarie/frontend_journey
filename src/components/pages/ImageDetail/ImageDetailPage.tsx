import { useHistory } from "react-router";
import LeftArrowIcon from "src/assets/icons/LeftArrowIcon";
import ShareIcon from "src/assets/icons/ShareIcon";
import styled from "styled-components";

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
		background-color: #a80000;
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

const LinkSpan = styled.span`
	opacity: 0;
	position: absolute;
	color: white;
	top: 50%;
	left: 20%;
	font-size: 16px;
	font-weight: 700;
	z-index: 1;
	transition: filter 0.25s ease-in-out;
`;

const ImageDetailPage: React.FC = () => {
	const history = useHistory();

	const handleGoBack = () => {
		history.goBack();
	};

	return (
		<ImageDetailWrapper>
			<BackButton onClick={handleGoBack} />
			<ImageWrapper>
				<LinkButtonLeftSide>
					<LinkSpan>jlhadsfhkjdhsafkj</LinkSpan>
					<Image src="https://source.unsplash.com/random/243" />
				</LinkButtonLeftSide>
				<InfoImage>
					<LinkButton>Blhhjdfk</LinkButton>
					<ShareButton />
					<DownloadButton>Download</DownloadButton>
				</InfoImage>
			</ImageWrapper>
		</ImageDetailWrapper>
	);
};

export default ImageDetailPage;
