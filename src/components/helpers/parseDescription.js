export default function parseDescription(props) {
  let workingStr = "";
  let doParse = false;

  for (let i = 0; i < props.desc.length; i++) {
    if (props.desc[i] === "<") {
      doParse = false;
    } else if (props.desc[i] === ">") {
      doParse = true;
    } else if (doParse) {
      workingStr += props.desc[i];
    }
  }

  if (props.num) {
    if (workingStr.length > props.num) {
      return workingStr.slice(0, props.num) + "...";
    } else {
      return workingStr;
    }
  } else {
    return workingStr;
  }
}
