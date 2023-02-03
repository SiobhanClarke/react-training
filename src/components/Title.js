export const Title = (props) => {
    return (
        <div className="jumbotron">
            <div className="title">{props.title}</div>
            <div className="sub-title">{props.subTitle}</div>
        </div>
    );
};