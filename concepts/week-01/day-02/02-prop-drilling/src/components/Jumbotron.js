import { IconButton } from "./IconButton";

export const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <div className="title">{props.title}</div>
      <div className="sub-title">{props.subTitle}</div>
      <IconButton iconClassName={props.iconClassName} />
    </div>
  );
};
