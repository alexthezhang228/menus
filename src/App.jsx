/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-19 15:27:14
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-30 15:22:49
 * @FilePath: /menu/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE  Tti
 */
/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-19 15:27:14
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-30 13:44:50
 * @FilePath: /menu/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import data from './data'
import Title from './title';
import { useState } from 'react';
import Menus from './menus';
import Categories from './catogories';

const allCategories=['all',...new Set(data.map((da)=>da.category))]

const App = () => {
  const [menus,setMenu]=useState(data)
  const [category,setCategory]=useState(allCategories)
  const filterItem=(category)=>{
    if (category==='all'){
      setMenu(data)
      return 
    }
    const newItems=menus.filter((item)=>item.category===category)
    setMenu(newItems)
  }
  return (
    <main>
      <section className='menu'>
      <Title title='Our Menu'/>
      <Categories  category={category} filterItem={filterItem}/>
      <Menus menus={menus}/>
      </section>
    </main>)
};
export default App;
