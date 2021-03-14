import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
	children: ReactNode;
	disabled?: boolean;
};

const PrimaryButton = ({ children, disabled }: Props) => {
	return <Button disabled={disabled}>{children}</Button>;
};

const Button = styled.button`
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	font-size: 17px;
`;

export default PrimaryButton;
