export default function parseDescription(props) {
  let insideHTMLTag = false

  for (let i = 0; i < props.desc.length; i++) {
    const workingCharacter = props.desc[i]

    if (workingCharacter === '<') {
      insideHTMLTag = true;
    } else if (workingCharacter === ">") {
      insideHTMLTag = false;
    } if (insideHTMLTag) {
      props.desc.slice(i, i)
    }
  }


  if (props.desc.truncateLength > props.num) {
    return props.desc.slice(0, props.num) + '...'
  } else {
    return props.desc
  }
}