export default function Truncate(props) {
  if (props.desc.length > props.num) {
    if(props.etc){
      return props.desc.slice(0, props.num) + props.etc
    } else {
      return props.desc.slice(0, props.num) + '...'
    }
  } else {
    return props.desc
  }
}