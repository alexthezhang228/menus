/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-30 15:07:53
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-30 15:16:46
 * @FilePath: /menu/src/catogories.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Categories=({category,filterItem})=>{
  return (
    <div className="btn-container">
      {category.map((item)=>{
        return (
          <button type="button" className="btn" key={item} onClick={()=>filterItem(item)}>
            {item}
          </button>
        )
      })}
    </div>
  )}
export default Categories