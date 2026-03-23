interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`max-w-6xl mx-auto px-6 md:px-8 lg:px-10 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

