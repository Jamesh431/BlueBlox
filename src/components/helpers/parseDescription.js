let startingIndex = 0
export default function ParseDescription(props) {
  console.log(props.desc.length)
  console.log(props.desc)
  console.log(props.desc)
  while (startingIndex < props.desc.length) {
    const openingTag = props.desc.indexOf('<', 1)
    const endingTag = props.desc.indexOf('>')

    if (openingTag === -1) {
      break;
    }
    if (endingTag === -1) {
      break;
    }
    let workingStr = props.desc.slice(0, openingTag) + props.desc.slice(endingTag + 1)
    console.log(workingStr)
    console.log(workingStr)
    console.log(workingStr)
    startingIndex = openingTag
  } 


  if (props.desc.length > props.num) {
    return props.desc.slice(0, props.num) + '...'
  } else {
    return props.desc
  }
}