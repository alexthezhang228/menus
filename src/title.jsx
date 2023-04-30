const Title=({title})=>{
  return (
    <div className="title">
      <h2>{title||'default menu'}</h2>
      <div className="title-underline"></div>
    </div>  
  )
}
export default Title  