interface TopViewProp {
    children?: any;
}

const TopView = ({ children }: TopViewProp) => {
    return (
        <div>{children}</div>
    );
};
export default TopView;