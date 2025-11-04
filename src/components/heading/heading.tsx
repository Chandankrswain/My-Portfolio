interface HeadingProps {
  heading?: string;
  classname?: string;
}

export const Heading = ({ heading, classname }: HeadingProps) => {
  return <div className={classname}>{heading}</div>;
};

export default Heading;
