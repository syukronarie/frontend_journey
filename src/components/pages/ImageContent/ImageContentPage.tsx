import React from "react";
import ShareIcon from "src/assets/icons/ShareIcon";
import styled from "styled-components";

const MasonryWrapper = styled.div`
	padding: 1.5em;
	max-width: 1200px;
	margin-right: auto;
	margin-left: auto;
`;

const Masonry = styled.div`
	columns: 1;
	column-gap: 10px;
	@media screen and (max-width: 1023px) and (min-width: 768px) {
		columns: 3;
	}

	@media screen and (min-width: 1024px) {
		columns: 4;
	}
`;

const MasonryItem = styled.div`
	display: inline-block;
	position: relative;
	vertical-align: top;
	margin-bottom: 10px;
	border-radius: 20px;
	filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
	transition: filter 0.25s ease-in-out;
	&:hover {
		filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.7));
		> img {
			filter: brightness(60%);
		}
		> span,
		a,
		svg {
			display: flex;
		}
	}
`;

const DownloadButton = styled.span`
	display: none;
	position: absolute;
	right: 10px;
	top: 10px;
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

const MasonryImage = styled.img`
	position: relative;
	border-radius: 20px;
	overflow: hidden;
	width: 100%;
	transition: 0.3s ease-in-out;
`;

const LinkButton = styled.a`
	display: none;
	position: absolute;
	left: 20px;
	bottom: 20px;
	color: black;
	background-color: white;
	border-radius: 30px;
	padding: 10px;
`;

const ShareButton = styled(ShareIcon)`
	display: none;
	position: absolute;
	border-radius: 99px;
	bottom: 20px;
	right: 20px;
	font-size: 1.5rem;
	background-color: grey;
	padding: 10px;
`;

const ImageContentPage: React.FC = () => {
	return (
		<MasonryWrapper>
			<Masonry>
				{Array.from({ length: 20 }).map((e, i) => (
					<MasonryItem>
						<DownloadButton>Download</DownloadButton>
						<MasonryImage
							src={`https://source.unsplash.com/random/${i}`}
							alt=""
						/>
						<LinkButton href="#">bla bla bla</LinkButton>
						<ShareButton />
					</MasonryItem>
				))}
			</Masonry>
		</MasonryWrapper>
	);
};

export default ImageContentPage;
