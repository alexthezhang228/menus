import menu from "./data"
import MenuItem from "./menuItem"
const Menus=({menus})=>{
  return (
    <div className="section-center">
      {menus.map((item)=>{
        return (
          <MenuItem key={item.id} item={item}></MenuItem>
        )
      })}
    </div>
  )
}
export default Menus