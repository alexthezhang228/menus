/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-30 14:15:59
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-30 14:43:31
 * @FilePath: /menu/src/menuItem.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const MenuItem=({item})=>{
  return (
    <article className="menu-item">
      <img src={item.img} alt={item.title} className="img"></img>
      <div className="item-info">
        <header>
          <h5>{item.title}</h5>
          <span className="'item-price">&{item.price}</span>
        </header>
        <p className=""></p>
      </div>
    </article>
  )
}

export default MenuItem