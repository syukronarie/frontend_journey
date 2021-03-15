import React, { useContext, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { GetAllDataImage, GetAllDataImageByTags } from "src/api/imageApi";
import { ImageContext } from "src/utils/contexts/ProviderImageContext";
import useLoadHandler from "src/utils/hooks/useLoad";
import styled from "styled-components";
import slugGenerator from "src/utils/helpers/slugGenerator";
import renderLink from "src/utils/helpers/linkHandler";
import IMAGE_CONSTANT from "src/utils/constants/imageConstant";
import Sizing from "src/styles/Sizing";
import GlobalColors from "src/styles/color/colors";
import ShareIcon from "src/assets/icons/ShareIcon";

const ImageHomeStyled = styled.div`
	max-width: 1200px;
	margin-right: auto;
	margin-left: auto;

	@media screen and (min-width: 768px) {
		padding-top: ${Sizing.NAVBAR_HIGHT};
	}

	.masonry {
		columns: 2;
		column-gap: 10px;
		padding: 15px;

		@media screen and (max-width: 1023px) and (min-width: 768px) {
			columns: 3;
		}

		@media screen and (min-width: 1024px) {
			columns: 4;
		}
	}

	.masonryItem {
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
	}

	.masonryImage {
		position: relative;
		border-radius: 20px;
		overflow: hidden;
		width: 100%;
		transition: 0.3s ease-in-out;
		cursor: zoom-in;
	}

	.linkButton {
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
	}

	.loadingPercentage {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: fixed;
		height: 100vh;
		width: 100%;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
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

type DotType = {
	percentage?: number;
};

const Dot = styled.div<DotType>`
	height: 1rem;
	width: ${(props) => props.percentage + "px"};
	text-align: center;
	background-color: ${GlobalColors.RED};
	color: #fff;
	border-radius: 30px;
	display: inline-block;
	transition: 0.5s ease-in-out;
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

	const location = useLocation();
	const param = new URLSearchParams(location.search);
	const search = param.get("search");

	// Handle First Paint
	useEffect(() => {
		if (!!search) {
			(async () => {
				const dataImage = await GetAllDataImageByTags(search);
				dispatch({
					type: IMAGE_CONSTANT.SET_DATA_IMAGE,
					payload: dataImage.data.data,
				});
				dispatch({
					type: IMAGE_CONSTANT.SET_IS_LOADING,
					payload: false,
				});
			})();
		} else {
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
		}
	}, [dispatch, search]);

	const history = useHistory();
	const handleGoToDetail = (item: any) => {
		const link = slugGenerator(item.published);
		history.push(`/${link}`, item);
	};

	return (
		<ImageHomeStyled>
			<div className="masonry">
				{isLoading ||
					(!!ItemLoading && (
						<div className="loadingPercentage">
							Loading
							<Dot percentage={percentage}>
								<p>{percentage}%</p>
							</Dot>
						</div>
					))}
				<div style={{ display: !ItemLoading && !isLoading ? "" : "none" }}>
					{data?.map((item, i) => (
						<div
							className="masonryItem"
							onClick={() => handleGoToDetail(item)}
							key={i}>
							<DownloadButton
								href={item.media.large}
								target="_blank"
								rel="noreferrer"
								download>
								Download
							</DownloadButton>
							<img
								className="masonryImage"
								src={`${item.media.small}`}
								alt={item.title}
								ref={loadRef}
								onLoad={handlerLoad}
							/>
							<a
								className="linkButton"
								href={item.link}
								target="_blank"
								rel="noreferrer">
								{renderLink(item.link)}
							</a>
							<ShareButton />
						</div>
					))}
				</div>
			</div>
		</ImageHomeStyled>
	);
};

export default ImageHomePage;
