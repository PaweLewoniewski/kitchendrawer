import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reducer";
import { RootState } from "../store/store";
import { AllkitchenData, RoomDimension } from '../store/types';
import BottomView from './bottomView';
import TopView from './topView';
import CornersBotView from './cornersBotView';
import CornersTopView from './cornersTopView';
import RestrictionView from './restrictionsView';
import HorizontalLine from "./horizontalLine";
import VerticalLine from "./verticalLine";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { isDisabled } from "@testing-library/user-event/dist/utils";

type PlaygroundViewProps = {
    componentToPrint?: any;
};


const PlaygroundView = ({ componentToPrint }: PlaygroundViewProps) => {
    const { id } = useParams();
    const { kitchenData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const localData: string | null = localStorage.getItem("kitchenData");
    const [loadData, setLoadData] = useState<AllkitchenData[]>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localData !== null && loadData === undefined) {
            const roomDataObj = JSON.parse(localData);
            setLoadData(roomDataObj);
            dispatch({ type: "ROOM_DIMENSIONS", payload: roomDataObj });
        }
        if (loadData !== kitchenData) {
            setLoadData(kitchenData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadData, localData]);

    const mainData = loadData?.find((item: AllkitchenData) => item.roomDimension?.roomWidth && item.roomDimension.roomDepth);
    const roomWidth = mainData?.roomDimension?.roomWidth ? mainData?.roomDimension?.roomWidth / 1 : 0;
    const roomDepth = mainData?.roomDimension?.roomDepth ? mainData?.roomDimension?.roomDepth / 1 : 0;
    const wallDistance = mainData?.roomDimension?.distance ? mainData?.roomDimension?.distance / 1 : 0;

    return (
        <TransformWrapper
            initialScale={1}
            initialPositionX={200}
            initialPositionY={200}
            panning={{disabled:true}}
        >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <Fragment>
                    <div className="tools">
                        <button onClick={() => zoomIn()}>+</button>
                        <button onClick={() => zoomOut()}>-</button>
                        <button onClick={() => resetTransform()}>x</button>
                    </div>

                    <TransformComponent>
                        {roomWidth !== 0 ?
                            <PlaygroundOutter ref={componentToPrint}>
                                <VerticalLine dimensionX={roomWidth} />
                                <HorizontalLine dimensionY={roomDepth} />
                                <Room key={0} roomWidth={roomWidth} roomDepth={roomDepth} distance={wallDistance} className='workspace' ref={componentToPrint}>
                                    {loadData && loadData.length > 0 ? loadData.map((item: AllkitchenData, index) =>
                                    (
                                        <Fragment key={index}>
                                            {id === 'bottomCabinets' ?
                                                <>
                                                    <BottomView key={index} data={item.botCabinets} index={index} positionX={item.botCabinets?.xAxis} positionY={item.botCabinets?.yAxis} />
                                                    <CornersBotView data={item.cornersBot} index={index} positionX={item.cornersBot?.xAxis} positionY={item.cornersBot?.yAxis} />
                                                </>
                                                : ''}
                                        </Fragment>
                                    )) : ''}

                                    {loadData && loadData.length > 0 ? loadData.map((item: AllkitchenData, index) =>
                                    (
                                        <Fragment key={index}>
                                            {id === 'topCabinets' ?
                                                <>
                                                    <TopView key={index} data={item.topCabinets} index={index} positionX={item.topCabinets?.xAxis} positionY={item.topCabinets?.yAxis} />
                                                    <CornersTopView data={item.cornersTop} index={index} positionX={item.cornersTop?.xAxis} positionY={item.cornersTop?.yAxis} />
                                                </>
                                                : ''}
                                        </Fragment>
                                    )) : ''}

                                    {loadData && loadData.length > 0 ? loadData.map((item: AllkitchenData, index) =>
                                    (
                                        <Fragment key={index}>
                                            {id === 'preview' ?
                                                <>
                                                    <BottomView data={item.botCabinets} index={index} positionX={item.botCabinets?.xAxis} positionY={item.botCabinets?.yAxis} />
                                                    <TopView data={item.topCabinets} index={index} positionX={item.topCabinets?.xAxis} positionY={item.topCabinets?.yAxis} />
                                                    <CornersBotView data={item.cornersBot} index={index} positionX={item.cornersBot?.xAxis} positionY={item.cornersBot?.yAxis} />
                                                    <CornersTopView data={item.cornersTop} index={index} positionX={item.cornersTop?.xAxis} positionY={item.cornersTop?.yAxis} />
                                                </>
                                                : ''}
                                        </Fragment>
                                    )) : ''}
                                    {loadData && loadData.length > 0 ? loadData.map((item: AllkitchenData, index) =>
                                    (
                                        <Fragment key={index}>
                                            <>
                                                <RestrictionView data={item.restrictions} index={index} positionX={item.restrictions?.xAxis} positionY={item.restrictions?.yAxis} />
                                            </>
                                        </Fragment>
                                    )) : ''}
                                </Room>
                            </ PlaygroundOutter>
                            : 'Set Room Dimensions'}
                    </TransformComponent>
                </Fragment>
            )}
        </TransformWrapper>
    );
};
export default PlaygroundView;

const Room = styled.div<RoomDimension>`
    width:${props => props.roomWidth !== 0 ? `${props.roomWidth}px` : '0px'};
    height:${props => props.roomDepth !== 0 ? `${props.roomDepth}px` : '0px'};
    padding:${props => props.distance !== 0 ? `${props.distance}px` : '0px'};
    border:2px solid black;
    box-sizing: border-box;
    display:flex;
    position:relative;
    align-self:center;
    justify-self:center;
    &:before{
        content: '';
        border:1px dotted black;
        width:100%;
        height:100%;       
    }
`;

const PlaygroundOutter = styled.div`
    position:relative;
    padding:0px 100px;
    margin:100px 0px;
`;

