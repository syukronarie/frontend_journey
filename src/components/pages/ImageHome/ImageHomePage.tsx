import React, { useContext, useEffect } from "react";
import { GetAllDataImage } from "src/api/imageApi";
import ShareIcon from "src/assets/icons/ShareIcon";
import IMAGE_CONSTANT from "src/utils/constants/imageConstant";
import { ImageContext } from "src/utils/contexts/ProviderImageContext";
import renderLink from "src/utils/helpers/linkHandler";
import styled from "styled-components";
import useLoadHandler from "src/utils/hooks/useLoad";
import { useHistory } from "react-router";
import slugGenerator from "src/utils/helpers/slugGenerator";
import GlobalColors from "src/styles/color/colors";

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
	width: 100%;
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

const DownloadButton = styled.a`
	display: none;
	position: absolute;
	right: 15px;
	top: 15px;
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

const MasonryImage = styled.img`
	position: relative;
	border-radius: 20px;
	overflow: hidden;
	width: 100%;
	transition: 0.3s ease-in-out;
	cursor: zoom-in;
`;

const LinkButton = styled.a`
	display: none;
	position: absolute;
	left: 20px;
	bottom: 22px;
	color: black;
	background-color: ${GlobalColors.WHITE};
	border-radius: 30px;
	padding: 10px;
	opacity: 0.7;

	&:hover {
		opacity: 0.9;
	}
`;

const ShareButton = styled(ShareIcon)`
	display: none;
	position: absolute;
	border-radius: 99px;
	bottom: 18px;
	right: 18px;
	font-size: 1.5rem;
	background-color: ${GlobalColors.WHITE};
	padding: 10px;
	cursor: pointer;
	opacity: 0.7;

	&:hover {
		opacity: 0.9;
	}
`;

const ImageHomePage: React.FC = () => {
	const {
		dispatch,
		state: { isLoading, data },
	} = useContext(ImageContext);

	const {
		handlerLoad,
		loadRef,
		loading: ItemLoading,
		percentage,
	} = useLoadHandler();

	// Handle First Paint
	useEffect(() => {
		(async () => {
			const dataImage = await GetAllDataImage();
			dispatch({
				type: IMAGE_CONSTANT.SET_DATA_IMAGE,
				payload: dataImage.data.data,
			});
			dispatch({
				type: IMAGE_CONSTANT.SET_IS_LOADING,
				payload: false,
			});
		})();
	}, [dispatch]);

	const history = useHistory();
	const handleGoToDetail = (item) => {
		const link = slugGenerator(item.published);
		history.push(`/${link}`, item);
	};

	return (
		<MasonryWrapper>
			<Masonry>
				{isLoading || (!!ItemLoading && `${percentage}%`)}
				<div style={{ display: !ItemLoading ? "" : "none" }}>
					{data?.map((item, i) => (
						<MasonryItem onClick={() => handleGoToDetail(item)} key={i}>
							<DownloadButton
								href={item.media.large}
								target="_blank"
								rel="noreferrer"
								download>
								Download
							</DownloadButton>
							<MasonryImage
								src={`${item.media.small}`}
								alt={item.title}
								ref={loadRef}
								onLoad={handlerLoad}
							/>
							<LinkButton href={item.link} target="_blank">
								{renderLink(item.link)}
							</LinkButton>
							<ShareButton />
						</MasonryItem>
					))}
				</div>
			</Masonry>
		</MasonryWrapper>
	);
};

export default ImageHomePage;
