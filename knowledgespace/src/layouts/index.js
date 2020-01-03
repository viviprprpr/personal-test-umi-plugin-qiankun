function BasicLayout(props) {
  console.log('这个路径就不对了', props.location)

  return (
    <div>
      {props.children}
    </div>
  );
}

export default BasicLayout;
