
interface BottomViewProp {
    children?: any;
}


const BottomView = ({ children }: BottomViewProp) => {
    return (
        <div>{children}</div>
    );
};
export default BottomView;