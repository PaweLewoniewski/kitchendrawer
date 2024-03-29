import { Fragment, useEffect, useRef, useState } from "react";
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
import SingleBtn from "../assets/SingleBtn/SingleBtn";
import { CENTER, PRINT, ZOOM_IN, ZOOM_OUT } from "../data/dictionary";
import { useReactToPrint } from 'react-to-print';

const PlaygroundView = () => {
    const { id } = useParams();
    const { kitchenData } = useAppSelector((store: RootState) => store.multiReducers.localDataReducer);
    const localData: string | null = localStorage.getItem("kitchenData");
    const [loadData, setLoadData] = useState<AllkitchenData[]>();
    const dispatch = useAppDispatch();
    const componentToPrint = useRef<HTMLDivElement>(null);
    const [zoomer, setZoomer] = useState(1);


    useEffect(() => {
        if (localData !== null && loadData === undefined) {
            const roomDataObj = JSON.parse(localData);
            setLoadData(roomDataObj);
            dispatch({ type: "ROOM_DIMENSIONS", payload: roomDataObj });
        }
        if (loadData !== kitchenData) {
            setLoadData(kitchenData);
        }
        dispatch({ type: "GROUND_SCALE", payload: zoomer });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadData, localData, zoomer]);

    const mainData = loadData?.find((item: AllkitchenData) => item.roomDimension?.roomWidth && item.roomDimension.roomDepth);
    const roomWidth = mainData?.roomDimension?.roomWidth ? mainData?.roomDimension?.roomWidth / 1 : 0;
    const roomDepth = mainData?.roomDimension?.roomDepth ? mainData?.roomDimension?.roomDepth / 1 : 0;
    const wallDistance = mainData?.roomDimension?.distance ? mainData?.roomDimension?.distance / 1 : 0;

    const printContent = useReactToPrint({
        content: () => componentToPrint.current,
    });

    return (
        <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
            panning={{ excluded: ['div'] }}
            onZoom={(rest) => setZoomer(rest.state.scale)}
        >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <Fragment>
                    <SpecialBtns>
                        <SingleBtn btnName={ZOOM_IN} onClick={() => zoomIn()} />
                        <SingleBtn btnName={ZOOM_OUT} onClick={() => zoomOut()} />
                        <SingleBtn btnName={CENTER} onClick={() => resetTransform()} />
                        <SingleBtn btnName={PRINT} onClick={printContent} />
                    </SpecialBtns>
                    {/* <RoomFreeSpace>free width: {roomWidth}cm | free depth: {roomDepth}cm</RoomFreeSpace> */}
                    <TransformComponent wrapperStyle={{ overflow: 'visible' }}>
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
                                <RoomDim>[width: {roomWidth}cm X depth: {roomDepth}cm]</RoomDim>
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

const RoomDim = styled.div`
    text-align:right;
    align-items:center;
    padding:2px 5px;
`;

// const RoomFreeSpace = styled.div`
//     position:absolute;
//     top:0;
//     left:0;
//     display:flex;
//     padding:5px 7px;
//     z-index:500;
// `;

const SpecialBtns = styled.div`
    position:absolute;
    top:0;
    right:0;
    display:flex;
    padding:5px 7px;
    z-index:500;
`;


