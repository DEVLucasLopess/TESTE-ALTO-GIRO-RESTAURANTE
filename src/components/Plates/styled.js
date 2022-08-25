import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
	padding: 10px;
	display: flex;
	align-items: center;
	color: #136713;
	cursor: pointer;
	margin-bottom: 10px;
	margin-left: 250px;
    margin-right: 250px;

	@media (max-width: 1318px) {
        margin-left: 0px;
    	margin-right: 0px;
    }

    @media (max-width: 700px) {
		flex-direction: column;
    }
`;

export const ProductPhotoArea = styled.div`
	width: 100px;
`;
export const ProductInfoArea = styled.div`
	flex: 1;
	margin-left: 10px;
	margin-right: 10px;
`;
export const ProductButtonArea = styled.div``;

export const ProductPhoto = styled.img`
	width: 100%;
`;
export const ProductName = styled.div`
	font-size: 20px;
	
	@media (max-width: 700px) {
		flex-direction: column;
		text-align: center;
		margin: 0px;
	}
`;
export const ProductPrice = styled.div`
	font-size: 14px;
`;
export const ProductIgredients = styled.div`
	font-size: 11px;
`;

export const ProductButton = styled.img`
	width: 15px;
`;

export const InfoButton = styled.button`
	height: 30px;
	width: 60px;
	background: red;
	color: #000;
	cursor: pointer;
`;

export const InfoAvatiation = styled.div``;

export const ContainerPlates = styled.div`
    display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 700px) {
		flex-direction: column;
	}
`;

export const ContainerInfoPlates = styled.div`
	margin-left: 20px;
	width: 320px;

	@media (max-width: 700px) {
		margin-left: 0;
		width: 0;
	}
`;

export const InfoPlates = styled.div`
	font-weight: bold;
`;

export const ContainerDrink = styled.div`
	margin-right: 20px;
    width: 184px;

	@media (max-width: 700px) {
		margin-right: 0;
		width: 0px;
	}
`;